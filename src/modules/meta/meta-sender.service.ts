import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyRepository } from '../shopify/shopify.repository';

type MetaTemplateButton =
  | { type: 'postback'; title: string; payload: string }
  | { type: 'web_url'; title: string; url: string };

@Injectable()
export class MetaSenderService {
  private readonly logger = new Logger(MetaSenderService.name);
  private readonly baseUrl = 'https://graph.facebook.com/v25.0/me/messages';

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
    private readonly repository: ShopifyRepository,
  ) {}

  private async parseResponseBody(response: Response): Promise<any> {
    const rawBody = await response.text();
    if (!rawBody.trim()) {
      return null;
    }

    try {
      return JSON.parse(rawBody);
    } catch {
      return { rawBody };
    }
  }

  private extractTextFromMessage(message: any): string | null {
    const text = message?.message?.text;
    if (typeof text !== 'string') {
      return null;
    }

    const trimmed = text.trim();
    if (!trimmed) {
      return null;
    }

    // Keep private replies compact; oversized payloads are rejected more often.
    return trimmed.substring(0, 500);
  }

  private async sendCommentPrivateReply(
    token: string,
    commentId: string,
    text: string,
    channel: 'messenger' | 'instagram',
  ): Promise<boolean> {
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

  async sendToMeta(
    token: string,
    recipientId: string,
    message: object,
    merchantId: string,
    channel: 'messenger' | 'instagram',
    isCommentId = false,
    retryCount = 0,
  ): Promise<boolean> {
    try {
      if (isCommentId) {
        const text = this.extractTextFromMessage(message);
        if (text) {
          const privateReplySent = await this.sendCommentPrivateReply(
            token,
            recipientId,
            text,
            channel,
          );
          if (privateReplySent) {
            return true;
          }

          // Fallback for environments where private_replies edge is unavailable.
          this.logger.warn(
            `Private reply edge failed for ${recipientId}. Falling back to Send API comment_id recipient.`,
          );
        } else {
          this.logger.warn(
            `Skipping private reply edge for ${recipientId}: only plain text private replies are supported.`,
          );
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

        // Error 190: Access token has expired
        if (error.code === 190) {
          const updateData =
            channel === 'messenger'
              ? { messengerConnected: false, messengerToken: null }
              : { instagramConnected: false, instagramToken: null };
          
          await this.prisma.shopifyMerchant.update({
            where: { id: merchantId },
            data: updateData,
          });
          this.logger.warn(`Token expired for merchant ${merchantId}. Channel ${channel} disconnected.`);
        }

        // Error 613: Rate limit
        if (error.code === 613 && retryCount < 1) {
          this.logger.warn(`Rate limit hit for ${channel}, retrying once in 1s...`);
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return this.sendToMeta(
            token,
            recipientId,
            message,
            merchantId,
            channel,
            isCommentId,
            retryCount + 1,
          );
        }

        // Error 100: Cannot message user
        if (error.code === 100) {
          this.logger.debug(`Cannot message user ${recipientId} on ${channel} (likely outside 24h window).`);
          return false;
        }

        return false;
      }

      // Disable logging Meta messages to Whatsapp table for now to avoid FK crash
      // await this.prisma.whatsappMessage.create({
      //   data: {
      //     direction: 'OUTBOUND',
      //     toNumber: recipientId,
      //     content: JSON.stringify(message),
      //     sellerId: merchantId,
      //     status: 'sent',
      //   },
      // });
      return true;
    } catch (error) {
      this.logger.error(`Failed to send ${channel} message: ${error.message}`);
      return false;
    }
  }

  async sendText(
    recipientId: string,
    text: string,
    token: string,
    merchantId: string,
    channel: 'messenger' | 'instagram',
    isCommentId = false,
  ) {
    return this.sendToMeta(token, recipientId, { message: { text } }, merchantId, channel, isCommentId);
  }

  async sendImage(
    recipientId: string,
    imageUrl: string,
    token: string,
    merchantId: string,
    channel: 'messenger' | 'instagram',
    isCommentId = false,
  ) {
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

  async sendQuickReplies(
    recipientId: string,
    text: string,
    replies: { title: string; payload: string }[],
    token: string,
    merchantId: string,
    channel: 'messenger' | 'instagram',
    isCommentId = false,
  ) {
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

  async sendButtons(
    recipientId: string,
    text: string,
    buttons: { title: string; payload: string }[],
    token: string,
    merchantId: string,
    channel: 'messenger' | 'instagram',
    isCommentId = false,
  ) {
    return this.sendButtonTemplate(
      recipientId,
      text,
      buttons.map((button) => ({
        type: 'postback' as const,
        title: button.title,
        payload: button.payload,
      })),
      token,
      merchantId,
      channel,
      isCommentId,
    );
  }

  async sendButtonTemplate(
    recipientId: string,
    text: string,
    buttons: MetaTemplateButton[],
    token: string,
    merchantId: string,
    channel: 'messenger' | 'instagram',
    isCommentId = false,
  ) {
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

  async sendCarousel(
    recipientId: string,
    cards: {
      title: string;
      subtitle: string;
      imageUrl: string;
      productId: string;
    }[],
    token: string,
    merchantId: string,
  ) {
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
    // Messenger Only
    return this.sendToMeta(token, recipientId, message, merchantId, 'messenger');
  }

  async sendReceipt(
    recipientId: string,
    order: {
      buyerName: string;
      orderNumber: string;
      items: { name: string; qty: number; price: number; imageUrl?: string }[];
      subtotal: number;
      shipping: number;
      total: number;
      paymentMethod: string;
    },
    token: string,
    merchantId: string,
  ) {
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
    // Messenger Only
    return this.sendToMeta(token, recipientId, message, merchantId, 'messenger');
  }

  async sendProductListText(
    recipientId: string,
    products: { title: string; price: number; inventoryQuantity: number }[],
    token: string,
    merchantId: string,
    channel: 'instagram' | 'messenger',
  ) {
    let text = "Here's what we have:\n\n";
    const numbers = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'];
    const replies: { title: string; payload: string }[] = [];

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

  async sendTypingOn(recipientId: string, token: string, channel: 'messenger' | 'instagram') {
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

  async setupPersistentMenu(pageToken: string) {
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

  async setupGetStarted(pageToken: string) {
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
}
