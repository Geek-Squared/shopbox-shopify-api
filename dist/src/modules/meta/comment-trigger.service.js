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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CommentTriggerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTriggerService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
const meta_sender_service_1 = require("./meta-sender.service");
const shopify_repository_1 = require("../shopify/shopify.repository");
const shopify_api_service_1 = require("../shopify/shopify-api.service");
const messenger_bot_service_1 = require("./messenger-bot.service");
const bot_session_service_1 = require("../whatsapp/bot-session.service");
let CommentTriggerService = CommentTriggerService_1 = class CommentTriggerService {
    constructor(prisma, metaSender, shopifyRepo, shopifyApi, messengerBot, session) {
        this.prisma = prisma;
        this.metaSender = metaSender;
        this.shopifyRepo = shopifyRepo;
        this.shopifyApi = shopifyApi;
        this.messengerBot = messengerBot;
        this.session = session;
        this.logger = new common_1.Logger(CommentTriggerService_1.name);
    }
    async handleInstagramComment(data) {
        const { merchantId, commentText, commenterId, commenterUsername, mediaId, commentId, instagramToken } = data;
        const triggers = await this.prisma.commentTrigger.findMany({
            where: { merchantId, isActive: true },
        });
        const matchingTrigger = triggers.find(t => t.keyword.trim().length > 0 && commentText.toLowerCase().includes(t.keyword.toLowerCase()));
        if (!matchingTrigger)
            return;
        const existingLog = await this.prisma.commentDmLog.findUnique({
            where: {
                merchantId_commenterId_mediaId: {
                    merchantId,
                    commenterId,
                    mediaId,
                },
            },
        });
        if (existingLog)
            return;
        const merchant = await this.shopifyRepo.findById(merchantId);
        if (!merchant)
            return;
        const isDevelopment = process.env.NODE_ENV !== 'production';
        if (!isDevelopment && merchant.planStatus !== 'ACTIVE') {
            this.logger.warn(`Merchant ${merchant.shop} does not have an active plan. Skipping automation.`);
            return;
        }
        const storeName = merchant.shop.split('.')[0];
        let dmText = matchingTrigger.templateMessage;
        if (!dmText) {
            dmText = `Hi @{{commenter_name}}! 👋\n\nThanks for your interest! We'd love to help you shop.\n\nTap below to browse {{store_name}} and order directly here 👇`;
        }
        dmText = dmText.replace(/{{commenter_name}}/g, commenterUsername || 'there')
            .replace(/{{store_name}}/g, storeName || 'our store');
        const postMapping = await this.prisma.postProductMapping.findUnique({
            where: { merchantId_mediaId: { merchantId, mediaId } },
        });
        if (postMapping && postMapping.isActive) {
            try {
                const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
                if (product) {
                    dmText = this.replaceTemplateVariables(dmText, product);
                }
            }
            catch (e) {
                this.logger.warn(`Could not fetch product for IG variable replacement: ${e.message}`);
            }
        }
        try {
            await this.metaSender.sendText(commenterId, dmText, instagramToken, merchantId, 'instagram');
            await this.metaSender.sendQuickReplies(commenterId, "Select an option:", [
                { title: "🛍️ Browse Store", payload: "START_SHOPPING" },
                { title: "💰 See Prices", payload: "SHOW_PRODUCTS" }
            ], instagramToken, merchantId, 'instagram');
            await this.prisma.commentDmLog.create({
                data: {
                    merchantId,
                    commenterId,
                    mediaId,
                    keyword: matchingTrigger.keyword,
                },
            });
            await this.prisma.commentTrigger.update({
                where: { id: matchingTrigger.id },
                data: { triggerCount: { increment: 1 } },
            });
            if (matchingTrigger.replyComment) {
                const replyUrl = `https://graph.facebook.com/v18.0/${commentId}/replies?access_token=${instagramToken}`;
                await fetch(replyUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: `Hi @${commenterUsername}! Check your DMs 😊` }),
                });
            }
        }
        catch (error) {
            this.logger.error(`Failed to handle IG comment trigger: ${error.message}`);
        }
    }
    async handleFacebookComment(data) {
        const { merchantId, commentText, commenterId, commenterName, postId, commentId, messengerToken } = data;
        if (commentText === undefined)
            return;
        const triggers = await this.prisma.commentTrigger.findMany({
            where: { merchantId, isActive: true },
        });
        const matchingTrigger = triggers.find(t => t.keyword.trim().length > 0 && commentText.toLowerCase().includes(t.keyword.toLowerCase()));
        if (!matchingTrigger) {
            this.logger.debug(`No matching trigger found for keyword "${commentText}"`);
            return;
        }
        const existingLog = await this.prisma.commentDmLog.findUnique({
            where: {
                merchantId_commenterId_mediaId: {
                    merchantId,
                    commenterId,
                    mediaId: postId,
                },
            },
        });
        if (existingLog) {
            this.logger.debug(`DM already sent to ${commenterId} on post ${postId}. Ignored.`);
            return;
        }
        const merchant = await this.shopifyRepo.findById(merchantId);
        if (!merchant)
            return;
        const isDevelopment = process.env.NODE_ENV !== 'production';
        if (!isDevelopment && merchant.planStatus !== 'ACTIVE') {
            this.logger.warn(`Merchant ${merchant.shop} does not have an active plan. Skipping automation.`);
            return;
        }
        const storeName = merchant.shop.split('.')[0];
        const postMapping = await this.prisma.postProductMapping.findUnique({
            where: {
                merchantId_mediaId: { merchantId, mediaId: postId },
            },
        });
        let dmText = matchingTrigger.templateMessage;
        if (!dmText) {
            if (postMapping && postMapping.isActive) {
                dmText = `Hi {{commenter_name}}! 👋 Here's the product you were interested in from our post:`;
            }
            else {
                dmText = `Hi {{commenter_name}}! 👋 Thanks for your interest on our post.\n\nReply "shopping" to browse {{store_name}} and order directly here 👇`;
            }
        }
        dmText = dmText.replace(/{{commenter_name}}/g, commenterName || 'there')
            .replace(/{{store_name}}/g, storeName || 'our store');
        this.logger.debug(`Sending DM with template: "${dmText}"`);
        try {
            const dmUrl = `https://graph.facebook.com/v18.0/me/messages?access_token=${messengerToken}`;
            if (postMapping && postMapping.isActive) {
                this.logger.log(`🎯 Post ${postId} is mapped to product "${postMapping.productTitle}" (${postMapping.shopifyProductId})`);
                let finalDmText = dmText;
                try {
                    const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
                    if (product) {
                        finalDmText = this.replaceTemplateVariables(finalDmText, product);
                    }
                }
                catch (e) {
                    this.logger.warn(`Could not fetch product for variable replacement: ${e.message}`);
                }
                const dmRes = await fetch(dmUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        recipient: { comment_id: commentId },
                        message: {
                            text: finalDmText
                        }
                    })
                });
                if (!dmRes.ok) {
                    const errorText = await dmRes.text();
                    this.logger.error(`Meta Private Reply Error: ${errorText}`);
                }
                else {
                    this.logger.log(`✅ Sent private reply DM for comment ${commentId}`);
                    try {
                        const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
                        if (product) {
                            const sessionKey = `msg_${commenterId}_${merchantId}`;
                            await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                                merchantId,
                                shop: merchant.shop,
                                selectedProduct: product,
                            });
                            await this.messengerBot.showProductDetail(commenterId, merchant, messengerToken, product, { merchantId, shop: merchant.shop });
                            this.logger.log(`🎯 Sent direct product card for "${product.title}" to ${commenterName}`);
                        }
                        else {
                            this.logger.warn(`Product ${postMapping.shopifyProductId} not found in Shopify`);
                        }
                    }
                    catch (productErr) {
                        this.logger.error(`Failed to send product card: ${productErr.message}`);
                    }
                }
            }
            else {
                const dmRes = await fetch(dmUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        recipient: { comment_id: commentId },
                        message: {
                            text: dmText
                        }
                    })
                });
                if (!dmRes.ok) {
                    const errorText = await dmRes.text();
                    this.logger.error(`Meta Private Reply Error: ${errorText}`);
                }
                else {
                    this.logger.log(`✅ Successfully sent private reply DM for comment ${commentId}`);
                }
            }
            await this.prisma.commentDmLog.create({
                data: {
                    merchantId,
                    commenterId,
                    mediaId: postId,
                    keyword: matchingTrigger.keyword,
                },
            });
            await this.prisma.commentTrigger.update({
                where: { id: matchingTrigger.id },
                data: { triggerCount: { increment: 1 } },
            });
            if (matchingTrigger.replyComment) {
                const replyUrl = `https://graph.facebook.com/v18.0/${commentId}/comments?access_token=${messengerToken}`;
                const replyRes = await fetch(replyUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: `Hi ${commenterName}! We just sent you a DM 😊` }),
                });
                if (!replyRes.ok) {
                    const replyError = await replyRes.text();
                    this.logger.error(`Meta Public Reply Error: ${replyError}`);
                }
                else {
                    this.logger.log(`✅ Successfully sent public reply to comment ${commentId}`);
                }
            }
        }
        catch (error) {
            this.logger.error(`Failed to handle FB comment trigger: ${error.message}`);
        }
    }
    async createTrigger(merchantId, data) {
        if (data.keyword.length > 20)
            throw new common_1.ConflictException('Keyword too long (max 20 chars)');
        return this.prisma.commentTrigger.upsert({
            where: {
                merchantId_keyword: {
                    merchantId,
                    keyword: data.keyword.toUpperCase(),
                },
            },
            create: {
                merchantId,
                keyword: data.keyword.toUpperCase(),
                replyComment: data.replyComment ?? true,
                templateMessage: data.templateMessage,
            },
            update: {
                replyComment: data.replyComment ?? true,
                templateMessage: data.templateMessage,
                isActive: true,
            },
        });
    }
    async listTriggers(merchantId) {
        return this.prisma.commentTrigger.findMany({
            where: { merchantId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async updateTrigger(merchantId, triggerId, data) {
        return this.prisma.commentTrigger.update({
            where: { id: triggerId, merchantId },
            data,
        });
    }
    async deleteTrigger(merchantId, triggerId) {
        return this.prisma.commentTrigger.delete({
            where: { id: triggerId, merchantId },
        });
    }
    async getTriggerStats(merchantId) {
        const totalTriggers = await this.prisma.commentTrigger.count({ where: { merchantId } });
        const totalDms = await this.prisma.commentDmLog.count({ where: { merchantId } });
        const totalOrders = await this.prisma.order.count({
            where: { sellerId: merchantId, notes: { contains: 'Instagram' } }
        });
        return {
            totalTriggers,
            totalDmsSent: totalDms,
            totalOrdersFromIg: totalOrders,
            conversionRate: totalDms > 0 ? (totalOrders / totalDms) * 100 : 0
        };
    }
    replaceTemplateVariables(template, product) {
        if (!template)
            return '';
        return template
            .replace(/{{product_name}}/g, product.title || '')
            .replace(/{{price}}/g, `$${product.price ? product.price.toFixed(2) : '0.00'}`)
            .replace(/{{currency}}/g, 'USD')
            .replace(/{{link}}/g, product.onlineStoreUrl || '');
    }
};
exports.CommentTriggerService = CommentTriggerService;
exports.CommentTriggerService = CommentTriggerService = CommentTriggerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(4, (0, common_1.Inject)((0, common_1.forwardRef)(() => messenger_bot_service_1.MessengerBotService))),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        meta_sender_service_1.MetaSenderService,
        shopify_repository_1.ShopifyRepository,
        shopify_api_service_1.ShopifyApiService,
        messenger_bot_service_1.MessengerBotService,
        bot_session_service_1.BotSessionService])
], CommentTriggerService);
//# sourceMappingURL=comment-trigger.service.js.map