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
//# sourceMappingURL=messenger-bot-clean.js.map