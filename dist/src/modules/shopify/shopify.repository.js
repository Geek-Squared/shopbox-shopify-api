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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShopifyRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ShopifyRepository = class ShopifyRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByShop(shop) {
        return this.prisma.shopifyMerchant.findUnique({
            where: { shop },
        });
    }
    async findById(id) {
        return this.prisma.shopifyMerchant.findUnique({
            where: { id },
        });
    }
    upsertMerchant(data) {
        return this.prisma.shopifyMerchant.upsert({
            where: { shop: data.shop },
            update: {
                accessToken: data.accessToken,
                scope: data.scope,
                storeName: data.storeName,
                isActive: data.isActive ?? true,
                uninstalledAt: null,
            },
            create: {
                shop: data.shop,
                accessToken: data.accessToken,
                scope: data.scope,
                storeName: data.storeName,
                isActive: data.isActive ?? true,
            },
        });
    }
    partialUpdate(shop, data) {
        return this.prisma.shopifyMerchant.update({
            where: { shop },
            data,
        });
    }
    updateChannels(shop, data) {
        return this.prisma.shopifyMerchant.update({
            where: { shop },
            data,
        });
    }
    markUninstalled(shop) {
        return this.prisma.shopifyMerchant.update({
            where: { shop },
            data: {
                isActive: false,
                accessToken: '',
                uninstalledAt: new Date(),
            },
        });
    }
    findActive() {
        return this.prisma.shopifyMerchant.findMany({
            where: { isActive: true },
        });
    }
};
exports.ShopifyRepository = ShopifyRepository;
exports.ShopifyRepository = ShopifyRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ShopifyRepository);
//# sourceMappingURL=shopify.repository.js.map