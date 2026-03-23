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
var ShopifyService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const crypto = require("crypto");
const shopify_repository_1 = require("./shopify.repository");
let ShopifyService = ShopifyService_1 = class ShopifyService {
    constructor(config, repository) {
        this.config = config;
        this.repository = repository;
        this.logger = new common_1.Logger(ShopifyService_1.name);
        this.stateNonces = new Map();
        setInterval(() => {
            const now = Date.now();
            for (const [nonce, data] of this.stateNonces.entries()) {
                if (data.expiresAt < now) {
                    this.stateNonces.delete(nonce);
                }
            }
        }, 5 * 60 * 1000);
    }
    generateAuthUrl(shop) {
        const apiKey = this.config.get('SHOPIFY_API_KEY');
        const scopes = this.config.get('SHOPIFY_SCOPES');
        const appUrl = this.config.get('APP_URL');
        const redirectUri = `${appUrl}/api/shopify/auth/callback`;
        const nonce = crypto.randomBytes(16).toString('hex');
        this.stateNonces.set(nonce, {
            shop,
            expiresAt: Date.now() + 10 * 60 * 1000,
        });
        const url = new URL(`https://${shop}/admin/oauth/authorize`);
        url.searchParams.append('client_id', apiKey);
        url.searchParams.append('scope', scopes);
        url.searchParams.append('redirect_uri', redirectUri);
        url.searchParams.append('state', nonce);
        const finalUrl = url.toString();
        console.log('[DEBUG] Generated Shopify Auth URL:', finalUrl);
        return finalUrl;
    }
    verifyHmac(params, hmac) {
        const secret = this.config.get('SHOPIFY_API_SECRET');
        console.log('[DEBUG] HMAC verify - secret starts with:', secret?.substring(0, 8));
        console.log('[DEBUG] HMAC verify - secret length:', secret?.length);
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
            return crypto.timingSafeEqual(Buffer.from(calculatedHmac), Buffer.from(hmac));
        }
        catch {
            return false;
        }
    }
    verifyWebhookHmac(rawBody, hmac) {
        const secret = this.config.get('SHOPIFY_API_SECRET');
        const calculatedHmac = crypto
            .createHmac('sha256', secret)
            .update(rawBody)
            .digest('base64');
        try {
            return crypto.timingSafeEqual(Buffer.from(calculatedHmac), Buffer.from(hmac));
        }
        catch {
            return false;
        }
    }
    validateStateNonce(nonce, shop) {
        const data = this.stateNonces.get(nonce);
        if (!data || data.shop !== shop || data.expiresAt < Date.now()) {
            return false;
        }
        this.stateNonces.delete(nonce);
        return true;
    }
    async exchangeCodeForToken(shop, code) {
        const apiKey = this.config.get('SHOPIFY_API_KEY');
        const secret = this.config.get('SHOPIFY_API_SECRET');
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
            throw new common_1.UnauthorizedException('Failed to exchange Shopify access code');
        }
        const data = (await response.json());
        return data.access_token;
    }
    async getShopInfo(shop, token) {
        const response = await fetch(`https://${shop}/admin/api/2024-01/shop.json`, {
            headers: { 'X-Shopify-Access-Token': token },
        });
        if (!response.ok) {
            throw new common_1.UnauthorizedException('Failed to fetch Shopify shop info');
        }
        const data = (await response.json());
        return data.shop;
    }
    async registerWebhooks(shop, token) {
        const appUrl = this.config.get('APP_URL');
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
                    this.logger.warn(`Webhook ${webhook.topic} registration returned status ${res.status}: ${JSON.stringify(err)}`);
                }
            }
            catch (error) {
                this.logger.error(`Failed to register webhook ${webhook.topic} for ${shop}`, error);
            }
        }
    }
    async handleUninstall(shop) {
        await this.repository.markUninstalled(shop);
        this.logger.log(`Shopify app uninstalled for shop ${shop}`);
    }
};
exports.ShopifyService = ShopifyService;
exports.ShopifyService = ShopifyService = ShopifyService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        shopify_repository_1.ShopifyRepository])
], ShopifyService);
//# sourceMappingURL=shopify.service.js.map