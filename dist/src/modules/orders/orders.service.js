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
var OrdersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const products_repository_1 = require("../products/products.repository");
const store_repository_1 = require("../store/store.repository");
const whatsapp_service_1 = require("../whatsapp/whatsapp.service");
const orders_repository_1 = require("./orders.repository");
let OrdersService = OrdersService_1 = class OrdersService {
    constructor(ordersRepository, storeRepository, productsRepository, whatsapp) {
        this.ordersRepository = ordersRepository;
        this.storeRepository = storeRepository;
        this.productsRepository = productsRepository;
        this.whatsapp = whatsapp;
        this.logger = new common_1.Logger(OrdersService_1.name);
    }
    findAll(sellerId) {
        return this.ordersRepository.listBySeller(sellerId);
    }
    async create(payload) {
        const store = await this.storeRepository.findBySlug(payload.storeSlug);
        if (!store) {
            throw new common_1.NotFoundException('Store not found');
        }
        const products = await this.productsRepository.listActiveByStore(store.id);
        const byId = new Map(products.map((product) => [product.id, product]));
        if (payload.items.length === 0) {
            throw new common_1.BadRequestException('Order must include at least one item');
        }
        const lineItems = payload.items.map((item) => {
            const product = byId.get(item.productId);
            if (!product) {
                throw new common_1.BadRequestException(`Product ${item.productId} is invalid for this store`);
            }
            const lineTotal = Number((item.quantity * product.price).toFixed(2));
            return {
                productId: product.id,
                quantity: item.quantity,
                unitPrice: product.price,
                lineTotal,
            };
        });
        const totalAmount = Number(lineItems.reduce((acc, item) => acc + item.lineTotal, 0).toFixed(2));
        const orderNumber = `ORD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
        const deliveryCode = Math.floor(1000 + Math.random() * 9000).toString();
        const order = await this.ordersRepository.create({
            sellerId: store.sellerId,
            storeId: store.id,
            customerName: payload.customerName,
            customerPhone: payload.customerPhone,
            customerEmail: payload.customerEmail,
            totalAmount,
            items: lineItems,
            orderNumber,
            deliveryCode,
        });
        this.sendOrderNotifications(order, store, lineItems, products).catch((err) => this.logger.error(`WhatsApp notification failed: ${err.message}`));
        return order;
    }
    async findOne(id, sellerId) {
        const order = await this.ordersRepository.findByIdForSeller(id, sellerId);
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return order;
    }
    async update(id, sellerId, payload) {
        const result = await this.ordersRepository.updateForSeller(id, sellerId, payload);
        if (result.count === 0) {
            throw new common_1.NotFoundException('Order not found');
        }
        return this.findOne(id, sellerId);
    }
    async sendOrderNotifications(order, store, lineItems, products) {
        const productMap = new Map(products.map((p) => [p.id, p]));
        const itemsSummary = lineItems
            .map((item) => {
            const name = productMap.get(item.productId)?.name ?? item.productId;
            return `${item.quantity}x ${name}`;
        })
            .join(', ');
        await this.whatsapp.notifySellerNewOrder(store.seller.phone, order.orderNumber, order.customerName, itemsSummary, order.totalAmount, 'COD', {
            sellerId: store.sellerId,
            storeId: store.id,
            orderId: order.id,
        });
        await this.whatsapp.notifyBuyerOrderConfirmed(order.customerPhone, order.orderNumber, store.name, order.totalAmount, order.deliveryCode ?? '----', store.slug, { orderId: order.id });
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = OrdersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [orders_repository_1.OrdersRepository,
        store_repository_1.StoreRepository,
        products_repository_1.ProductsRepository,
        whatsapp_service_1.WhatsappService])
], OrdersService);
//# sourceMappingURL=orders.service.js.map