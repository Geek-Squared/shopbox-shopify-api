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
exports.StoreRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let StoreRepository = class StoreRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    findBySlug(slug) {
        return this.prisma.store.findUnique({
            where: { slug },
            include: { seller: true },
        });
    }
    findBySellerId(sellerId) {
        return this.prisma.store.findUnique({ where: { sellerId } });
    }
    create(payload) {
        return this.prisma.store.create({ data: payload });
    }
    update(id, payload) {
        return this.prisma.store.update({ where: { id }, data: payload });
    }
};
exports.StoreRepository = StoreRepository;
exports.StoreRepository = StoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StoreRepository);
//# sourceMappingURL=store.repository.js.map