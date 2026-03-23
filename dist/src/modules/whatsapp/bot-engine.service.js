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
var BotEngineService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BotEngineService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const whatsapp_service_1 = require("./whatsapp.service");
const config_1 = require("@nestjs/config");
const bot_session_service_1 = require("./bot-session.service");
let BotEngineService = BotEngineService_1 = class BotEngineService {
    constructor(prisma, wa, session, config) {
        this.prisma = prisma;
        this.wa = wa;
        this.session = session;
        this.config = config;
        this.logger = new common_1.Logger(BotEngineService_1.name);
    }
    async handle(from, type, text, interactiveId) {
        const input = (interactiveId ?? text ?? '').trim().toLowerCase();
        const { state, context } = await this.session.get(from);
        this.logger.debug(`[BOT] ${from} | state=${state} | input="${input}"`);
        if (['menu', 'start', '0', 'hi', 'hello', 'hie'].includes(input)) {
            return this.handleStart(from);
        }
        if (input === 'cart') {
            return this.handleViewCart(from, context);
        }
        if (input === 'cancel' || input === 'stop') {
            await this.session.reset(from);
            return this.wa.sendText(from, `❌ Cancelled. Send *hi* to start again.`);
        }
        switch (state) {
            case 'IDLE':
                return this.handleStart(from);
            case 'SELECTING_STORE':
                return this.handleStoreSelection(from, input, context);
            case 'BROWSING_PRODUCTS':
                return this.handleProductSelection(from, input, context);
            case 'VIEWING_PRODUCT':
                return this.handleProductAction(from, input, context);
            case 'CART':
                return this.handleCartAction(from, input, context);
            case 'CHECKOUT_NAME':
                return this.handleCheckoutName(from, text ?? '', context);
            case 'CHECKOUT_ADDRESS':
                return this.handleCheckoutAddress(from, text ?? '', context);
            case 'CHECKOUT_PAYMENT':
                return this.handlePaymentSelection(from, input, context);
            case 'AWAITING_PAYMENT_CONFIRM':
                return this.handlePaymentConfirm(from, text ?? '', context);
            case 'RIDER_IDLE':
                return this.handleRiderIdle(from, input, context);
            case 'RIDER_JOB_OFFERED':
                return this.handleRiderJobResponse(from, input, context);
            case 'RIDER_ON_JOB':
                return this.handleRiderOnJob(from, input, context);
            default:
                return this.handleStart(from);
        }
    }
    async handleStart(from) {
        const rider = await this.prisma.rider.findUnique({
            where: { phoneNumber: this.wa.formatPhone(from) },
        });
        if (rider) {
            return this.handleRiderStart(from, rider);
        }
        await this.wa.sendText(from, `✅ *In-App Browser Test*\n` +
            `──────────────────\n` +
            `Tapping the blue link below should open the in-app browser:\n\n` +
            `Track your order: https://google.com?ref=whatsapp`);
        await this.session.set(from, 'SELECTING_STORE', {});
        return this.wa.sendText(from, `👋 Welcome to *ShopBoxx*!\n\n` +
            `Zimbabwe's WhatsApp marketplace.\n\n` +
            `To browse a store, send the store name.\n\n` +
            `_Example: send_ *tendai-fashion* _to browse Tendai's store._\n\n` +
            `Send *menu* at any time to restart.`);
    }
    async handleStoreSelection(from, input, context) {
        const store = await this.prisma.store.findUnique({
            where: { slug: input },
            include: { seller: true },
        });
        if (!store) {
            return this.wa.sendText(from, `❌ Store "*${input}*" not found.\n\n` +
                `Please check the store name and try again.\n` +
                `Send *menu* to restart.`);
        }
        await this.session.set(from, 'BROWSING_PRODUCTS', {
            storeSlug: store.slug,
            storeId: store.id,
            sellerId: store.sellerId,
        });
        return this.showProducts(from, store.id, store.name);
    }
    async showProducts(from, storeId, storeName) {
        const products = await this.prisma.product.findMany({
            where: { storeId, active: true, stockQty: { gt: 0 } },
            include: { images: { where: { isPrimary: true }, take: 1 } },
            orderBy: { createdAt: 'desc' },
        });
        if (products.length === 0) {
            return this.wa.sendText(from, `😔 *${storeName}* has no products available right now.\nCheck back later!`);
        }
        const rows = products.slice(0, 10).map((p) => ({
            id: `prod_${p.id}`,
            title: p.name.substring(0, 24),
            description: `$${p.price.toFixed(2)} · ${p.stockQty} in stock`,
        }));
        return this.wa.sendList(from, `🛍️ ${storeName}`, `${products.length} products available. Select one to view details:`, 'Browse Products', [{ title: 'Available Products', rows }]);
    }
    async handleProductSelection(from, input, context) {
        const productId = input.replace('prod_', '');
        const product = await this.prisma.product.findFirst({
            where: { id: productId, storeId: context.storeId, active: true },
            include: { images: { where: { isPrimary: true }, take: 1 } },
        });
        if (!product) {
            return this.wa.sendText(from, `❌ Product not found. Send *menu* to go back.`);
        }
        await this.session.updateContext(from, 'VIEWING_PRODUCT', {
            selectedProductId: productId,
        });
        const stockStatus = product.stockQty > 5
            ? `✅ In stock (${product.stockQty} available)`
            : `⚠️ Only ${product.stockQty} left!`;
        const message = `📦 *${product.name}*\n` +
            `──────────────────\n` +
            `💰 Price: *$${product.price.toFixed(2)}*\n` +
            `${stockStatus}\n` +
            (product.description ? `\n${product.description}\n` : '') +
            `\n──────────────────`;
        return this.wa.sendButtons(from, message, [
            { id: 'add_cart', title: '🛒 Add to Cart' },
            { id: 'back_products', title: '⬅️ Back' },
            { id: 'view_cart', title: '🛒 View Cart' },
        ]);
    }
    async handleProductAction(from, input, context) {
        if (input === 'back_products') {
            await this.session.updateContext(from, 'BROWSING_PRODUCTS', {});
            return this.showProducts(from, context.storeId, context.storeSlug);
        }
        if (input === 'view_cart') {
            return this.handleViewCart(from, context);
        }
        if (input === 'add_cart') {
            const product = await this.prisma.product.findFirst({
                where: { id: context.selectedProductId, active: true },
                include: { images: { where: { isPrimary: true }, take: 1 } },
            });
            if (!product || product.stockQty === 0) {
                return this.wa.sendText(from, `❌ Sorry, this product is no longer available.`);
            }
            const cart = this.session.addToCart(context.cart ?? [], {
                productId: product.id,
                productName: product.name,
                unitPrice: product.price,
                quantity: 1,
                imageUrl: product.images[0]?.imageUrl,
            });
            const subtotal = this.session.cartSubtotal(cart);
            await this.session.set(from, 'CART', { ...context, cart });
            return this.wa.sendButtons(from, `✅ *Added to cart!*\n\n🛒 ${cart.length} item(s) — $${subtotal.toFixed(2)}`, [
                { id: 'checkout', title: '✅ Checkout' },
                { id: 'keep_shopping', title: '🛍️ Keep Shopping' },
            ]);
        }
    }
    async handleViewCart(from, context) {
        const cart = context.cart ?? [];
        if (cart.length === 0) {
            return this.wa.sendText(from, `🛒 Your cart is empty.\n\nSend *menu* to start shopping.`);
        }
        await this.session.set(from, 'CART', context);
        const subtotal = this.session.cartSubtotal(cart);
        const deliveryFee = 2.0;
        const total = subtotal + deliveryFee;
        const itemList = cart
            .map((i) => `• ${i.productName} x${i.quantity} — $${(i.unitPrice * i.quantity).toFixed(2)}`)
            .join('\n');
        return this.wa.sendButtons(from, `🛒 *Your Cart*\n──────────────────\n${itemList}\n──────────────────\n` +
            `Subtotal: $${subtotal.toFixed(2)}\n` +
            `Delivery: $${deliveryFee.toFixed(2)}\n` +
            `*Total: $${total.toFixed(2)}*`, [
            { id: 'checkout', title: '✅ Checkout' },
            { id: 'clear_cart', title: '🗑️ Clear Cart' },
        ]);
    }
    async handleCartAction(from, input, context) {
        if (input === 'clear_cart') {
            await this.session.set(from, 'IDLE', {});
            return this.wa.sendText(from, `🗑️ Cart cleared. Send *hi* to start shopping again.`);
        }
        if (input === 'keep_shopping') {
            await this.session.updateContext(from, 'BROWSING_PRODUCTS', {});
            return this.showProducts(from, context.storeId, context.storeSlug);
        }
        if (input === 'checkout') {
            await this.session.updateContext(from, 'CHECKOUT_NAME', {});
            return this.wa.sendText(from, `📋 *Checkout*\n\nPlease enter your *full name*:`);
        }
    }
    async handleCheckoutName(from, name, context) {
        if (name.trim().length < 2) {
            return this.wa.sendText(from, `❌ Please enter a valid full name:`);
        }
        await this.session.updateContext(from, 'CHECKOUT_ADDRESS', {
            buyerName: name.trim(),
        });
        return this.wa.sendText(from, `📍 Please enter your *delivery address*:\n\n_Example: 45 Samora Machel Ave, Harare CBD_`);
    }
    async handleCheckoutAddress(from, address, context) {
        if (address.trim().length < 5) {
            return this.wa.sendText(from, `❌ Please enter a valid delivery address:`);
        }
        await this.session.updateContext(from, 'CHECKOUT_PAYMENT', {
            deliveryAddress: address.trim(),
        });
        return this.wa.sendList(from, '💳 Payment Method', 'How would you like to pay?', 'Choose', [
            {
                title: 'Payment Options',
                rows: [
                    {
                        id: 'pay_ecocash',
                        title: '📱 EcoCash',
                        description: 'Pay with EcoCash mobile money',
                    },
                    {
                        id: 'pay_innbucks',
                        title: '💛 InnBucks',
                        description: 'Pay with InnBucks',
                    },
                    {
                        id: 'pay_visa',
                        title: '💳 Visa/Mastercard',
                        description: 'Pay with card online',
                    },
                    {
                        id: 'pay_cod',
                        title: '💵 Cash on Delivery',
                        description: 'Pay when order arrives',
                    },
                    {
                        id: 'pay_bank',
                        title: '🏦 Bank Transfer',
                        description: 'Pay via bank transfer',
                    },
                ],
            },
        ]);
    }
    async handlePaymentSelection(from, input, context) {
        const methodMap = {
            pay_ecocash: 'ECOCASH',
            pay_innbucks: 'INNBUCKS',
            pay_visa: 'VISA_MASTERCARD',
            pay_cod: 'COD',
            pay_bank: 'BANK_TRANSFER',
        };
        const paymentMethod = methodMap[input];
        if (!paymentMethod) {
            return this.wa.sendText(from, `❌ Please select a payment method.`);
        }
        await this.session.updateContext(from, 'AWAITING_PAYMENT_CONFIRM', {
            paymentMethod,
        });
        const { context: updatedCtx } = await this.session.get(from);
        const order = await this.createOrder(from, updatedCtx);
        if (!order) {
            return this.wa.sendText(from, `❌ Failed to place order. Please try again or send *menu*.`);
        }
        await this.session.set(from, 'ORDER_COMPLETE', {});
        if (paymentMethod === 'COD') {
            const storefrontUrl = this.config.get('STOREFRONT_URL') ?? 'https://store.shopboxx.africa';
            const trackUrl = `${storefrontUrl}/store/${updatedCtx.storeSlug}` +
                `?order=${order.orderNumber}&ref=notification`;
            return this.wa.sendText(from, `✅ *Order Placed!*\n` +
                `──────────────────\n` +
                `Order: #${order.orderNumber}\n` +
                `Total: $${order.totalAmount.toFixed(2)}\n` +
                `Payment: Cash on Delivery\n` +
                `──────────────────\n` +
                `🔐 Delivery Code: *${order.deliveryCode}*\n\n` +
                `_Show this code to the rider when your order arrives._\n\n` +
                `Track your order:\n` +
                `${trackUrl}\n\n` +
                `📲 You'll receive updates on WhatsApp. 📦`);
        }
        if (paymentMethod === 'ECOCASH') {
            return this.wa.sendText(from, `💳 *EcoCash Payment*\n` +
                `──────────────────\n` +
                `Amount: *$${order.totalAmount.toFixed(2)}*\n` +
                `Merchant: *ShopBoxx*\n` +
                `Reference: *${order.orderNumber}*\n` +
                `──────────────────\n` +
                `Once paid, send your EcoCash confirmation number 👇`);
        }
        const storefrontUrl = this.config.get('STOREFRONT_URL') ?? 'https://store.shopboxx.africa';
        const trackUrl = `${storefrontUrl}/store/${updatedCtx.storeSlug}` +
            `?order=${order.orderNumber}&ref=notification`;
        return this.wa.sendText(from, `✅ *Order Placed!*\n` +
            `Order: #${order.orderNumber}\n` +
            `Total: $${order.totalAmount.toFixed(2)}\n\n` +
            `Track your order:\n` +
            `${trackUrl}\n\n` +
            `Payment instructions will be sent shortly. 📱`);
    }
    async handlePaymentConfirm(from, confirmCode, context) {
        await this.session.set(from, 'ORDER_COMPLETE', {});
        return this.wa.sendText(from, `✅ *Payment received!*\n\n` +
            `Your payment is being verified.\n` +
            `You'll be notified once confirmed.\n\n` +
            `Thank you for shopping! 🎉\n\n` +
            `Send *hi* to place another order.`);
    }
    async createOrder(from, context) {
        try {
            const cart = context.cart ?? [];
            if (!cart.length || !context.sellerId || !context.storeId)
                return null;
            const subtotal = this.session.cartSubtotal(cart);
            const deliveryFee = 2.0;
            const total = subtotal + deliveryFee;
            const formattedPhone = this.wa.formatPhone(from);
            const buyer = await this.prisma.buyer.upsert({
                where: { phoneNumber: formattedPhone },
                create: { phoneNumber: formattedPhone, fullName: context.buyerName },
                update: { fullName: context.buyerName },
            });
            const orderNumber = this.generateOrderNumber();
            const deliveryCode = this.generateDeliveryCode();
            const order = await this.prisma.$transaction(async (tx) => {
                const newOrder = await tx.order.create({
                    data: {
                        sellerId: context.sellerId,
                        storeId: context.storeId,
                        buyerId: buyer.id,
                        orderNumber,
                        deliveryCode,
                        customerName: context.buyerName ?? formattedPhone,
                        customerPhone: formattedPhone,
                        totalAmount: total,
                        deliveryAddress: context.deliveryAddress,
                        notes: context.notes,
                        items: {
                            create: cart.map((item) => ({
                                productId: item.productId,
                                quantity: item.quantity,
                                unitPrice: item.unitPrice,
                                lineTotal: item.unitPrice * item.quantity,
                            })),
                        },
                        payment: {
                            create: {
                                provider: context.paymentMethod ?? 'COD',
                                amount: total,
                                currency: 'USD',
                                status: 'PENDING',
                            },
                        },
                    },
                });
                for (const item of cart) {
                    await tx.product.update({
                        where: { id: item.productId },
                        data: { stockQty: { decrement: item.quantity } },
                    });
                }
                return newOrder;
            });
            const seller = await this.prisma.seller.findUnique({
                where: { id: context.sellerId },
            });
            if (seller) {
                const itemsSummary = cart
                    .map((i) => `${i.quantity}x ${i.productName}`)
                    .join(', ');
                await this.wa
                    .notifySellerNewOrder(seller.phone, orderNumber, context.buyerName ?? formattedPhone, itemsSummary, total, context.paymentMethod ?? 'COD', { sellerId: seller.id, storeId: context.storeId, orderId: order.id })
                    .catch((e) => this.logger.error(`Failed to notify seller: ${e.message}`));
            }
            return order;
        }
        catch (err) {
            this.logger.error(`createOrder error: ${err}`);
            return null;
        }
    }
    async handleRiderStart(from, rider) {
        await this.session.set(from, 'RIDER_IDLE', { riderId: rider.id });
        return this.wa.sendButtons(from, `👋 Welcome back, *${rider.fullName}*!\n\n` +
            `Status: ${rider.isOnline ? '🟢 Online' : '🔴 Offline'}\n` +
            `Rating: ⭐ ${rider.rating}\n` +
            `Deliveries: ${rider.totalDeliveries}`, [
            {
                id: rider.isOnline ? 'go_offline' : 'go_online',
                title: rider.isOnline ? '🔴 Go Offline' : '🟢 Go Online',
            },
            { id: 'my_earnings', title: '💰 My Earnings' },
        ]);
    }
    async handleRiderIdle(from, input, context) {
        if (input === 'go_online') {
            await this.prisma.rider.update({
                where: { id: context.riderId },
                data: { isOnline: true },
            });
            return this.wa.sendText(from, `🟢 You are now *online* and will receive delivery jobs.\n\nSend *menu* to check status.`);
        }
        if (input === 'go_offline') {
            await this.prisma.rider.update({
                where: { id: context.riderId },
                data: { isOnline: false },
            });
            return this.wa.sendText(from, `🔴 You are now *offline*.\n\nSend *menu* to go back online.`);
        }
        if (input === 'my_earnings') {
            const earnings = await this.prisma.riderEarning.aggregate({
                where: { riderId: context.riderId, status: 'PAID' },
                _sum: { amountUsd: true },
            });
            const pending = await this.prisma.riderEarning.aggregate({
                where: { riderId: context.riderId, status: 'PENDING' },
                _sum: { amountUsd: true },
            });
            return this.wa.sendText(from, `💰 *Your Earnings*\n\n` +
                `Paid out: *$${Number(earnings._sum.amountUsd ?? 0).toFixed(2)}*\n` +
                `Pending: *$${Number(pending._sum.amountUsd ?? 0).toFixed(2)}*\n\n` +
                `Send *menu* for more options.`);
        }
    }
    async handleRiderJobResponse(from, input, context) {
        if (input === 'yes') {
            await this.prisma.delivery.update({
                where: { id: context.activeDeliveryId },
                data: {
                    riderId: context.riderId,
                    status: 'RIDER_ASSIGNED',
                    assignedAt: new Date(),
                },
            });
            await this.session.updateContext(from, 'RIDER_ON_JOB', {});
            return this.wa.sendText(from, `✅ Job accepted! Head to the pickup location.\n\nReply *PICKED* once you collect the order.`);
        }
        if (input === 'no') {
            await this.session.updateContext(from, 'RIDER_IDLE', {});
            return this.wa.sendText(from, `No problem! Waiting for next job. 🛵`);
        }
    }
    async handleRiderOnJob(from, input, context) {
        if (input === 'picked') {
            await this.prisma.delivery.update({
                where: { id: context.activeDeliveryId },
                data: { status: 'IN_TRANSIT', pickedUpAt: new Date() },
            });
            return this.wa.sendText(from, `📦 Pickup confirmed! Head to drop-off location.\n\nReply *DONE* when delivered.`);
        }
        if (input === 'done') {
            await this.prisma.delivery.update({
                where: { id: context.activeDeliveryId },
                data: { status: 'DELIVERED', deliveredAt: new Date() },
            });
            await this.prisma.rider.update({
                where: { id: context.riderId },
                data: { totalDeliveries: { increment: 1 } },
            });
            await this.session.set(from, 'RIDER_IDLE', { riderId: context.riderId });
            return this.wa.sendText(from, `🎉 Delivery complete! Well done.\n\nYour payout will be processed. 💰\n\nSend *menu* for next job.`);
        }
    }
    generateOrderNumber() {
        const year = new Date().getFullYear();
        const random = Math.floor(10000 + Math.random() * 90000);
        return `ZW-${year}-${random}`;
    }
    generateDeliveryCode() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
};
exports.BotEngineService = BotEngineService;
exports.BotEngineService = BotEngineService = BotEngineService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        whatsapp_service_1.WhatsappService,
        bot_session_service_1.BotSessionService,
        config_1.ConfigService])
], BotEngineService);
//# sourceMappingURL=bot-engine.service.js.map