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
var ShopifyBillingController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyBillingController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const shopify_billing_service_1 = require("./shopify-billing.service");
const shopify_auth_guard_1 = require("./guards/shopify-auth.guard");
const config_1 = require("@nestjs/config");
let ShopifyBillingController = ShopifyBillingController_1 = class ShopifyBillingController {
    constructor(billingService, config) {
        this.billingService = billingService;
        this.config = config;
        this.logger = new common_1.Logger(ShopifyBillingController_1.name);
    }
    async status(req) {
        const merchant = req.merchant;
        return {
            planName: merchant.planName,
            status: merchant.planStatus,
            isTrial: !!merchant.planTrialExpiresAt &&
                new Date(merchant.planTrialExpiresAt) > new Date(),
        };
    }
    async subscribe(body, req) {
        const shop = req.merchant.shop;
        return this.billingService.createSubscription(shop, body.plan, body.mock);
    }
    async callback(shop, plan, chargeId, res) {
        this.logger.log(`Received billing callback: shop=${shop}, plan=${plan}, charge_id=${chargeId}`);
        if (!shop || !chargeId) {
            this.logger.error(`Missing callback params! shop=${shop}, charge_id=${chargeId}`);
            return res.status(400).send('Missing shop or charge_id');
        }
        try {
            await this.billingService.verifyAndActivateSubscription(shop, plan, chargeId);
            this.logger.log(`Successfully activated ${plan} plan for ${shop}`);
            const apiKey = this.config.get('SHOPIFY_API_KEY') || 'shopbox-dev-1';
            const storeShortName = shop.replace('.myshopify.com', '');
            const redirectUrl = `https://admin.shopify.com/store/${storeShortName}/apps/${apiKey}`;
            return res.redirect(redirectUrl);
        }
        catch (error) {
            return res
                .status(500)
                .send(`Billing Verification Failed: ${error.message}`);
        }
    }
};
exports.ShopifyBillingController = ShopifyBillingController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Check current subscription status' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Get)('status'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ShopifyBillingController.prototype, "status", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new subscription' }),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Post)('subscribe'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShopifyBillingController.prototype, "subscribe", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Handle billing confirmation callback' }),
    (0, common_1.Get)('callback'),
    __param(0, (0, common_1.Query)('shop')),
    __param(1, (0, common_1.Query)('plan')),
    __param(2, (0, common_1.Query)('charge_id')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", Promise)
], ShopifyBillingController.prototype, "callback", null);
exports.ShopifyBillingController = ShopifyBillingController = ShopifyBillingController_1 = __decorate([
    (0, swagger_1.ApiTags)('Shopify Billing'),
    (0, common_1.Controller)('shopify/billing'),
    __metadata("design:paramtypes", [shopify_billing_service_1.ShopifyBillingService,
        config_1.ConfigService])
], ShopifyBillingController);
//# sourceMappingURL=shopify-billing.controller.js.map