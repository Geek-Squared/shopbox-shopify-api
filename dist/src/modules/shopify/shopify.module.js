"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyModule = void 0;
const common_1 = require("@nestjs/common");
const shopify_controller_1 = require("./shopify.controller");
const shopify_billing_controller_1 = require("./shopify-billing.controller");
const shopify_service_1 = require("./shopify.service");
const shopify_billing_service_1 = require("./shopify-billing.service");
const shopify_repository_1 = require("./shopify.repository");
const shopify_api_service_1 = require("./shopify-api.service");
let ShopifyModule = class ShopifyModule {
};
exports.ShopifyModule = ShopifyModule;
exports.ShopifyModule = ShopifyModule = __decorate([
    (0, common_1.Module)({
        controllers: [shopify_controller_1.ShopifyController, shopify_billing_controller_1.ShopifyBillingController],
        providers: [
            shopify_service_1.ShopifyService,
            shopify_billing_service_1.ShopifyBillingService,
            shopify_repository_1.ShopifyRepository,
            shopify_api_service_1.ShopifyApiService,
        ],
        exports: [
            shopify_service_1.ShopifyService,
            shopify_billing_service_1.ShopifyBillingService,
            shopify_repository_1.ShopifyRepository,
            shopify_api_service_1.ShopifyApiService,
        ],
    })
], ShopifyModule);
//# sourceMappingURL=shopify.module.js.map