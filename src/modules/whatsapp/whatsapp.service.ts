import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';

// ─── Types ────────────────────────────────────────────────────────────────────

interface TextMessage {
  to: string;
  body: string;
}

interface ListRow {
  id: string;
  title: string;
  description?: string;
}

interface ListSection {
  title: string;
  rows: ListRow[];
}

interface ButtonOption {
  id: string;
  title: string;
}

// ─── Service ──────────────────────────────────────────────────────────────────

@Injectable()
export class WhatsappService {
  private readonly logger = new Logger(WhatsappService.name);
  private readonly apiUrl: string;
  private readonly token: string;

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const phoneId = this.config.get<string>('WHATSAPP_PHONE_ID');
    this.token = this.config.get<string>('WHATSAPP_TOKEN') ?? '';
    this.apiUrl = `https://graph.facebook.com/v25.0/${phoneId}/messages`;
  }

  // ─── CORE SEND ─────────────────────────────────────────────────────────────

  public async send(payload: object, meta?: {
    sellerId?: string;
    storeId?: string;
    orderId?: string;
    toNumber?: string;
  }): Promise<void> {
    try {
      this.logger.debug(
        `[WhatsApp API] Sending message using version: ${this.apiUrl.split('/')[3]}`,
      );
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
        this.logger.error(
          `WhatsApp API error: ${JSON.stringify(errorData)} (Status: ${res.status})`,
        );
        throw new Error(errorData.error?.message || 'Failed to send WhatsApp message');
      }

      const responseData = await res.json();
      this.logger.log(
        `✅ WhatsApp message sent successfully! ID: ${responseData.messages?.[0]?.id}`,
      );

      // Log outbound message
      if (meta?.toNumber) {
        await this.logMessage({
          direction: 'OUTBOUND',
          toNumber: meta.toNumber,
          content: JSON.stringify(payload),
          status: 'sent',
          sellerId: meta.sellerId,
          storeId: meta.storeId,
          orderId: meta.orderId,
        }).catch(() => {}); // Non-blocking log
      }
    } catch (err) {
      this.logger.error(`Failed to send WhatsApp message: ${err}`);
      throw err;
    }
  }

  // ─── TEXT ──────────────────────────────────────────────────────────────────

  async sendText(
    to: string,
    message: string,
    meta?: { sellerId?: string; storeId?: string; orderId?: string },
  ) {
    return this.send(
      {
        messaging_product: 'whatsapp',
        recipient_type: 'individual',
        to: this.formatPhone(to),
        type: 'text',
        text: { body: message, preview_url: false },
      },
      { toNumber: to, ...meta },
    );
  }

  // ─── INTERACTIVE LIST (up to 10 options) ───────────────────────────────────

  async sendList(
    to: string,
    header: string,
    body: string,
    buttonText: string,
    sections: ListSection[],
    meta?: { sellerId?: string; storeId?: string; orderId?: string },
  ) {
    return this.send(
      {
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
      },
      { toNumber: to, ...meta },
    );
  }

  // ─── INTERACTIVE BUTTONS (up to 3) ─────────────────────────────────────────

  async sendButtons(
    to: string,
    body: string,
    buttons: ButtonOption[],
    meta?: { sellerId?: string; storeId?: string; orderId?: string },
  ) {
    return this.send(
      {
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
      },
      { toNumber: to, ...meta },
    );
  }

  // ─── NOTIFICATION TEMPLATES ────────────────────────────────────────────────

  async sendOTP(phone: string, code: string, purpose: string) {
    const message =
      `🔐 *ShopBoxx Verification*\n\n` +
      `Your ${purpose} code is:\n\n` +
      `*${code}*\n\n` +
      `_Expires in 10 minutes. Do not share this code._`;
    return this.sendText(phone, message);
  }

  async notifySellerNewOrder(
    sellerPhone: string,
    orderNumber: string,
    buyerName: string,
    itemsSummary: string,
    total: number,
    paymentMethod: string,
    meta?: { sellerId?: string; storeId?: string; orderId?: string },
  ) {
    const dashboardUrl =
      this.config.get<string>('DASHBOARD_URL') ?? 'https://app.shopboxx.africa';

    const message =
      `🛍️ *New Order!* #${orderNumber || '----'}\n` +
      `──────────────────\n` +
      `👤 Customer: ${buyerName}\n` +
      `📦 Items: ${itemsSummary}\n` +
      `💰 Total: $${total.toFixed(2)}\n` +
      `💳 Payment: ${paymentMethod}\n` +
      `──────────────────\n` +
      `Open your dashboard: ${dashboardUrl}?ref=whatsapp`;

    return this.sendText(sellerPhone, message, meta);
  }

  async notifyBuyerOrderConfirmed(
    buyerPhone: string,
    orderNumber: string,
    storeName: string,
    total: number,
    deliveryCode: string,
    storeSlug: string,
    meta?: { orderId?: string },
  ) {
    const storefrontUrl =
      this.config.get<string>('STOREFRONT_URL') ?? 'https://store.shopboxx.africa';

    const trackUrl =
      `${storefrontUrl}/store/${storeSlug}` +
      `?order=${orderNumber}&ref=notification`;

    const message =
      `✅ *Order Confirmed!*\n` +
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

  async notifyBuyerOutForDelivery(
    buyerPhone: string,
    orderNumber: string,
    riderName: string,
    riderPhone: string,
    deliveryCode: string,
    meta?: { orderId?: string },
  ) {
    const message =
      `🛵 *Your order is on the way!*\n` +
      `──────────────────\n` +
      `Order: #${orderNumber}\n` +
      `Rider: ${riderName}\n` +
      `Rider Phone: ${riderPhone}\n` +
      `──────────────────\n` +
      `🔐 Delivery Code: *${deliveryCode}*\n` +
      `_Show this to the rider on arrival._`;
    return this.sendText(buyerPhone, message, meta);
  }

  async notifyBuyerDelivered(
    buyerPhone: string,
    orderNumber: string,
    meta?: { orderId?: string },
  ) {
    const message =
      `🎉 *Order Delivered!*\n\n` +
      `Order #${orderNumber} has been delivered.\n\n` +
      `Thank you for shopping! 🙏`;
    return this.sendText(buyerPhone, message, meta);
  }

  async notifyRiderNewJob(
    riderPhone: string,
    deliveryId: string,
    pickupAddress: string,
    dropoffAddress: string,
    distanceKm: number,
    earnUsd: number,
  ) {
    const message =
      `🛵 *New Delivery Job!*\n` +
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

  // ─── WEBHOOK VERIFICATION ──────────────────────────────────────────────────

  verifyWebhookSignature(payload: string, signature: string): boolean {
    const crypto = require('crypto');
    const appSecret = this.config.get<string>('WHATSAPP_APP_SECRET') ?? '';
    const expected = crypto
      .createHmac('sha256', appSecret)
      .update(payload)
      .digest('hex');

    try {
      return crypto.timingSafeEqual(
        Buffer.from(signature.replace('sha256=', ''), 'hex'),
        Buffer.from(expected, 'hex'),
      );
    } catch {
      return false;
    }
  }

  getVerifyToken(): string {
    return this.config.get<string>('WHATSAPP_VERIFY_TOKEN') ?? '';
  }

  // ─── MESSAGE PARSING ───────────────────────────────────────────────────────

  parseIncomingMessage(body: any): {
    from: string;
    type: string;
    text?: string;
    interactiveId?: string;
    messageId: string;
  } | null {
    try {
      const message = body?.entry?.[0]?.changes?.[0]?.value?.messages?.[0];
      if (!message) return null;

      const interactiveId =
        message.interactive?.button_reply?.id ||
        message.interactive?.list_reply?.id ||
        undefined;

      return {
        from: message.from,
        type: message.type,
        text: message.text?.body,
        interactiveId,
        messageId: message.id,
      };
    } catch {
      return null;
    }
  }

  isStatusUpdate(body: any): boolean {
    return !!body?.entry?.[0]?.changes?.[0]?.value?.statuses;
  }

  // ─── LOGGING ───────────────────────────────────────────────────────────────

  async logMessage(data: {
    direction: 'INBOUND' | 'OUTBOUND';
    fromNumber?: string;
    toNumber?: string;
    content: string;
    status?: string;
    sellerId?: string;
    storeId?: string;
    orderId?: string;
  }) {
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

  // ─── UTILS ─────────────────────────────────────────────────────────────────

  formatPhone(phone: string): string {
    let cleaned = phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
    // Zimbabwe: replace leading 0 with 263
    if (cleaned.startsWith('0')) {
      cleaned = '263' + cleaned.slice(1);
    }
    if (cleaned.startsWith('+')) {
      cleaned = cleaned.slice(1);
    }
    return cleaned;
  }
}