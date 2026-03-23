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
var WhatsappService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../../prisma/prisma.service");
let WhatsappService = WhatsappService_1 = class WhatsappService {
    constructor(config, prisma) {
        this.config = config;
        this.prisma = prisma;
        this.logger = new common_1.Logger(WhatsappService_1.name);
        const phoneId = this.config.get('WHATSAPP_PHONE_ID');
        this.token = this.config.get('WHATSAPP_TOKEN') ?? '';
        this.apiUrl = `https://graph.facebook.com/v25.0/${phoneId}/messages`;
    }
    async send(payload, meta) {
        try {
            this.logger.debug(`[WhatsApp API] Sending message using version: ${this.apiUrl.split('/')[3]}`);
            this.logger.debug(`[WA] Sending to ${meta?.toNumber}: ${JSON.stringify(payload)}`);
            const res = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${this.token}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                const errorData = await res.json();
                this.logger.error(`WhatsApp API error: ${JSON.stringify(errorData)} (Status: ${res.status})`);
                throw new Error(errorData.error?.message || 'Failed to send WhatsApp message');
            }
            const responseData = await res.json();
            this.logger.log(`✅ WhatsApp message sent successfully! ID: ${responseData.messages?.[0]?.id}`);
            if (meta?.toNumber) {
                await this.logMessage({
                    direction: 'OUTBOUND',
                    toNumber: meta.toNumber,
                    content: JSON.stringify(payload),
                    status: 'sent',
                    sellerId: meta.sellerId,
                    storeId: meta.storeId,
                    orderId: meta.orderId,
                }).catch(() => { });
            }
        }
        catch (err) {
            this.logger.error(`Failed to send WhatsApp message: ${err}`);
            throw err;
        }
    }
    async sendText(to, message, meta) {
        return this.send({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: this.formatPhone(to),
            type: 'text',
            text: { body: message, preview_url: false },
        }, { toNumber: to, ...meta });
    }
    async sendList(to, header, body, buttonText, sections, meta) {
        return this.send({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: this.formatPhone(to),
            type: 'interactive',
            interactive: {
                type: 'list',
                header: { type: 'text', text: header },
                body: { text: body },
                action: { button: buttonText, sections },
            },
        }, { toNumber: to, ...meta });
    }
    async sendButtons(to, body, buttons, meta) {
        return this.send({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: this.formatPhone(to),
            type: 'interactive',
            interactive: {
                type: 'button',
                body: { text: body },
                action: {
                    buttons: buttons.map((b) => ({
                        type: 'reply',
                        reply: { id: b.id, title: b.title },
                    })),
                },
            },
        }, { toNumber: to, ...meta });
    }
    async sendOTP(phone, code, purpose) {
        const message = `🔐 *ShopBoxx Verification*\n\n` +
            `Your ${purpose} code is:\n\n` +
            `*${code}*\n\n` +
            `_Expires in 10 minutes. Do not share this code._`;
        return this.sendText(phone, message);
    }
    async notifySellerNewOrder(sellerPhone, orderNumber, buyerName, itemsSummary, total, paymentMethod, meta) {
        const dashboardUrl = this.config.get('DASHBOARD_URL') ?? 'https://app.shopboxx.africa';
        const message = `🛍️ *New Order!* #${orderNumber || '----'}\n` +
            `──────────────────\n` +
            `👤 Customer: ${buyerName}\n` +
            `📦 Items: ${itemsSummary}\n` +
            `💰 Total: $${total.toFixed(2)}\n` +
            `💳 Payment: ${paymentMethod}\n` +
            `──────────────────\n` +
            `Open your dashboard: ${dashboardUrl}?ref=whatsapp`;
        return this.sendText(sellerPhone, message, meta);
    }
    async notifyBuyerOrderConfirmed(buyerPhone, orderNumber, storeName, total, deliveryCode, storeSlug, meta) {
        const storefrontUrl = this.config.get('STOREFRONT_URL') ?? 'https://store.shopboxx.africa';
        const trackUrl = `${storefrontUrl}/store/${storeSlug}` +
            `?order=${orderNumber}&ref=notification`;
        const message = `✅ *Order Confirmed!*\n` +
            `──────────────────\n` +
            `Order: #${orderNumber}\n` +
            `Store: ${storeName}\n` +
            `Total: $${total.toFixed(2)}\n` +
            `──────────────────\n` +
            `🔐 Delivery Code: *${deliveryCode}*\n\n` +
            `_Show this code to the rider._\n\n` +
            `Track your order: ${trackUrl}`;
        return this.sendText(buyerPhone, message, meta);
    }
    async notifyBuyerOutForDelivery(buyerPhone, orderNumber, riderName, riderPhone, deliveryCode, meta) {
        const message = `🛵 *Your order is on the way!*\n` +
            `──────────────────\n` +
            `Order: #${orderNumber}\n` +
            `Rider: ${riderName}\n` +
            `Rider Phone: ${riderPhone}\n` +
            `──────────────────\n` +
            `🔐 Delivery Code: *${deliveryCode}*\n` +
            `_Show this to the rider on arrival._`;
        return this.sendText(buyerPhone, message, meta);
    }
    async notifyBuyerDelivered(buyerPhone, orderNumber, meta) {
        const message = `🎉 *Order Delivered!*\n\n` +
            `Order #${orderNumber} has been delivered.\n\n` +
            `Thank you for shopping! 🙏`;
        return this.sendText(buyerPhone, message, meta);
    }
    async notifyRiderNewJob(riderPhone, deliveryId, pickupAddress, dropoffAddress, distanceKm, earnUsd) {
        const message = `🛵 *New Delivery Job!*\n` +
            `──────────────────\n` +
            `📍 Pickup: ${pickupAddress}\n` +
            `📍 Drop-off: ${dropoffAddress}\n` +
            `📏 Distance: ${distanceKm}km\n` +
            `💰 You earn: $${earnUsd.toFixed(2)}\n` +
            `──────────────────\n` +
            `Reply *YES* to accept\n` +
            `Reply *NO* to skip`;
        return this.sendText(riderPhone, message);
    }
    verifyWebhookSignature(payload, signature) {
        const crypto = require('crypto');
        const appSecret = this.config.get('WHATSAPP_APP_SECRET') ?? '';
        const expected = crypto
            .createHmac('sha256', appSecret)
            .update(payload)
            .digest('hex');
        try {
            return crypto.timingSafeEqual(Buffer.from(signature.replace('sha256=', ''), 'hex'), Buffer.from(expected, 'hex'));
        }
        catch {
            return false;
        }
    }
    getVerifyToken() {
        return this.config.get('WHATSAPP_VERIFY_TOKEN') ?? '';
    }
    parseIncomingMessage(body) {
        try {
            const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
            if (!message)
                return null;
            const interactiveId = message.interactive?.button_reply?.id ||
                message.interactive?.list_reply?.id ||
                undefined;
            return {
                from: message.from,
                type: message.type,
                text: message.text?.body,
                interactiveId,
                messageId: message.id,
            };
        }
        catch {
            return null;
        }
    }
    isStatusUpdate(body) {
        return !!body?.entry?.[0]?.changes?.[0]?.value?.statuses;
    }
    async logMessage(data) {
        return this.prisma.whatsappMessage.create({
            data: {
                direction: data.direction,
                fromNumber: data.fromNumber,
                toNumber: data.toNumber,
                content: data.content,
                status: data.status,
                sellerId: data.sellerId,
                storeId: data.storeId,
                orderId: data.orderId,
            },
        });
    }
    formatPhone(phone) {
        let cleaned = phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
        if (cleaned.startsWith('0')) {
            cleaned = '263' + cleaned.slice(1);
        }
        if (cleaned.startsWith('+')) {
            cleaned = cleaned.slice(1);
        }
        return cleaned;
    }
};
exports.WhatsappService = WhatsappService;
exports.WhatsappService = WhatsappService = WhatsappService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        prisma_service_1.PrismaService])
], WhatsappService);
//# sourceMappingURL=whatsapp.service.js.map