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
exports.BotSessionService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let BotSessionService = class BotSessionService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async get(phoneNumber) {
        const session = await this.prisma.botSession.findUnique({
            where: { phoneNumber },
        });
        if (!session) {
            return { state: 'IDLE', context: {} };
        }
        return {
            state: session.state,
            context: session.context || {},
        };
    }
    async set(phoneNumber, state, context) {
        return this.prisma.botSession.upsert({
            where: { phoneNumber },
            update: { state, context: context },
            create: { phoneNumber, state, context: context },
        });
    }
    async updateContext(phoneNumber, state, update) {
        const current = await this.get(phoneNumber);
        return this.set(phoneNumber, state, { ...current.context, ...update });
    }
    async reset(phoneNumber) {
        return this.prisma.botSession.delete({ where: { phoneNumber } }).catch(() => { });
    }
    addToCart(cart, item) {
        const existing = cart.find((i) => i.productId === item.productId);
        if (existing) {
            existing.quantity += item.quantity;
            return [...cart];
        }
        return [...cart, item];
    }
    cartSubtotal(cart) {
        return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
    }
};
exports.BotSessionService = BotSessionService;
exports.BotSessionService = BotSessionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BotSessionService);
//# sourceMappingURL=bot-session.service.js.map