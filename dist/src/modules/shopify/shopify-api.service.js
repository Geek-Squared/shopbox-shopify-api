"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ShopifyApiService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyApiService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const shopify_repository_1 = require("./shopify.repository");
let ShopifyApiService = ShopifyApiService_1 = class ShopifyApiService {
    constructor(config, repository) {
        this.config = config;
        this.repository = repository;
        this.logger = new common_1.Logger(ShopifyApiService_1.name);
        this.productCache = new Map();
        this.collectionCache = new Map();
    }
    async shopifyFetch(shop, endpoint, options = {}, retryCount = 0) {
        const merchant = await this.repository.findByShop(shop);
        if (!merchant || !merchant.accessToken) {
            throw new common_1.UnauthorizedException(`Merchant ${shop} not found or not connected`);
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
            throw new common_1.UnauthorizedException('Shopify access token is invalid');
        }
        if (response.status === 404) {
            this.logger.error(`Shopify 404 on URL: ${url}`);
            throw new common_1.NotFoundException('Shopify resource not found');
        }
        if (response.status === 429) {
            if (retryCount < 1) {
                this.logger.warn(`Rate limited for ${shop}, retrying in 1s...`);
                await new Promise((resolve) => setTimeout(resolve, 1000));
                return this.shopifyFetch(shop, endpoint, options, retryCount + 1);
            }
            throw new common_1.BadRequestException('Shopify rate limit exceeded');
        }
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new common_1.BadRequestException(`Shopify API error: ${JSON.stringify(errorData.errors || errorData)}`);
        }
        return response.json();
    }
    stripHtml(html) {
        return html ? html.replace(/<[^>]*>/g, '').trim() : '';
    }
    async graphqlFetch(shop, query, variables = {}) {
        const merchant = await this.repository.findByShop(shop);
        if (!merchant || !merchant.accessToken) {
            throw new common_1.UnauthorizedException(`Merchant ${shop} not found or not connected`);
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
            throw new common_1.BadRequestException(`Shopify GraphQL Error: ${errorText}`);
        }
        const result = await response.json();
        if (result.errors) {
            throw new common_1.BadRequestException(`Shopify GraphQL Business Error: ${JSON.stringify(result.errors)}`);
        }
        return result.data;
    }
    async getProducts(shop, skipCache = false) {
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
        const products = data.products.nodes.map((p) => this.mapGqlProduct(p));
        this.productCache.set(shop, {
            data: products,
            expires: now + 5 * 60 * 1000,
        });
        return products;
    }
    async getProduct(shop, productId) {
        const gid = productId.startsWith('gid://') ? productId : `gid://shopify/Product/${productId}`;
        const query = `
      query getProduct($id: ID!) {
        product(id: $id) {
          id
          title
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
        if (!data.product)
            throw new common_1.NotFoundException('Product not found in Shopify');
        return this.mapGqlProduct(data.product);
    }
    async getCollections(shop) {
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
        const collections = data.collections.nodes.map((c) => ({
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
    async getProductsByCollection(shop, collectionId) {
        const gid = collectionId.startsWith('gid://') ? collectionId : `gid://shopify/Collection/${collectionId}`;
        const query = `
      query getCollectionProducts($id: ID!) {
        collection(id: $id) {
          products(first: 50) {
            nodes {
              id
              title
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
        if (!data.collection)
            return [];
        return data.collection.products.nodes.map((p) => this.mapGqlProduct(p));
    }
    async createOrder(shop, data) {
        const body = {
            order: {
                line_items: data.lineItems.map((i) => ({
                    variant_id: i.variantId,
                    quantity: i.quantity,
                })),
                customer: {
                    first_name: data.customerFirstName,
                    phone: data.customerPhone,
                    email: data.customerEmail,
                },
                shipping_address: {
                    address1: data.shippingAddress,
                    name: data.customerFirstName,
                },
                financial_status: 'pending',
                send_receipt: false,
                send_fulfillment_receipt: false,
                note: data.note ?? 'Via ShopBoxx chat',
                tags: 'shopboxx',
            },
        };
        const resData = await this.shopifyFetch(shop, 'orders.json', {
            method: 'POST',
            body: JSON.stringify(body),
        });
        return {
            id: resData.order.id.toString(),
            orderNumber: resData.order.order_number,
            totalPrice: resData.order.total_price,
            currency: resData.order.currency,
        };
    }
    async getShopInfo(shop) {
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
    async registerWebhook(shop, topic) {
        const appUrl = this.config.get('APP_URL');
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
    clearCache(shop) {
        this.productCache.delete(shop);
        this.collectionCache.delete(shop);
    }
    mapGqlProduct(p) {
        const rawId = p.id.replace('gid://shopify/Product/', '');
        return {
            id: rawId,
            title: p.title,
            description: this.stripHtml(p.bodyHtml),
            price: parseFloat(p.variants.nodes[0]?.price || '0'),
            available: p.variants.nodes.some((v) => v.inventoryQuantity > 0 || v.availableForSale),
            totalInventory: p.variants.nodes.reduce((acc, v) => acc + (v.inventoryQuantity || 0), 0),
            primaryImage: p.images.nodes[0]?.url || null,
            images: p.images.nodes.map((img) => img.url),
            variants: p.variants.nodes.map((v) => ({
                id: v.id.replace('gid://shopify/ProductVariant/', ''),
                title: v.title,
                price: parseFloat(v.price),
                available: v.inventoryQuantity > 0 || v.availableForSale,
                inventoryQuantity: v.inventoryQuantity,
            })),
            productType: p.productType,
            tags: [],
        };
    }
};
exports.ShopifyApiService = ShopifyApiService;
exports.ShopifyApiService = ShopifyApiService = ShopifyApiService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        shopify_repository_1.ShopifyRepository])
], ShopifyApiService);
//# sourceMappingURL=shopify-api.service.js.map