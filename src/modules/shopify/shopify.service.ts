import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as crypto from 'crypto';
import { ShopifyRepository } from './shopify.repository';

@Injectable()
export class ShopifyService {
  private readonly logger = new Logger(ShopifyService.name);
  private stateNonces = new Map<string, { shop: string; expiresAt: number }>();

  constructor(
    private readonly config: ConfigService,
    private readonly repository: ShopifyRepository,
  ) {
    // Cleanup expired nonces every 5 mins
    setInterval(() => {
      const now = Date.now();
      for (const [nonce, data] of this.stateNonces.entries()) {
        if (data.expiresAt < now) {
          this.stateNonces.delete(nonce);
        }
      }
    }, 5 * 60 * 1000);
  }

  generateAuthUrl(shop: string): string {
    const apiKey = this.config.get<string>('SHOPIFY_API_KEY');
    const scopes = this.config.get<string>('SHOPIFY_SCOPES');
    const appUrl = this.config.get<string>('APP_URL');
    const redirectUri = `${appUrl}/api/shopify/auth/callback`;
    const nonce = crypto.randomBytes(16).toString('hex');

    this.stateNonces.set(nonce, {
      shop,
      expiresAt: Date.now() + 10 * 60 * 1000, // 10 mins TTL
    });

    const url = new URL(`https://${shop}/admin/oauth/authorize`);
    url.searchParams.append('client_id', apiKey);
    url.searchParams.append('scope', scopes);
    url.searchParams.append('redirect_uri', redirectUri);
    url.searchParams.append('state', nonce);

    return url.toString();
  }

  verifyHmac(params: Record<string, string>, hmac: string): boolean {
    const secret = this.config.get<string>('SHOPIFY_API_SECRET');
    const sortedParams = Object.keys(params)
      .filter((k) => k !== 'hmac' && k !== 'signature')
      .sort()
      .map((k) => `${k}=${params[k]}`)
      .join('&');

    const calculatedHmac = crypto
      .createHmac('sha256', secret)
      .update(sortedParams)
      .digest('hex');

    try {
      return crypto.timingSafeEqual(
        Buffer.from(calculatedHmac),
        Buffer.from(hmac),
      );
    } catch {
      return false;
    }
  }

  verifyWebhookHmac(rawBody: string, hmac: string): boolean {
    const secret = this.config.get<string>('SHOPIFY_API_SECRET');
    const calculatedHmac = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('base64');

    try {
      return crypto.timingSafeEqual(
        Buffer.from(calculatedHmac),
        Buffer.from(hmac),
      );
    } catch {
      return false;
    }
  }

  validateStateNonce(nonce: string, shop: string): boolean {
    const data = this.stateNonces.get(nonce);
    if (!data || data.shop !== shop || data.expiresAt < Date.now()) {
      return false;
    }
    this.stateNonces.delete(nonce);
    return true;
  }

  async exchangeCodeForToken(shop: string, code: string): Promise<string> {
    const apiKey = this.config.get<string>('SHOPIFY_API_KEY');
    const secret = this.config.get<string>('SHOPIFY_API_SECRET');

    const response = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: apiKey,
        client_secret: secret,
        code,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      this.logger.error(`Failed to exchange Shopify access code: ${error}`);
      throw new UnauthorizedException('Failed to exchange Shopify access code');
    }

    const data = (await response.json()) as { access_token: string };
    return data.access_token;
  }

  async getShopInfo(shop: string, token: string) {
    const response = await fetch(`https://${shop}/admin/api/2024-01/shop.json`, {
      headers: { 'X-Shopify-Access-Token': token },
    });

    if (!response.ok) {
      throw new UnauthorizedException('Failed to fetch Shopify shop info');
    }

    const data = (await response.json()) as { shop: any };
    return data.shop;
  }

  async registerWebhooks(shop: string, token: string) {
    const appUrl = this.config.get<string>('APP_URL');
    const webhooks = [
      { topic: 'orders/create', address: `${appUrl}/api/shopify/webhooks/orders/create` },
      { topic: 'orders/updated', address: `${appUrl}/api/shopify/webhooks/orders/updated` },
      { topic: 'products/update', address: `${appUrl}/api/shopify/webhooks/products/update` },
      { topic: 'shop/update', address: `${appUrl}/api/shopify/webhooks/shop/update` },
      { topic: 'app/uninstalled', address: `${appUrl}/api/shopify/webhooks/app/uninstalled` },
    ];

    for (const webhook of webhooks) {
      try {
        const res = await fetch(`https://${shop}/admin/api/2024-01/webhooks.json`, {
          method: 'POST',
          headers: {
            'X-Shopify-Access-Token': token,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            webhook: {
              topic: webhook.topic,
              address: webhook.address,
              format: 'json',
            },
          }),
        });
        if (!res.ok) {
          const err = await res.json();
          this.logger.warn(
            `Webhook ${webhook.topic} registration returned status ${res.status}: ${JSON.stringify(err)}`,
          );
        }
      } catch (error) {
        this.logger.error(
          `Failed to register webhook ${webhook.topic} for ${shop}`,
          error,
        );
      }
    }
  }

  async handleUninstall(shop: string) {
    await this.repository.markUninstalled(shop);
    this.logger.log(`Shopify app uninstalled for shop ${shop}`);
  }
}
