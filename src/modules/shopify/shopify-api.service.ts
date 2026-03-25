import {
  Injectable,
  Logger,
  NotFoundException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from './shopify.repository';

@Injectable()
export class ShopifyApiService {
  private readonly logger = new Logger(ShopifyApiService.name);
  private productCache = new Map<string, { data: any; expires: number }>();
  private collectionCache = new Map<string, { data: any; expires: number }>();

  constructor(
    private readonly config: ConfigService,
    private readonly repository: ShopifyRepository,
  ) { }

  private async shopifyFetch(
    shop: string,
    endpoint: string,
    options: RequestInit = {},
    retryCount = 0,
  ): Promise<any> {
    const merchant = await this.repository.findByShop(shop);
    if (!merchant || !merchant.accessToken) {
      throw new UnauthorizedException(`Merchant ${shop} not found or not connected`);
    }

    const url = `https://${shop}/admin/api/2024-01/${endpoint}`;
    const headers = {
      'X-Shopify-Access-Token': merchant.accessToken,
      'Content-Type': 'application/json',
      ...options.headers,
    };

    const response = await fetch(url, { ...options, headers });

    if (response.status === 401) {
      await this.repository.markUninstalled(shop);
      throw new UnauthorizedException('Shopify access token is invalid');
    }

    if (response.status === 404) {
      this.logger.error(`Shopify 404 on URL: ${url}`);
      throw new NotFoundException('Shopify resource not found');
    }

    if (response.status === 429) {
      if (retryCount < 1) {
        this.logger.warn(`Rate limited for ${shop}, retrying in 1s...`);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return this.shopifyFetch(shop, endpoint, options, retryCount + 1);
      }
      throw new BadRequestException('Shopify rate limit exceeded');
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new BadRequestException(
        `Shopify API error: ${JSON.stringify(errorData.errors || errorData)}`,
      );
    }

    return response.json();
  }

  private stripHtml(html: string): string {
    return html ? html.replace(/<[^>]*>/g, '').trim() : '';
  }

  public async graphqlFetch(shop: string, query: string, variables: any = {}): Promise<any> {
    const merchant = await this.repository.findByShop(shop);
    if (!merchant || !merchant.accessToken) {
      throw new UnauthorizedException(`Merchant ${shop} not found or not connected`);
    }

    const url = `https://${shop}/admin/api/2024-01/graphql.json`;
    const headers = {
      'X-Shopify-Access-Token': merchant.accessToken,
      'Content-Type': 'application/json',
    };

    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new BadRequestException(`Shopify GraphQL Error: ${errorText}`);
    }

    const result = await response.json();
    if (result.errors) {
      throw new BadRequestException(`Shopify GraphQL Business Error: ${JSON.stringify(result.errors)}`);
    }

    return result.data;
  }

  async getProducts(shop: string, skipCache = false) {
    const now = Date.now();
    const cached = this.productCache.get(shop);

    if (!skipCache && cached && cached.expires > now) {
      return cached.data;
    }

    const query = `
      query getProducts {
        products(first: 50) {
          nodes {
            id
            title
            handle
            onlineStoreUrl
            bodyHtml
            productType
            status
            images(first: 5) {
              nodes { url }
            }
            variants(first: 50) {
              nodes {
                id
                title
                price
                availableForSale
                inventoryQuantity
              }
            }
          }
        }
      }
    `;

    const data = await this.graphqlFetch(shop, query);
    const products = data.products.nodes.map((p: any) => this.mapGqlProduct(p));

    this.productCache.set(shop, {
      data: products,
      expires: now + 5 * 60 * 1000,
    });

    return products;
  }

  async getProduct(shop: string, productId: string) {
    // Convert REST ID to GID if necessary
    const gid = productId.startsWith('gid://') ? productId : `gid://shopify/Product/${productId}`;

    const query = `
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          title
          handle
          onlineStoreUrl
          bodyHtml
          productType
          images(first: 5) {
            nodes { url }
          }
          variants(first: 50) {
            nodes {
              id
              title
              price
              availableForSale
              inventoryQuantity
            }
          }
        }
      }
    `;

    const data = await this.graphqlFetch(shop, query, { id: gid });
    if (!data.product) throw new NotFoundException('Product not found in Shopify');

    return this.mapGqlProduct(data.product);
  }

  async getCollections(shop: string) {
    const now = Date.now();
    const cached = this.collectionCache.get(shop);

    if (cached && cached.expires > now) {
      return cached.data;
    }

    const query = `
      query getCollections {
        collections(first: 50) {
          nodes {
            id
            title
            image { url }
          }
        }
      }
    `;

    const data = await this.graphqlFetch(shop, query);
    const collections = data.collections.nodes.map((c: any) => ({
      id: c.id.replace('gid://shopify/Collection/', ''),
      title: c.title,
      imageUrl: c.image?.url || null,
    }));

    this.collectionCache.set(shop, {
      data: collections,
      expires: now + 10 * 60 * 1000,
    });

    return collections;
  }

  async getProductsByCollection(shop: string, collectionId: string) {
    // Convert to GID
    const gid = collectionId.startsWith('gid://') ? collectionId : `gid://shopify/Collection/${collectionId}`;

    const query = `
      query getCollectionProducts($id: ID!) {
        collection(id: $id) {
          products(first: 50) {
            nodes {
              id
              title
              handle
              onlineStoreUrl
              bodyHtml
              productType
              images(first: 5) {
                nodes { url }
              }
              variants(first: 50) {
                nodes {
                  id
                  title
                  price
                  availableForSale
                  inventoryQuantity
                }
              }
            }
          }
        }
      }
    `;

    const data = await this.graphqlFetch(shop, query, { id: gid });
    if (!data.collection) return [];

    return data.collection.products.nodes.map((p: any) => this.mapGqlProduct(p));
  }

  async createOrder(
    shop: string,
    data: {
      lineItems: { variantId: string; quantity: number }[];
      customerFirstName: string;
      customerPhone: string;
      customerEmail?: string;
      shippingAddress: string;
      note?: string;
      paymentMethod: string;
    },
  ) {
    const body = {
      draft_order: {
        line_items: data.lineItems.map((i) => ({
          variant_id: i.variantId,
          quantity: i.quantity,
        })),
        customer: {
          first_name: data.customerFirstName,
          phone: data.customerPhone,
          email: data.customerEmail || undefined,
        },
        shipping_address: {
          address1: data.shippingAddress,
          name: data.customerFirstName,
        },
        use_customer_default_address: false,
        note: data.note ?? 'Via ShopBoxx chat',
        tags: 'shopboxx',
      },
    };

    const resData = await this.shopifyFetch(shop, 'draft_orders.json', {
      method: 'POST',
      body: JSON.stringify(body),
    });

    const order = resData.draft_order;
    return {
      id: order.id.toString(),
      orderNumber: order.name,
      totalPrice: order.total_price,
      currency: order.currency,
      invoiceUrl: order.invoice_url,
    };
  }

  async getShopInfo(shop: string) {
    const data = await this.shopifyFetch(shop, 'shop.json');
    const s = data.shop;
    return {
      name: s.name,
      email: s.email,
      currency: s.currency,
      timezone: s.iana_timezone,
      countryCode: s.country_code,
      planName: s.plan_name,
    };
  }

  async registerWebhook(shop: string, topic: string) {
    const appUrl = this.config.get<string>('APP_URL');
    const body = {
      webhook: {
        topic,
        address: `${appUrl}/api/shopify/webhooks/${topic.replace(/\//g, '.')}`,
        format: 'json',
      },
    };

    return this.shopifyFetch(shop, 'webhooks.json', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  }

  clearCache(shop: string) {
    this.productCache.delete(shop);
    this.collectionCache.delete(shop);
  }

  private mapGqlProduct(p: any) {
    const rawId = p.id.replace('gid://shopify/Product/', '');
    return {
      id: rawId,
      title: p.title,
      handle: p.handle,
      onlineStoreUrl: p.onlineStoreUrl || null,
      description: this.stripHtml(p.bodyHtml),
      price: parseFloat(p.variants.nodes[0]?.price || '0'),
      available: p.variants.nodes.some((v: any) => v.inventoryQuantity > 0 || v.availableForSale),
      totalInventory: p.variants.nodes.reduce((acc: number, v: any) => acc + (v.inventoryQuantity || 0), 0),
      primaryImage: p.images.nodes[0]?.url || null,
      images: p.images.nodes.map((img: any) => img.url),
      variants: p.variants.nodes.map((v: any) => ({
        id: v.id.replace('gid://shopify/ProductVariant/', ''),
        title: v.title,
        price: parseFloat(v.price),
        available: v.inventoryQuantity > 0 || v.availableForSale,
        inventoryQuantity: v.inventoryQuantity,
      })),
      productType: p.productType,
      tags: [], // Could be added to query if needed
    };
  }
}
