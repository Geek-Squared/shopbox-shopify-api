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
exports.ProductsRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let ProductsRepository = class ProductsRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    listBySeller(sellerId) {
        return this.prisma.product.findMany({
            where: { sellerId },
            include: { images: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    findByIdForSeller(id, sellerId) {
        return this.prisma.product.findFirst({
            where: { id, sellerId },
            include: { images: true },
        });
    }
    findPublicById(id) {
        return this.prisma.product.findFirst({
            where: { id, active: true },
            include: { images: true },
        });
    }
    create(payload) {
        const { images, ...data } = payload;
        return this.prisma.product.create({
            data: {
                ...data,
                images: images
                    ? {
                        create: images,
                    }
                    : undefined,
            },
        });
    }
    update(id, sellerId, payload) {
        return this.prisma.product.updateMany({
            where: { id, sellerId },
            data: payload,
        });
    }
    remove(id, sellerId) {
        return this.prisma.product.deleteMany({ where: { id, sellerId } });
    }
    listActiveByStore(storeId) {
        return this.prisma.product.findMany({
            where: { storeId, active: true },
            include: { images: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    listActiveByStoreGrouped(storeId) {
        return this.listActiveByStore(storeId);
    }
    setStock(id, sellerId, quantity) {
        return this.prisma.product.updateMany({
            where: { id, sellerId },
            data: { stockQty: quantity },
        });
    }
    decrementStock(id, quantity) {
        return this.prisma.product.update({
            where: { id },
            data: { stockQty: { decrement: quantity } },
        });
    }
    findLowStock(sellerId) {
        return this.prisma.product.findMany({
            where: { sellerId, stockQty: { lte: 5, gt: 0 } },
            include: { images: true },
        });
    }
    findOutOfStock(sellerId) {
        return this.prisma.product.findMany({
            where: { sellerId, stockQty: 0 },
            include: { images: true },
        });
    }
    toggleActive(id, sellerId, active) {
        return this.prisma.product.updateMany({
            where: { id, sellerId },
            data: { active },
        });
    }
    addImage(data) {
        return this.prisma.productImage.create({ data });
    }
    removeImage(id, productId) {
        return this.prisma.productImage.deleteMany({
            where: { id, productId },
        });
    }
    async setPrimaryImage(id, productId) {
        await this.prisma.productImage.updateMany({
            where: { productId },
            data: { isPrimary: false },
        });
        return this.prisma.productImage.update({
            where: { id },
            data: { isPrimary: true },
        });
    }
    countBySeller(sellerId) {
        return this.prisma.product.count({ where: { sellerId } });
    }
};
exports.ProductsRepository = ProductsRepository;
exports.ProductsRepository = ProductsRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductsRepository);
//# sourceMappingURL=products.repository.js.map