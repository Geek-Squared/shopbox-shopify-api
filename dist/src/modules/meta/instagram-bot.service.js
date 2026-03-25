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
var InstagramBotService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramBotService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const meta_sender_service_1 = require("./meta-sender.service");
const shopify_api_service_1 = require("../shopify/shopify-api.service");
const shopify_repository_1 = require("../shopify/shopify.repository");
const bot_session_service_1 = require("../whatsapp/bot-session.service");
const config_1 = require("@nestjs/config");
let InstagramBotService = InstagramBotService_1 = class InstagramBotService {
    constructor(prisma, metaSender, shopifyApi, repository, session, config) {
        this.prisma = prisma;
        this.metaSender = metaSender;
        this.shopifyApi = shopifyApi;
        this.repository = repository;
        this.session = session;
        this.config = config;
        this.logger = new common_1.Logger(InstagramBotService_1.name);
    }
    async handle(data) {
        const { senderId, merchantId, text, postbackPayload } = data;
        this.logger.debug(`Looking up merchant by ID: ${merchantId}`);
        const sessionKey = `ig_${senderId}_${merchantId}`;
        const input = (postbackPayload ?? text ?? '').trim();
        const { state, context } = await this.session.get(sessionKey);
        const merchant = await this.repository.findById(merchantId);
        if (!merchant || !merchant.instagramToken) {
            this.logger.error(`Merchant ${merchantId} not found or IG not connected`);
            return;
        }
        const token = merchant.instagramToken;
        const activeTriggers = await this.prisma.commentTrigger.findMany({
            where: { merchantId: merchant.id, isActive: true },
        });
        const triggerWords = activeTriggers
            .map((t) => t.keyword.trim().toLowerCase())
            .filter((kw) => kw.length > 0);
        const lowerInput = input.toLowerCase();
        const isTriggerWord = triggerWords.some((kw) => lowerInput.includes(kw));
        if (isTriggerWord) {
            return this.handleWelcome(senderId, merchant, token);
        }
        if (input.startsWith('CAT_'))
            return this.handleCategorySelection(senderId, merchant, token, input, context);
        if (input.startsWith('SELECT_'))
            return this.handleProductSelection(senderId, merchant, token, input, context);
        if (input.startsWith('ADD_'))
            return this.handleAddToCart(senderId, merchant, token, input, context);
        if (input.startsWith('VAR_'))
            return this.handleVariantSelection(senderId, merchant, token, input, context);
        if (lowerInput === 'cart') {
            return this.handleViewCart(senderId, merchant, token, context);
        }
        if (['cancel', 'stop'].includes(lowerInput)) {
            await this.session.reset(sessionKey);
            return this.metaSender.sendText(senderId, '❌ Order cancelled. Send *hi* to start again.', token, merchant.id, 'instagram');
        }
        try {
            switch (state) {
                case 'IDLE':
                    return;
                case 'BROWSING_CATEGORIES':
                    return await this.handleCategorySelection(senderId, merchant, token, input, context);
                case 'BROWSING_PRODUCTS':
                    return await this.handleProductSelection(senderId, merchant, token, input, context);
                case 'SELECTING_VARIANT':
                    return await this.handleVariantSelection(senderId, merchant, token, input, context);
                case 'VIEWING_PRODUCT':
                    return await this.handleProductAction(senderId, merchant, token, input, context);
                case 'CART':
                    return await this.handleCartAction(senderId, merchant, token, input, context);
                case 'CHECKOUT_NAME':
                    return await this.handleCheckoutName(senderId, merchant, token, text ?? '', context);
                case 'CHECKOUT_ADDRESS':
                    return await this.handleCheckoutAddress(senderId, merchant, token, text ?? '', context);
                case 'CHECKOUT_PAYMENT':
                    return await this.handlePaymentSelection(senderId, merchant, token, input, context);
                default:
                    return;
            }
        }
        catch (error) {
            this.logger.error(`State ${state} failed: ${error.message}`);
            await this.session.reset(sessionKey);
            return;
        }
    }
    async handleWelcome(senderId, merchant, token) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        await this.metaSender.sendTypingOn(senderId, token, 'instagram');
        const collections = await this.shopifyApi.getCollections(merchant.shop);
        if (collections.length === 0) {
            const products = await this.shopifyApi.getProducts(merchant.shop);
            await this.metaSender.sendText(senderId, `Hey! 👋 Welcome to *${merchant.shop.split('.')[0]}*.\nWhat are you looking for today?`, token, merchant.id, 'instagram');
            await this.metaSender.sendProductListText(senderId, products, token, merchant.id, 'instagram');
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
            await this.metaSender.sendQuickReplies(senderId, `Hey! 👋 Welcome to *${merchant.shop.split('.')[0]}*.\nWhat are you looking for today?`, replies, token, merchant.id, 'instagram');
            await this.session.set(sessionKey, 'BROWSING_CATEGORIES', {
                merchantId: merchant.id,
                shop: merchant.shop,
            });
        }
    }
    async handleCategorySelection(senderId, merchant, token, input, context) {
        if (!input.startsWith('CAT_')) {
            await this.session.reset(`ig_${senderId}_${merchant.id}`);
            return;
        }
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        const collectionId = input.replace('CAT_', '');
        const products = await this.shopifyApi.getProductsByCollection(merchant.shop, collectionId);
        if (products.length === 0) {
            await this.metaSender.sendText(senderId, 'Nothing here yet 😔', token, merchant.id, 'instagram');
            return this.handleWelcome(senderId, merchant, token);
        }
        await this.metaSender.sendProductListText(senderId, products, token, merchant.id, 'instagram');
        await this.session.updateContext(sessionKey, 'BROWSING_PRODUCTS', {
            ...context,
            products,
            collectionId,
        });
    }
    async handleProductSelection(senderId, merchant, token, input, context) {
        if (!input.startsWith('SELECT_')) {
            await this.session.reset(`ig_${senderId}_${merchant.id}`);
            return;
        }
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        const index = parseInt(input.replace('SELECT_', ''));
        const products = context.products;
        if (isNaN(index) || !products || !products[index - 1]) {
            return this.metaSender.sendText(senderId, 'Send a number from the list 😊', token, merchant.id, 'instagram');
        }
        const basicProduct = products[index - 1];
        const product = await this.shopifyApi.getProduct(merchant.shop, basicProduct.id);
        const stockStatus = product.available ? '✅ In stock' : '❌ Out of stock';
        const message = `👗 *${product.title}*\n──────────────────\n💰 $${product.price.toFixed(2)}\n${product.description.substring(0, 120)}...\n\n${stockStatus}`;
        if (product.variants.length > 1) {
            const replies = product.variants.slice(0, 13).map((v) => ({
                title: v.title,
                payload: `VAR_${v.id}`,
            }));
            await this.metaSender.sendQuickReplies(senderId, message + '\n\nSelect a variant:', replies, token, merchant.id, 'instagram');
            await this.session.updateContext(sessionKey, 'SELECTING_VARIANT', {
                ...context,
                selectedProduct: product,
            });
        }
        else {
            await this.metaSender.sendButtons(senderId, message, [
                { title: '🛒 Add to Cart', payload: `ADD_${product.id}` },
                { title: '⬅️ Back', payload: 'BACK_PRODUCTS' },
            ], token, merchant.id, 'instagram');
            await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                ...context,
                selectedProduct: product,
            });
        }
    }
    async handleVariantSelection(senderId, merchant, token, input, context) {
        if (!input.startsWith('VAR_')) {
            await this.session.reset(`ig_${senderId}_${merchant.id}`);
            return;
        }
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        const variantId = input.replace('VAR_', '');
        const product = context.selectedProduct;
        const variant = product.variants.find((v) => v.id === variantId);
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
                type: 'postback',
                title: '🛒 Add to Cart',
                payload: `ADD_${variant.id}`,
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
        ], token, merchant.id, 'instagram');
        if (sent) {
            await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                ...context,
                selectedProduct: { ...product, selectedVariant: variant }
            });
            return true;
        }
        return false;
    }
    async handleAddToCart(senderId, merchant, token, input, context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        const productId = input.replace('ADD_', '');
        try {
            const product = await this.shopifyApi.getProduct(merchant.shop, productId);
            if (!product) {
                return this.metaSender.sendText(senderId, '❌ Product not found.', token, merchant.id, 'instagram');
            }
            let cartItem;
            if (product.variants && product.variants.find(v => v.id === productId)) {
                const variant = product.variants.find(v => v.id === productId);
                cartItem = {
                    productId: product.id,
                    variantId: variant.id,
                    productName: `${product.title} - ${variant.title}`,
                    unitPrice: variant.price,
                    quantity: 1,
                };
            }
            else {
                const defaultVariant = product.variants?.[0];
                cartItem = {
                    productId: product.id,
                    variantId: defaultVariant?.id || product.id,
                    productName: product.title,
                    unitPrice: product.price,
                    quantity: 1,
                };
            }
            const cart = this.session.addToCart(context.cart ?? [], cartItem);
            await this.session.updateContext(sessionKey, 'CART', {
                ...context,
                cart,
            });
            return this.showAddedToCart(senderId, merchant, token, cart);
        }
        catch (error) {
            this.logger.error(`Add to cart failed: ${error.message}`);
            return this.metaSender.sendText(senderId, '❌ Failed to add to cart. Please try again.', token, merchant.id, 'instagram');
        }
    }
    async handleProductAction(senderId, merchant, token, input, context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        const product = context.selectedProduct;
        const lowerInput = input.toLowerCase();
        if (['shop', 'yes', 'show', 'buy', 'details'].includes(lowerInput)) {
            return this.showProductDetail(senderId, merchant, token, product, context);
        }
        if (input === 'BACK_PRODUCTS') {
            await this.metaSender.sendProductListText(senderId, context.products, token, merchant.id, 'instagram');
            await this.session.updateContext(sessionKey, 'BROWSING_PRODUCTS', context);
            return;
        }
        if (input.startsWith('ADD_')) {
            return this.handleAddToCart(senderId, merchant, token, input, context);
        }
    }
    async showAddedToCart(senderId, merchant, token, cart) {
        const subtotal = this.session.cartSubtotal(cart);
        const lastItem = cart[cart.length - 1];
        return this.metaSender.sendQuickReplies(senderId, `✅ Added to cart: *${lastItem.productName}*\n🛒 Total: ${cart.length} item(s) — $${subtotal.toFixed(2)}`, [
            { title: '✅ Checkout', payload: 'CHECKOUT' },
            { title: '🛍️ Keep Shopping', payload: 'SHOP_NOW' },
        ], token, merchant.id, 'instagram');
    }
    async handleViewCart(senderId, merchant, token, context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        const cart = context.cart ?? [];
        if (cart.length === 0) {
            return this.metaSender.sendText(senderId, '🛒 Your cart is empty.', token, merchant.id, 'instagram');
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
        ], token, merchant.id, 'instagram');
        await this.session.set(sessionKey, 'CART', context);
    }
    async handleCartAction(senderId, merchant, token, input, _context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        if (input === 'CHECKOUT') {
            await this.session.updateContext(sessionKey, 'CHECKOUT_NAME', {});
            return this.metaSender.sendText(senderId, "📋 What's your full name?", token, merchant.id, 'instagram');
        }
        if (input === 'CLEAR_CART') {
            await this.session.reset(sessionKey);
            return this.metaSender.sendText(senderId, '🗑️ Cart cleared.', token, merchant.id, 'instagram');
        }
        if (input === 'KEEP_SHOPPING') {
            return this.handleWelcome(senderId, merchant, token);
        }
    }
    async handleCheckoutName(senderId, merchant, token, text, context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        if (text.length < 2)
            return this.metaSender.sendText(senderId, '❌ Please enter a valid name:', token, merchant.id, 'instagram');
        await this.session.updateContext(sessionKey, 'CHECKOUT_ADDRESS', {
            ...context,
            buyerName: text,
        });
        return this.metaSender.sendText(senderId, '📍 Your delivery address?', token, merchant.id, 'instagram');
    }
    async handleCheckoutAddress(senderId, merchant, token, text, context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
        if (text.length < 5)
            return this.metaSender.sendText(senderId, '❌ Please enter a valid address:', token, merchant.id, 'instagram');
        await this.session.updateContext(sessionKey, 'CHECKOUT_PAYMENT', {
            ...context,
            deliveryAddress: text,
        });
        return this.metaSender.sendQuickReplies(senderId, 'How would you like to pay?', [
            { title: '💵 Cash on Delivery', payload: 'PAY_COD' },
            { title: '💳 Pay by Card', payload: 'PAY_CARD' },
            { title: '🏦 Bank Transfer', payload: 'PAY_BANK' },
        ], token, merchant.id, 'instagram');
    }
    async handlePaymentSelection(senderId, merchant, token, input, context) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
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
            const text = `🎉 *Order Confirmed!*\n──────────────────\nOrder: #${order.orderNumber}\nTotal: $${order.totalPrice}\nPayment: ${paymentMethod}\nDeliver to: ${context.deliveryAddress}\n──────────────────\nWe'll update you here! 📦`;
            await this.metaSender.sendText(senderId, text, token, merchant.id, 'instagram');
            await this.metaSender.sendQuickReplies(senderId, 'Want to shop more?', [{ title: '🛍️ Shop Again', payload: 'START_OVER' }], token, merchant.id, 'instagram');
            await this.session.set(sessionKey, 'ORDER_COMPLETE', {});
        }
        catch (e) {
            await this.metaSender.sendText(senderId, `❌ Sorry, failed to create order: ${e.message}`, token, merchant.id, 'instagram');
        }
    }
    async showProductDetail(senderId, merchant, token, product, context, customMessage, recipientId) {
        const sessionKey = `ig_${senderId}_${merchant.id}`;
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
                    type: 'postback',
                    title: '🛒 Add to Cart',
                    payload: `ADD_${product.id}`,
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
            ], token, merchant.id, 'instagram', isCommentId);
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
            return this.metaSender.sendButtonTemplate(recipientId, message + '\n\n🎨 *Choose your variant:*', buttons, token, merchant.id, 'instagram', isCommentId);
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
        return this.metaSender.sendQuickReplies(recipientId, fullMessage, replies, token, merchant.id, 'instagram', isCommentId);
    }
};
exports.InstagramBotService = InstagramBotService;
exports.InstagramBotService = InstagramBotService = InstagramBotService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        meta_sender_service_1.MetaSenderService,
        shopify_api_service_1.ShopifyApiService,
        shopify_repository_1.ShopifyRepository,
        bot_session_service_1.BotSessionService,
        config_1.ConfigService])
], InstagramBotService);
//# sourceMappingURL=instagram-bot.service.js.map