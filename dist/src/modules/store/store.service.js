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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const store_repository_1 = require("./store.repository");
let StoreService = class StoreService {
    constructor(storeRepository, prisma) {
        this.storeRepository = storeRepository;
        this.prisma = prisma;
    }
    async getBySlug(slug) {
        const store = await this.storeRepository.findBySlug(slug);
        if (!store) {
            throw new common_1.NotFoundException('Store not found');
        }
        const products = await this.prisma.product.findMany({
            where: { storeId: store.id, active: true },
            orderBy: { createdAt: 'desc' },
        });
        return {
            id: store.id,
            slug: store.slug,
            name: store.name,
            description: store.description,
            products,
        };
    }
    async updateStore(sellerId, payload) {
        const store = await this.storeRepository.findBySellerId(sellerId);
        if (!store) {
            throw new common_1.NotFoundException('Store not found');
        }
        return this.storeRepository.update(store.id, payload);
    }
};
exports.StoreService = StoreService;
exports.StoreService = StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [store_repository_1.StoreRepository,
        prisma_service_1.PrismaService])
], StoreService);
//# sourceMappingURL=store.service.js.map