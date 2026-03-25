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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaOauthController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const meta_oauth_service_1 = require("./meta-oauth.service");
const shopify_auth_guard_1 = require("../shopify/guards/shopify-auth.guard");
const current_shop_decorator_1 = require("../shopify/decorators/current-shop.decorator");
let MetaOauthController = class MetaOauthController {
    constructor(metaService) {
        this.metaService = metaService;
    }
    async messengerAuth(shop, res) {
        const url = this.metaService.getMessengerAuthUrl(shop);
        return res.redirect(url);
    }
    async messengerCallback(code, shop, res) {
        await this.metaService.connectMessenger(shop, code);
        return res.redirect(`https://${shop}/admin/apps/${process.env.SHOPIFY_API_KEY}/app/channels`);
    }
    async instagramAuth(shop, res) {
        const url = this.metaService.getInstagramAuthUrl(shop);
        return res.redirect(url);
    }
    async instagramCallback(code, shop, res) {
        await this.metaService.connectInstagram(shop, code);
        return res.redirect(`https://${shop}/admin/apps/${process.env.SHOPIFY_API_KEY}/app/channels`);
    }
    async selectMessengerPage(shop, pageId, pageToken) {
        await this.metaService.subscribePageToWebhook(pageId, pageToken);
        return { connected: true };
    }
    async disconnectMessenger(shop) {
        await this.metaService.disconnectMessenger(shop);
        return { connected: false };
    }
    async disconnectInstagram(shop) {
        await this.metaService.disconnectInstagram(shop);
        return { connected: false };
    }
    async getFacebookPosts(shop) {
        return this.metaService.getFacebookPosts(shop);
    }
    async getInstagramPosts(shop) {
        return this.metaService.getInstagramPosts(shop);
    }
};
exports.MetaOauthController = MetaOauthController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Initiate Messenger OAuth' }),
    (0, common_1.Get)('messenger'),
    __param(0, (0, common_1.Query)('shop')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "messengerAuth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Messenger OAuth callback' }),
    (0, common_1.Get)('messenger/callback'),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Query)('state')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "messengerCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Initiate Instagram OAuth' }),
    (0, common_1.Get)('instagram'),
    __param(0, (0, common_1.Query)('shop')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "instagramAuth", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Instagram OAuth callback' }),
    (0, common_1.Get)('instagram/callback'),
    __param(0, (0, common_1.Query)('code')),
    __param(1, (0, common_1.Query)('state')),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "instagramCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Manually select Messenger page' }),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Post)('messenger/select-page'),
    __param(0, (0, current_shop_decorator_1.CurrentShop)()),
    __param(1, (0, common_1.Body)('pageId')),
    __param(2, (0, common_1.Body)('pageToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "selectMessengerPage", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Disconnect Messenger' }),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Delete)('messenger'),
    __param(0, (0, current_shop_decorator_1.CurrentShop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "disconnectMessenger", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Disconnect Instagram' }),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Delete)('instagram'),
    __param(0, (0, current_shop_decorator_1.CurrentShop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "disconnectInstagram", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Facebook posts for picker' }),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Get)('facebook-posts'),
    __param(0, (0, current_shop_decorator_1.CurrentShop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "getFacebookPosts", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List Instagram posts for picker' }),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Get)('instagram-posts'),
    __param(0, (0, current_shop_decorator_1.CurrentShop)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MetaOauthController.prototype, "getInstagramPosts", null);
exports.MetaOauthController = MetaOauthController = __decorate([
    (0, swagger_1.ApiTags)('Meta OAuth'),
    (0, common_1.Controller)('meta/auth'),
    __metadata("design:paramtypes", [meta_oauth_service_1.MetaOauthService])
], MetaOauthController);
//# sourceMappingURL=meta-oauth.controller.js.map