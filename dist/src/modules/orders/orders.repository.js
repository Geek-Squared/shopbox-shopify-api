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
exports.OrdersRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let OrdersRepository = class OrdersRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    listBySeller(sellerId) {
        return this.prisma.order.findMany({
            where: { sellerId },
            include: { items: true, payment: true },
            orderBy: { createdAt: 'desc' },
        });
    }
    findByIdForSeller(id, sellerId) {
        return this.prisma.order.findFirst({
            where: { id, sellerId },
            include: { items: true, payment: true },
        });
    }
    findById(id) {
        return this.prisma.order.findUnique({
            where: { id },
            include: { items: true, payment: true },
        });
    }
    create(payload) {
        return this.prisma.order.create({
            data: {
                sellerId: payload.sellerId,
                storeId: payload.storeId,
                customerName: payload.customerName,
                customerPhone: payload.customerPhone,
                customerEmail: payload.customerEmail,
                totalAmount: payload.totalAmount,
                orderNumber: payload.orderNumber,
                deliveryCode: payload.deliveryCode,
                items: {
                    create: payload.items,
                },
            },
            include: { items: true },
        });
    }
    updateForSeller(id, sellerId, payload) {
        return this.prisma.order.updateMany({
            where: { id, sellerId },
            data: payload,
        });
    }
};
exports.OrdersRepository = OrdersRepository;
exports.OrdersRepository = OrdersRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrdersRepository);
//# sourceMappingURL=orders.repository.js.map