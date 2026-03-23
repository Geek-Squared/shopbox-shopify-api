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
var ShopifyBillingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyBillingService = exports.BILLING_PLANS = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const shopify_api_service_1 = require("./shopify-api.service");
const config_1 = require("@nestjs/config");
exports.BILLING_PLANS = {
    BASIC: {
        name: 'Basic',
        amount: 19.99,
        currencyCode: 'USD',
        interval: 'EVERY_30_DAYS',
        trialDays: 7,
    },
    PRO: {
        name: 'Pro',
        amount: 49.99,
        currencyCode: 'USD',
        interval: 'EVERY_30_DAYS',
        trialDays: 14,
    },
};
let ShopifyBillingService = ShopifyBillingService_1 = class ShopifyBillingService {
    constructor(prisma, shopifyApi, config) {
        this.prisma = prisma;
        this.shopifyApi = shopifyApi;
        this.config = config;
        this.logger = new common_1.Logger(ShopifyBillingService_1.name);
    }
    async createSubscription(shop, plan, mock = false) {
        const planConfig = exports.BILLING_PLANS[plan];
        if (!planConfig)
            throw new common_1.BadRequestException('Invalid plan');
        if (mock || process.env.SHOPIFY_MOCK_BILLING === 'true') {
            await this.prisma.shopifyMerchant.update({
                where: { shop },
                data: {
                    planName: plan,
                    planStatus: 'ACTIVE',
                    planChargeId: `gid://shopify/AppSubscription/MOCK_${Date.now()}`,
                },
            });
            return { confirmationUrl: null, subscriptionId: 'MOCK' };
        }
        const appUrl = this.config.get('APP_URL');
        const returnUrl = `${appUrl}/api/shopify/billing/callback?shop=${shop}&plan=${plan}`;
        const query = `
      mutation appSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $test: Boolean, $trialDays: Int) {
        appSubscriptionCreate(name: $name, lineItems: $lineItems, returnUrl: $returnUrl, test: $test, trialDays: $trialDays) {
          appSubscription { id }
          confirmationUrl
          userErrors { field message }
        }
      }
    `;
        const variables = {
            name: planConfig.name,
            test: process.env.NODE_ENV !== 'production',
            returnUrl,
            trialDays: planConfig.trialDays,
            lineItems: [
                {
                    plan: {
                        appRecurringPricingDetails: {
                            price: {
                                amount: planConfig.amount,
                                currencyCode: planConfig.currencyCode,
                            },
                            interval: planConfig.interval,
                        },
                    },
                },
            ],
        };
        const data = await this.shopifyApi.graphqlFetch(shop, query, variables);
        const result = data.appSubscriptionCreate;
        if (result.userErrors?.length > 0) {
            throw new common_1.BadRequestException(`Shopify Billing Error: ${JSON.stringify(result.userErrors)}`);
        }
        return {
            confirmationUrl: result.confirmationUrl,
            subscriptionId: result.appSubscription.id,
        };
    }
    async verifyAndActivateSubscription(shop, plan, chargeId) {
        const gid = chargeId.startsWith('gid://')
            ? chargeId
            : `gid://shopify/AppSubscription/${chargeId}`;
        const query = `
      query getSubscription($id: ID!) {
        node(id: $id) {
          ... on AppSubscription {
            status
            name
          }
        }
      }
    `;
        const data = await this.shopifyApi.graphqlFetch(shop, query, { id: gid });
        const subscription = data.node;
        if (!subscription || subscription.status !== 'ACTIVE') {
            this.logger.warn(`Subscription ${chargeId} for ${shop} is not active: ${subscription?.status}`);
        }
        await this.prisma.shopifyMerchant.update({
            where: { shop },
            data: {
                planName: plan,
                planStatus: subscription?.status || 'ACTIVE',
                planChargeId: chargeId,
            },
        });
        return true;
    }
    async checkActivePlan(merchantId) {
        const merchant = await this.prisma.shopifyMerchant.findUnique({
            where: { id: merchantId },
        });
        if (!merchant)
            return false;
        return merchant.planStatus === 'ACTIVE' || (merchant.planName === 'BASIC' && !!merchant.planChargeId);
    }
};
exports.ShopifyBillingService = ShopifyBillingService;
exports.ShopifyBillingService = ShopifyBillingService = ShopifyBillingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        shopify_api_service_1.ShopifyApiService,
        config_1.ConfigService])
], ShopifyBillingService);
//# sourceMappingURL=shopify-billing.service.js.map