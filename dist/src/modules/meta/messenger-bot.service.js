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
var MessengerBotService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessengerBotService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const meta_sender_service_1 = require("./meta-sender.service");
const shopify_api_service_1 = require("../shopify/shopify-api.service");
const shopify_repository_1 = require("../shopify/shopify.repository");
const bot_session_service_1 = require("../whatsapp/bot-session.service");
const config_1 = require("@nestjs/config");
let MessengerBotService = MessengerBotService_1 = class MessengerBotService {
    constructor(prisma, metaSender, shopifyApi, repository, session, config) {
        this.prisma = prisma;
        this.metaSender = metaSender;
        this.shopifyApi = shopifyApi;
        this.repository = repository;
        this.session = session;
        this.config = config;
        this.logger = new common_1.Logger(MessengerBotService_1.name);
    }
    getProductUrl(merchant, product) {
        if (product.onlineStoreUrl) {
            return product.onlineStoreUrl;
        }
        if (product.handle) {
            return `https://${merchant.shop}/products/${product.handle}`;
        }
        return null;
    }
    getCheckoutUrl(merchant, product) {
        const defaultVariant = product.variants?.[0];
        if (defaultVariant?.id) {
            return `https://${merchant.shop}/cart/${defaultVariant.id}:1`;
        }
        return this.getProductUrl(merchant, product);
    }
    isAmountVariantProduct(product) {
        const variants = product?.variants ?? [];
        if (variants.length === 0) {
            return false;
        }
        return variants.every((variant) => {
            const title = (variant.title ?? '').trim();
            return /^\$?\d+([.,]\d{1,2})?$/.test(title);
        });
    }
    async handle(data) {
        const { senderId, merchantId, text, postbackPayload, referral } = data;
        const sessionKey = `msg_${senderId}_${merchantId}`;
        let input = (postbackPayload ?? text ?? '').trim();
        const { state, context } = await this.session.get(sessionKey);
        const merchant = await this.repository.findById(merchantId);
        if (!merchant || !merchant.messengerToken) {
            this.logger.error(`Merchant ${merchantId} not found or Messenger not connected`);
            return;
        }
        const token = merchant.messengerToken;
        if (!postbackPayload && text) {
            const normalizedText = text.trim().toLowerCase();
            if (normalizedText.includes('keep shopping')) {
                input = 'SHOP_NOW';
            }
            else if (normalizedText.includes('checkout')) {
                input = 'CHECKOUT';
            }
            else if (normalizedText.includes('clear')) {
                input = 'CLEAR_CART';
            }
            else if (normalizedText.includes('my cart')) {
                input = 'VIEW_CART';
            }
            else if (normalizedText.includes('add to cart')) {
                const selectedProduct = context?.selectedProduct;
                if (selectedProduct?.id) {
                    input = `ADD_${selectedProduct.id}`;
                }
            }
        }
        const lowerInput = input.toLowerCase();
        if (referral) {
            return this.handleReferral(senderId, merchant, token, referral);
        }
        const activeTriggers = await this.prisma.commentTrigger.findMany({
            where: { merchantId: merchant.id, isActive: true },
        });
        if (['GET_STARTED', 'SHOP_NOW', 'START_OVER'].includes(input)) {
            return this.handleWelcome(senderId, merchant, token);
        }
        const matchingTrigger = await this.prisma.commentTrigger.findFirst({
            where: {
                merchantId: merchant.id,
                isActive: true,
                keyword: { equals: input, mode: 'insensitive' },
            },
        });
        if (matchingTrigger) {
            const storeName = merchant.shop.split('.')[0];
            let dmText = matchingTrigger.templateMessage;
            if (!dmText) {
                dmText = `Hi! 👋 Thanks for your interest in {{store_name}}.\n\nReply "shopping" to browse our collection!`;
            }
            dmText = dmText
                .replace(/{{store_name}}/g, storeName || 'our store')
                .replace(/{{commenter_name}}/g, 'there');
            await this.metaSender.sendText(senderId, dmText, token, merchant.id, 'messenger');
            return this.handleWelcome(senderId, merchant, token, true);
        }
        if (input === 'VIEW_CART' || lowerInput === 'cart') {
            return this.handleViewCart(senderId, merchant, token, context);
        }
        if (input === 'CHECKOUT' || lowerInput === 'checkout') {
            return this.handleCartAction(senderId, merchant, token, 'CHECKOUT', context);
        }
        if (input === 'MY_ORDERS') {
            return this.handleMyOrders(senderId, merchant, token);
        }
        if (input.startsWith('CAT_'))
            return this.handleCategorySelection(senderId, merchant, token, input, context);
        if (input.startsWith('VIEW_') || input.startsWith('ADD_'))
            return this.handleProductSelection(senderId, merchant, token, input, context);
        if (input.startsWith('VAR_'))
            return this.handleVariantSelection(senderId, merchant, token, input, context);
        if (input === 'MY_ORDERS') {
            return this.handleMyOrders(senderId, merchant, token);
        }
        if (['cancel', 'stop'].includes(lowerInput)) {
            await this.session.reset(sessionKey);
            return this.metaSender.sendText(senderId, '❌ Order cancelled. Send *hi* to start again.', token, merchant.id, 'messenger');
        }
        switch (state) {
            case 'IDLE':
                return;
            case 'BROWSING_CATEGORIES':
                return this.handleCategorySelection(senderId, merchant, token, input, context);
            case 'BROWSING_PRODUCTS':
                return this.handleProductSelection(senderId, merchant, token, input, context);
            case 'SELECTING_VARIANT':
                return this.handleVariantSelection(senderId, merchant, token, input, context);
            case 'VIEWING_PRODUCT':
                return this.handleProductAction(senderId, merchant, token, input, context);
            case 'CART':
                return this.handleCartAction(senderId, merchant, token, input, context);
            case 'CHECKOUT_NAME':
                return this.handleCheckoutName(senderId, merchant, token, text ?? '', context);
            case 'CHECKOUT_ADDRESS':
                return this.handleCheckoutAddress(senderId, merchant, token, text ?? '', context);
            case 'CHECKOUT_PAYMENT':
                return this.handlePaymentSelection(senderId, merchant, token, input, context);
            default:
                return;
        }
    }
    async handleReferral(senderId, merchant, token, referral) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        if (referral.startsWith('product_')) {
            const productId = referral.replace('product_', '');
            const product = await this.shopifyApi.getProduct(merchant.shop, productId);
            return this.showProductDetail(senderId, merchant, token, product, {
                merchantId: merchant.id,
                shop: merchant.shop,
            });
        }
        if (referral.startsWith('collection_')) {
            const collectionId = referral.replace('collection_', '');
            const products = await this.shopifyApi.getProductsByCollection(merchant.shop, collectionId);
            await this.metaSender.sendCarousel(senderId, products.map((p) => ({
                title: p.title,
                subtitle: `$${p.price.toFixed(2)} · ${p.available ? 'Available' : 'Out of stock'}`,
                imageUrl: p.primaryImage,
                productId: p.id,
            })), token, merchant.id);
            await this.session.set(sessionKey, 'BROWSING_PRODUCTS', {
                merchantId: merchant.id,
                shop: merchant.shop,
                products,
            });
            return;
        }
        return this.handleWelcome(senderId, merchant, token);
    }
    async handleWelcome(senderId, merchant, token, skipHeader = false) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        if (!skipHeader)
            await this.metaSender.sendTypingOn(senderId, token, 'messenger');
        const collections = await this.shopifyApi.getCollections(merchant.shop);
        const welcomeText = `Hey! 👋 Welcome to *${merchant.shop.split('.')[0]}*.\nWhat are you looking for today?`;
        if (collections.length === 0) {
            const products = await this.shopifyApi.getProducts(merchant.shop);
            if (!skipHeader)
                await this.metaSender.sendText(senderId, welcomeText, token, merchant.id, 'messenger');
            await this.metaSender.sendCarousel(senderId, products.map((p) => ({
                title: p.title,
                subtitle: `$${p.price.toFixed(2)}`,
                imageUrl: p.primaryImage,
                productId: p.id,
            })), token, merchant.id);
            await this.session.set(sessionKey, 'BROWSING_PRODUCTS', {
                merchantId: merchant.id,
                shop: merchant.shop,
                products,
            });
        }
        else {
            const replies = collections.slice(0, 13).map((c) => ({
                title: c.title,
                payload: `CAT_${c.id}`,
            }));
            await this.metaSender.sendQuickReplies(senderId, skipHeader ? 'Choose a section:' : welcomeText, replies, token, merchant.id, 'messenger');
            await this.session.set(sessionKey, 'BROWSING_CATEGORIES', {
                merchantId: merchant.id,
                shop: merchant.shop,
            });
        }
    }
    async handleCategorySelection(senderId, merchant, token, input, context) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        if (!input.startsWith('CAT_')) {
            return this.handleWelcome(senderId, merchant, token);
        }
        const collectionId = input.replace('CAT_', '');
        const products = await this.shopifyApi.getProductsByCollection(merchant.shop, collectionId);
        if (products.length === 0) {
            await this.metaSender.sendText(senderId, 'Nothing here yet 😔', token, merchant.id, 'messenger');
            return this.handleWelcome(senderId, merchant, token);
        }
        await this.metaSender.sendCarousel(senderId, products.map((p) => ({
            title: p.title,
            subtitle: `$${p.price.toFixed(2)}`,
            imageUrl: p.primaryImage,
            productId: p.id,
        })), token, merchant.id);
        await this.session.updateContext(sessionKey, 'BROWSING_PRODUCTS', {
            ...context,
            products,
        });
    }
    async handleProductSelection(senderId, merchant, token, input, context) {
        try {
            if (!input.startsWith('VIEW_') && !input.startsWith('ADD_')) {
                await this.session.reset(`msg_${senderId}_${merchant.id}`);
                return;
            }
            const productId = input.replace('VIEW_', '').replace('ADD_', '');
            const product = await this.shopifyApi.getProduct(merchant.shop, productId);
            if (input.startsWith('ADD_')) {
                if (product.variants.length > 1) {
                    return this.showProductDetail(senderId, merchant, token, product, context);
                }
                else {
                    const cart = this.session.addToCart(context.cart ?? [], {
                        productId: product.id,
                        productName: product.title,
                        unitPrice: product.price,
                        quantity: 1,
                    });
                    await this.session.updateContext(`msg_${senderId}_${merchant.id}`, 'CART', { ...context, cart });
                    return this.showAddedToCart(senderId, merchant, token, cart);
                }
            }
            return this.showProductDetail(senderId, merchant, token, product, context);
        }
        catch (err) {
            this.logger.error(`Product selection failed: ${err.message}`);
            return this.metaSender.sendText(senderId, "❌ Sorry, I couldn't add that to your cart. Please try again from the menu.", token, merchant.id, 'messenger');
        }
    }
    async showProductDetail(senderId, merchant, token, product, context, customMessage, recipientId) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        const targetRecipient = recipientId || senderId;
        const isCommentId = !!recipientId;
        const stockStatus = product.available ? '✅ In stock' : '❌ Out of stock';
        if (product.variants.length > 1) {
            const sent = await this.sendVariantSelection(targetRecipient, product, merchant, token, customMessage, isCommentId);
            if (!sent) {
                return false;
            }
            await this.session.updateContext(sessionKey, 'SELECTING_VARIANT', {
                ...context,
                selectedProduct: product,
            });
            return true;
        }
        else {
            const productUrl = product.onlineStoreUrl || `https://${merchant.shop}/products/${product.handle}`;
            const buyNowUrl = product.variants?.[0]?.id
                ? `https://${merchant.shop}/cart/${product.variants[0].id}:1`
                : `https://${merchant.shop}/cart/add?id=${product.variants?.[0]?.id || product.id}&quantity=1`;
            const sent = await this.metaSender.sendProductCard(targetRecipient, {
                title: product.title,
                description: product.description,
                price: product.price,
                imageUrl: product.primaryImage || product.images?.[0],
                productUrl: productUrl,
                id: product.id,
            }, [
                {
                    type: 'web_url',
                    title: '🛍️ View Product',
                    url: productUrl,
                },
                {
                    type: 'web_url',
                    title: '🛒 Buy Now',
                    url: buyNowUrl,
                },
                {
                    type: 'web_url',
                    title: '💳 Shop More',
                    url: `https://${merchant.shop}/collections/all`,
                },
            ], token, merchant.id, 'messenger', isCommentId);
            if (!sent) {
                return false;
            }
            await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                ...context,
                selectedProduct: product,
            });
            return true;
        }
    }
    async sendVariantSelection(recipientId, product, merchant, token, customMessage, isCommentId = false) {
        const stockStatus = product.available ? '✅ In stock' : '❌ Out of stock';
        const message = customMessage ||
            `👗 *${product.title}*\n──────────────────\n💰 Starting at $${product.price.toFixed(2)}\n${product.description ? product.description.substring(0, 120) + '...' : ''}\n\n${stockStatus}`;
        if (product.variants.length <= 3) {
            const buttons = product.variants.map((variant) => ({
                type: 'postback',
                title: `${variant.title} - $${variant.price.toFixed(2)}`,
                payload: `VAR_${variant.id}`,
            }));
            return this.metaSender.sendButtonTemplate(recipientId, message + '\n\n🎨 *Choose your variant:*', buttons, token, merchant.id, 'messenger', isCommentId);
        }
        const replies = product.variants.slice(0, 13).map((variant) => ({
            title: `${variant.title} - $${variant.price.toFixed(2)}`.substring(0, 20),
            payload: `VAR_${variant.id}`,
        }));
        const variantsList = product.variants
            .slice(0, 8)
            .map((v, i) => `${i + 1}️⃣ *${v.title}* - $${v.price.toFixed(2)} ${v.inventoryQuantity > 0 ? '✅' : '❌'}`)
            .join('\n');
        const fullMessage = `${message}\n\n🎨 *Available Variants:*\n${variantsList}\n\n👇 Select your preferred variant:`;
        return this.metaSender.sendQuickReplies(recipientId, fullMessage, replies, token, merchant.id, 'messenger', isCommentId);
    }
    async handleVariantSelection(senderId, merchant, token, input, context) {
        if (!input.startsWith('VAR_')) {
            if (input.startsWith('ADD_') || input.startsWith('VIEW_'))
                return this.handleProductSelection(senderId, merchant, token, input, context);
            if (input === 'CHECKOUT')
                return this.handleCartAction(senderId, merchant, token, input, context);
            await this.session.reset(`msg_${senderId}_${merchant.id}`);
            return;
        }
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        const variantId = input.replace('VAR_', '');
        const product = context.selectedProduct;
        const variant = product?.variants?.find((v) => v.id === variantId);
        if (!variant)
            return;
        const buyNowUrl = `https://${merchant.shop}/cart/${variantId}:1`;
        const productUrl = product.onlineStoreUrl || `https://${merchant.shop}/products/${product.handle}`;
        const sent = await this.metaSender.sendProductCard(senderId, {
            title: `${product.title} - ${variant.title}`,
            description: product.description,
            price: variant.price,
            imageUrl: product.primaryImage || product.images?.[0],
            productUrl: productUrl,
            id: variant.id,
        }, [
            {
                type: 'web_url',
                title: '🛍️ View Product',
                url: productUrl,
            },
            {
                type: 'web_url',
                title: '🛒 Buy Now',
                url: buyNowUrl,
            },
            {
                type: 'web_url',
                title: '💳 Shop More',
                url: `https://${merchant.shop}/collections/all`,
            },
        ], token, merchant.id, 'messenger');
        if (sent) {
            await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                ...context,
                selectedProduct: { ...product, selectedVariant: variant }
            });
            return true;
        }
        return false;
    }
    async handleProductAction(senderId, merchant, token, input, context) {
        if (input.startsWith('ADD_')) {
            const product = context.selectedProduct;
            const cart = this.session.addToCart(context.cart ?? [], {
                productId: product.id,
                productName: product.title,
                unitPrice: product.price,
                quantity: 1,
            });
            await this.session.updateContext(`msg_${senderId}_${merchant.id}`, 'CART', { ...context, cart });
            return this.showAddedToCart(senderId, merchant, token, cart);
        }
    }
    async showAddedToCart(senderId, merchant, token, cart) {
        const subtotal = this.session.cartSubtotal(cart);
        const lastItem = cart[cart.length - 1];
        return this.metaSender.sendQuickReplies(senderId, `✅ Added to cart: *${lastItem.productName}*\n🛒 Total: ${cart.length} item(s) — $${subtotal.toFixed(2)}`, [
            { title: '✅ Checkout', payload: 'CHECKOUT' },
            { title: '🛍️ Keep Shopping', payload: 'SHOP_NOW' },
        ], token, merchant.id, 'messenger');
    }
    async handleViewCart(senderId, merchant, token, context) {
        const cart = context.cart ?? [];
        if (cart.length === 0) {
            return this.metaSender.sendText(senderId, '🛒 Your cart is empty.', token, merchant.id, 'messenger');
        }
        const subtotal = this.session.cartSubtotal(cart);
        const total = subtotal + 5.0;
        let text = '🛒 *Your Cart*\n──────────────────\n';
        cart.forEach((i) => {
            text += `- ${i.productName} x${i.quantity} — $${(i.unitPrice * i.quantity).toFixed(2)}\n`;
        });
        text += `──────────────────\nSubtotal: $${subtotal.toFixed(2)}\nDelivery: $5.00\n*Total: $${total.toFixed(2)}*`;
        await this.metaSender.sendButtons(senderId, text, [
            { title: '✅ Checkout', payload: 'CHECKOUT' },
            { title: '🗑️ Clear', payload: 'CLEAR_CART' },
        ], token, merchant.id, 'messenger');
    }
    async handleCartAction(senderId, merchant, token, input, context) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        if (input === 'CHECKOUT') {
            await this.session.updateContext(sessionKey, 'CHECKOUT_NAME', {});
            return this.metaSender.sendText(senderId, "📋 What's your full name?", token, merchant.id, 'messenger');
        }
        if (input === 'CLEAR_CART') {
            await this.session.reset(sessionKey);
            return this.metaSender.sendText(senderId, '🗑️ Cart cleared.', token, merchant.id, 'messenger');
        }
    }
    async handleCheckoutName(senderId, merchant, token, text, context) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        if (text.length < 2)
            return this.metaSender.sendText(senderId, '❌ Please enter a valid name:', token, merchant.id, 'messenger');
        await this.session.updateContext(sessionKey, 'CHECKOUT_ADDRESS', {
            ...context,
            buyerName: text,
        });
        return this.metaSender.sendText(senderId, '📍 Your delivery address?', token, merchant.id, 'messenger');
    }
    async handleCheckoutAddress(senderId, merchant, token, text, context) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        if (text.length < 5)
            return this.metaSender.sendText(senderId, '❌ Please enter a valid address:', token, merchant.id, 'messenger');
        await this.session.updateContext(sessionKey, 'CHECKOUT_PAYMENT', {
            ...context,
            deliveryAddress: text,
        });
        return this.metaSender.sendQuickReplies(senderId, 'How would you like to pay?', [
            { title: '💵 Cash on Delivery', payload: 'PAY_COD' },
            { title: '💳 Pay by Card', payload: 'PAY_CARD' },
            { title: '🏦 Bank Transfer', payload: 'PAY_BANK' },
        ], token, merchant.id, 'messenger');
    }
    async handlePaymentSelection(senderId, merchant, token, input, context) {
        const sessionKey = `msg_${senderId}_${merchant.id}`;
        const paymentMap = {
            PAY_COD: 'Cash on Delivery',
            PAY_CARD: 'Card',
            PAY_BANK: 'Bank Transfer',
        };
        const paymentMethod = paymentMap[input];
        if (!paymentMethod)
            return;
        try {
            const order = await this.shopifyApi.createOrder(merchant.shop, {
                lineItems: context.cart.map((i) => ({
                    variantId: i.variantId || i.productId,
                    quantity: i.quantity,
                })),
                customerFirstName: context.buyerName,
                customerPhone: senderId,
                shippingAddress: context.deliveryAddress,
                paymentMethod,
            });
            if (order.invoiceUrl) {
                await this.metaSender.sendButtonTemplate(senderId, `✅ Order Ready!\n──────────────────\nTotal: $${order.totalPrice}\n\nPlease tap below to complete your payment securely via Shopify (Stripe/PayPal):`, [
                    {
                        type: 'web_url',
                        title: '💳 Secure Payment',
                        url: order.invoiceUrl,
                    },
                    { type: 'postback', title: '🛍️ Shop More', payload: 'SHOP_NOW' },
                ], token, merchant.id, 'messenger');
            }
            else {
                await this.metaSender.sendReceipt(senderId, {
                    buyerName: context.buyerName,
                    orderNumber: order.orderNumber,
                    items: context.cart.map((i) => ({
                        name: i.productName,
                        qty: i.quantity,
                        price: i.unitPrice,
                        imageUrl: i.imageUrl,
                    })),
                    subtotal: this.session.cartSubtotal(context.cart ?? []),
                    shipping: 0.0,
                    total: parseFloat(order.totalPrice),
                    paymentMethod,
                }, token, merchant.id);
            }
            await this.session.set(sessionKey, 'ORDER_COMPLETE', {});
        }
        catch (e) {
            await this.metaSender.sendText(senderId, `❌ FAILED: ${e.message}`, token, merchant.id, 'messenger');
        }
    }
    async handleMyOrders(senderId, merchant, token) {
        const orders = await this.prisma.whatsappMessage.findMany({
            where: {
                toNumber: senderId,
                sellerId: merchant.id,
                direction: 'OUTBOUND',
            },
            take: 5,
            orderBy: { createdAt: 'desc' },
        });
        return this.metaSender.sendText(senderId, '📦 *Recent Activity*\n──────────────────\nCheck your orders on Shopify Admin or here in a bit!', token, merchant.id, 'messenger');
    }
};
exports.MessengerBotService = MessengerBotService;
exports.MessengerBotService = MessengerBotService = MessengerBotService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        meta_sender_service_1.MetaSenderService,
        shopify_api_service_1.ShopifyApiService,
        shopify_repository_1.ShopifyRepository,
        bot_session_service_1.BotSessionService,
        config_1.ConfigService])
], MessengerBotService);
//# sourceMappingURL=messenger-bot.service.js.map