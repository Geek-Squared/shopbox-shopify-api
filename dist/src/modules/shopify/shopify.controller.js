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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var ShopifyController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const shopify_service_1 = require("./shopify.service");
const shopify_repository_1 = require("./shopify.repository");
const shopify_api_service_1 = require("./shopify-api.service");
const config_1 = require("@nestjs/config");
const shopify_auth_guard_1 = require("./guards/shopify-auth.guard");
const current_shop_decorator_1 = require("./decorators/current-shop.decorator");
let ShopifyController = ShopifyController_1 = class ShopifyController {
    constructor(shopifyService, repository, config, shopifyApiService) {
        this.shopifyService = shopifyService;
        this.repository = repository;
        this.config = config;
        this.shopifyApiService = shopifyApiService;
        this.logger = new common_1.Logger(ShopifyController_1.name);
    }
    async auth(shop, res) {
        if (!shop) {
            throw new common_1.UnauthorizedException('Shop parameter is required');
        }
        const authUrl = this.shopifyService.generateAuthUrl(shop);
        return res.redirect(authUrl);
    }
    async callback(code, shop, state, hmac, query, res) {
        if (!this.shopifyService.verifyHmac(query, hmac)) {
            throw new common_1.UnauthorizedException('Invalid HMAC signature');
        }
        if (!this.shopifyService.validateStateNonce(state, shop)) {
            throw new common_1.UnauthorizedException('Invalid or expired state nonce');
        }
        const accessToken = await this.shopifyService.exchangeCodeForToken(shop, code);
        const shopInfo = await this.shopifyService.getShopInfo(shop, accessToken);
        await this.repository.upsertMerchant({
            shop,
            accessToken,
            scope: this.config.get('SHOPIFY_SCOPES'),
            storeName: shopInfo.name,
        });
        await this.shopifyService.registerWebhooks(shop, accessToken);
        const apiKey = this.config.get('SHOPIFY_API_KEY');
        const storeShortName = shop.replace('.myshopify.com', '');
        return res.redirect(`https://admin.shopify.com/store/${storeShortName}/apps/${apiKey}`);
    }
    async onUninstalled(hmac, shop, body) {
        this.logger.log(`Received uninstall webhook for shop: ${shop}`);
        await this.shopifyService.handleUninstall(shop);
        return { status: 'ok' };
    }
    async onOrderCreated(hmac, body) {
        this.logger.log(`Received Shopify order webhook: ${body.id}`);
        return { status: 'ok' };
    }
    async onProductUpdate(shop, body) {
        this.logger.log(`Received Shopify product update webhook for shop: ${shop}`);
        this.shopifyApiService.clearCache(shop);
        return { status: 'ok' };
    }
    async onShopUpdate(shop, body) {
        this.logger.log(`Received Shopify shop update webhook for shop: ${shop}`);
        await this.repository.partialUpdate(shop, {
            storeName: body.name,
        });
        return { status: 'ok' };
    }
    async onCustomerDataRequest(body) {
        this.logger.log(`GDPR: Customer data request received for ${body.customer?.email}`);
        return { status: 'ok' };
    }
    async onCustomerRedact(body) {
        this.logger.log(`GDPR: Customer redact request received for ${body.customer?.email}`);
        return { status: 'ok' };
    }
    async onShopRedact(shop) {
        this.logger.log(`GDPR: Shop redact request received for ${shop}`);
        return { status: 'ok' };
    }
    async getMerchant(shop) {
        const merchant = await this.repository.findByShop(shop);
        if (!merchant) {
            throw new common_1.UnauthorizedException('Merchant not found');
        }
        const { accessToken, ...data } = merchant;
        return data;
    }
};
exports.ShopifyController = ShopifyController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Start Shopify OAuth flow' }),
    (0, common_1.Get)('auth'),
    __param(0, (0, common_1.Query)('shop')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "auth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Shopify OAuth callback' }),
    (0, common_1.Get)('auth/callback'),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Query)('shop')),
    __param(2, (0, common_1.Query)('state')),
    __param(3, (0, common_1.Query)('hmac')),
    __param(4, (0, common_1.Query)()),
    __param(5, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Object, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "callback", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Shopify uninstalled webhook' }),
    (0, common_1.Post)('webhooks/app/uninstalled'),
    __param(0, (0, common_1.Headers)('x-shopify-hmac-sha256')),
    __param(1, (0, common_1.Headers)('x-shopify-shop-domain')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onUninstalled", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Shopify order created webhook' }),
    (0, common_1.Post)('webhooks/orders/create'),
    __param(0, (0, common_1.Headers)('x-shopify-hmac-sha256')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onOrderCreated", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Shopify product update webhook' }),
    (0, common_1.Post)('webhooks/products/update'),
    __param(0, (0, common_1.Headers)('x-shopify-shop-domain')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onProductUpdate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Shopify shop update webhook' }),
    (0, common_1.Post)('webhooks/shop/update'),
    __param(0, (0, common_1.Headers)('x-shopify-shop-domain')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onShopUpdate", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'GDPR: Customer data request' }),
    (0, common_1.Post)('webhooks/customers/data_request'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onCustomerDataRequest", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'GDPR: Customer redact' }),
    (0, common_1.Post)('webhooks/customers/redact'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onCustomerRedact", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'GDPR: Shop redact' }),
    (0, common_1.Post)('webhooks/shop/redact'),
    __param(0, (0, common_1.Headers)('x-shopify-shop-domain')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "onShopRedact", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get current merchant data' }),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Get)('merchant'),
    __param(0, (0, current_shop_decorator_1.CurrentShop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ShopifyController.prototype, "getMerchant", null);
exports.ShopifyController = ShopifyController = ShopifyController_1 = __decorate([
    (0, swagger_1.ApiTags)('Shopify'),
    (0, common_1.Controller)('shopify'),
    __metadata("design:paramtypes", [shopify_service_1.ShopifyService,
        shopify_repository_1.ShopifyRepository,
        config_1.ConfigService,
        shopify_api_service_1.ShopifyApiService])
], ShopifyController);
//# sourceMappingURL=shopify.controller.js.map