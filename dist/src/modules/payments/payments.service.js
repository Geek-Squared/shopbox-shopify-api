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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const orders_repository_1 = require("../orders/orders.repository");
const payments_repository_1 = require("./payments.repository");
let PaymentsService = class PaymentsService {
    constructor(paymentsRepository, ordersRepository) {
        this.paymentsRepository = paymentsRepository;
        this.ordersRepository = ordersRepository;
    }
    async initiate(payload) {
        const order = await this.ordersRepository.findById(payload.orderId);
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        const payment = await this.paymentsRepository.create({
            orderId: order.id,
            provider: payload.provider,
            amount: order.totalAmount,
            currency: 'USD',
            gatewayReference: `init-${Date.now()}`,
            status: 'PENDING',
        });
        return {
            paymentId: payment.id,
            provider: payment.provider,
            amount: payment.amount,
            status: payment.status,
            checkoutUrl: `https://pay.example.com/${payment.id}`,
        };
    }
    async verify(payload) {
        const payment = await this.paymentsRepository.findById(payload.paymentId);
        if (!payment) {
            throw new common_1.NotFoundException('Payment not found');
        }
        const updated = await this.paymentsRepository.update(payment.id, {
            status: 'SUCCESS',
            gatewayReference: payload.gatewayReference,
        });
        return {
            paymentId: updated.id,
            status: updated.status,
            gatewayReference: updated.gatewayReference,
        };
    }
    webhook(payload) {
        return {
            accepted: true,
            paymentId: payload.paymentId ?? null,
            gatewayReference: payload.gatewayReference ?? null,
        };
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [payments_repository_1.PaymentsRepository,
        orders_repository_1.OrdersRepository])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map