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
var MetaSenderService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaSenderService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
const shopify_repository_1 = require("../shopify/shopify.repository");
let MetaSenderService = MetaSenderService_1 = class MetaSenderService {
    constructor(config, prisma, repository) {
        this.config = config;
        this.prisma = prisma;
        this.repository = repository;
        this.logger = new common_1.Logger(MetaSenderService_1.name);
        this.baseUrl = 'https://graph.facebook.com/v25.0/me/messages';
    }
    async parseResponseBody(response) {
        const rawBody = await response.text();
        if (!rawBody.trim()) {
            return null;
        }
        try {
            return JSON.parse(rawBody);
        }
        catch {
            return { rawBody };
        }
    }
    extractTextFromMessage(message) {
        const text = message?.message?.text;
        if (typeof text !== 'string') {
            return null;
        }
        const trimmed = text.trim();
        if (!trimmed) {
            return null;
        }
        return trimmed.substring(0, 500);
    }
    async sendCommentPrivateReply(token, commentId, text, channel) {
        const idCandidates = [commentId];
        if (commentId.includes('_')) {
            const trailingId = commentId.split('_').pop();
            if (trailingId && trailingId !== commentId) {
                idCandidates.push(trailingId);
            }
        }
        for (const candidateId of idCandidates) {
            const url = `https://graph.facebook.com/v25.0/${candidateId}/private_replies?access_token=${token}`;
            const body = new URLSearchParams({ message: text });
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body,
            });
            const data = await this.parseResponseBody(response);
            if (response.ok) {
                return true;
            }
            const error = data?.error ?? {
                code: response.status,
                message: typeof data?.rawBody === 'string' ? data.rawBody : response.statusText,
            };
            this.logger.error(`Meta private reply error (${channel}): ${JSON.stringify(error)}`);
        }
        return false;
    }
    async sendToMeta(token, recipientId, message, merchantId, channel, isCommentId = false, retryCount = 0) {
        try {
            if (isCommentId) {
                const text = this.extractTextFromMessage(message);
                if (text) {
                    const privateReplySent = await this.sendCommentPrivateReply(token, recipientId, text, channel);
                    if (privateReplySent) {
                        return true;
                    }
                    this.logger.warn(`Private reply edge failed for ${recipientId}. Falling back to Send API comment_id recipient.`);
                }
                else {
                    this.logger.warn(`Skipping private reply edge for ${recipientId}: only plain text private replies are supported.`);
                }
            }
            const url = `${this.baseUrl}?access_token=${token}`;
            const payload = {
                recipient: isCommentId ? { comment_id: recipientId } : { id: recipientId },
                ...message,
            };
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await this.parseResponseBody(response);
            if (!response.ok) {
                const error = data?.error ?? {
                    code: response.status,
                    message: typeof data?.rawBody === 'string' ? data.rawBody : response.statusText,
                };
                this.logger.error(`Meta API Error (${channel}): ${JSON.stringify(error)}`);
                if (error.code === 190) {
                    const updateData = channel === 'messenger'
                        ? { messengerConnected: false, messengerToken: null }
                        : { instagramConnected: false, instagramToken: null };
                    await this.prisma.shopifyMerchant.update({
                        where: { id: merchantId },
                        data: updateData,
                    });
                    this.logger.warn(`Token expired for merchant ${merchantId}. Channel ${channel} disconnected.`);
                }
                if (error.code === 613 && retryCount < 1) {
                    this.logger.warn(`Rate limit hit for ${channel}, retrying once in 1s...`);
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                    return this.sendToMeta(token, recipientId, message, merchantId, channel, isCommentId, retryCount + 1);
                }
                if (error.code === 100) {
                    this.logger.debug(`Cannot message user ${recipientId} on ${channel} (likely outside 24h window).`);
                    return false;
                }
                return false;
            }
            return true;
        }
        catch (error) {
            this.logger.error(`Failed to send ${channel} message: ${error.message}`);
            return false;
        }
    }
    async sendText(recipientId, text, token, merchantId, channel, isCommentId = false) {
        return this.sendToMeta(token, recipientId, { message: { text } }, merchantId, channel, isCommentId);
    }
    async sendImage(recipientId, imageUrl, token, merchantId, channel, isCommentId = false) {
        const message = {
            message: {
                attachment: {
                    type: 'image',
                    payload: { url: imageUrl, is_reusable: true },
                },
            },
        };
        return this.sendToMeta(token, recipientId, message, merchantId, channel, isCommentId);
    }
    async sendQuickReplies(recipientId, text, replies, token, merchantId, channel, isCommentId = false) {
        const message = {
            message: {
                text,
                quick_replies: replies.slice(0, 13).map((r) => ({
                    content_type: 'text',
                    title: r.title.substring(0, 20),
                    payload: r.payload,
                })),
            },
        };
        return this.sendToMeta(token, recipientId, message, merchantId, channel, isCommentId);
    }
    async sendButtons(recipientId, text, buttons, token, merchantId, channel, isCommentId = false) {
        return this.sendButtonTemplate(recipientId, text, buttons.map((button) => ({
            type: 'postback',
            title: button.title,
            payload: button.payload,
        })), token, merchantId, channel, isCommentId);
    }
    async sendButtonTemplate(recipientId, text, buttons, token, merchantId, channel, isCommentId = false) {
        const message = {
            message: {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'button',
                        text,
                        buttons: buttons.slice(0, 3).map((button) => {
                            if (button.type === 'web_url') {
                                return {
                                    type: 'web_url',
                                    title: button.title.substring(0, 20),
                                    url: button.url,
                                };
                            }
                            return {
                                type: 'postback',
                                title: button.title.substring(0, 20),
                                payload: button.payload,
                            };
                        }),
                    },
                },
            },
        };
        return this.sendToMeta(token, recipientId, message, merchantId, channel, isCommentId);
    }
    async sendCarousel(recipientId, cards, token, merchantId) {
        const message = {
            message: {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'generic',
                        elements: cards.slice(0, 10).map((c) => ({
                            title: c.title.substring(0, 80),
                            subtitle: c.subtitle.substring(0, 80),
                            image_url: c.imageUrl,
                            buttons: [
                                {
                                    type: 'postback',
                                    title: '🛒 Add to Cart',
                                    payload: `ADD_${c.productId}`,
                                },
                                {
                                    type: 'postback',
                                    title: '👁️ View',
                                    payload: `VIEW_${c.productId}`,
                                },
                            ],
                        })),
                    },
                },
            },
        };
        return this.sendToMeta(token, recipientId, message, merchantId, 'messenger');
    }
    async sendReceipt(recipientId, order, token, merchantId) {
        const message = {
            message: {
                attachment: {
                    type: 'template',
                    payload: {
                        template_type: 'receipt',
                        recipient_name: order.buyerName,
                        order_number: order.orderNumber,
                        currency: 'USD',
                        payment_method: order.paymentMethod,
                        timestamp: Math.floor(Date.now() / 1000).toString(),
                        elements: order.items.map((i) => ({
                            title: i.name,
                            subtitle: '',
                            quantity: i.qty,
                            price: i.price,
                            currency: 'USD',
                            image_url: i.imageUrl,
                        })),
                        summary: {
                            subtotal: order.subtotal,
                            shipping_cost: order.shipping,
                            total_cost: order.total,
                        },
                    },
                },
            },
        };
        return this.sendToMeta(token, recipientId, message, merchantId, 'messenger');
    }
    async sendProductListText(recipientId, products, token, merchantId, channel) {
        let text = "Here's what we have:\n\n";
        const numbers = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
        const replies = [];
        products.slice(0, 10).forEach((p, i) => {
            text += `${numbers[i]} *${p.title}* — $${p.price.toFixed(2)}\n`;
            text += p.inventoryQuantity > 0
                ? `   ✅ In stock\n\n`
                : `   ❌ Out of stock\n\n`;
            replies.push({ title: (i + 1).toString(), payload: `SELECT_${i + 1}` });
        });
        text += "Reply with a number to view details 👇";
        await this.sendText(recipientId, text, token, merchantId, channel);
        return this.sendQuickReplies(recipientId, 'Select an item:', replies, token, merchantId, channel);
    }
    async sendTypingOn(recipientId, token, channel) {
        const url = `${this.baseUrl}?access_token=${token}`;
        const payload = {
            recipient: { id: recipientId },
            sender_action: 'typing_on',
        };
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        }).catch((e) => this.logger.error(`Error sending typing_on: ${e.message}`));
    }
    async setupPersistentMenu(pageToken) {
        const url = `https://graph.facebook.com/v25.0/me/messenger_profile?access_token=${pageToken}`;
        const body = {
            persistent_menu: [
                {
                    locale: 'default',
                    composer_input_disabled: false,
                    call_to_actions: [
                        { type: 'postback', title: '🛍️ Shop Now', payload: 'SHOP_NOW' },
                        { type: 'postback', title: '🛒 My Cart', payload: 'VIEW_CART' },
                        { type: 'postback', title: '📦 My Orders', payload: 'MY_ORDERS' },
                        { type: 'postback', title: '🔄 Start Over', payload: 'START_OVER' },
                    ],
                },
            ],
        };
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }
    async setupGetStarted(pageToken) {
        const url = `https://graph.facebook.com/v25.0/me/messenger_profile?access_token=${pageToken}`;
        const body = {
            get_started: { payload: 'GET_STARTED' },
            greeting: [
                {
                    locale: 'default',
                    text: 'Welcome! Browse and shop directly here in chat 🛍️',
                },
            ],
        };
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
    }
};
exports.MetaSenderService = MetaSenderService;
exports.MetaSenderService = MetaSenderService = MetaSenderService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService,
        shopify_repository_1.ShopifyRepository])
], MetaSenderService);
//# sourceMappingURL=meta-sender.service.js.map