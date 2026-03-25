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
var ShopifyAuthGuard_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt = require("jsonwebtoken");
const shopify_repository_1 = require("../shopify.repository");
let ShopifyAuthGuard = ShopifyAuthGuard_1 = class ShopifyAuthGuard {
    constructor(config, repository) {
        this.config = config;
        this.repository = repository;
        this.logger = new common_1.Logger(ShopifyAuthGuard_1.name);
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            this.logger.debug('Missing or invalid Authorization header');
            throw new common_1.UnauthorizedException('Missing or invalid authorization header');
        }
        const token = authHeader.split(' ')[1];
        const apiSecret = this.config.get('SHOPIFY_API_SECRET');
        const apiKey = this.config.get('SHOPIFY_API_KEY');
        this.logger.debug(`Verifying token... Secret starts with: ${apiSecret?.substring(0, 5)}... API Key: ${apiKey?.substring(0, 5)}...`);
        try {
            const decoded = jwt.verify(token, apiSecret, {
                algorithms: ['HS256'],
                audience: apiKey,
            });
            const shop = decoded.dest
                ? new URL(decoded.dest).hostname
                : decoded.shop || decoded.aud;
            if (!shop) {
                throw new common_1.UnauthorizedException('Invalid token payload: missing shop');
            }
            const merchant = await this.repository.findByShop(shop);
            if (!merchant) {
                throw new common_1.UnauthorizedException(`Merchant not found for shop: ${shop}`);
            }
            if (!merchant.isActive) {
                throw new common_1.UnauthorizedException(`Merchant ${shop} is currently inactive`);
            }
            request.merchant = merchant;
            request.shop = shop;
            return true;
        }
        catch (error) {
            if (error instanceof common_1.UnauthorizedException) {
                throw error;
            }
            if (error.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('Shopify session token has expired');
            }
            if (error.name === 'JsonWebTokenError' &&
                error.message.includes('audience')) {
                throw new common_1.UnauthorizedException(`Invalid audience: Ensure "aud" in your payload matches your SHOPIFY_API_KEY`);
            }
            throw new common_1.UnauthorizedException(`Invalid Shopify session token: ${error.message}`);
        }
    }
};
exports.ShopifyAuthGuard = ShopifyAuthGuard;
exports.ShopifyAuthGuard = ShopifyAuthGuard = ShopifyAuthGuard_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        shopify_repository_1.ShopifyRepository])
], ShopifyAuthGuard);
//# sourceMappingURL=shopify-auth.guard.js.map