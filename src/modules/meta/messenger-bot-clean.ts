import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MetaSenderService } from './meta-sender.service';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { BotSessionService, BotContext } from '../whatsapp/bot-session.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MessengerBotService {
  private readonly logger = new Logger(MessengerBotService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly metaSender: MetaSenderService,
    private readonly shopifyApi: ShopifyApiService,
    private readonly repository: ShopifyRepository,
    private readonly session: BotSessionService,
    private readonly config: ConfigService,
  ) {}

  async showProductDetail(
    senderId: string,
    merchant: any,
    token: string,
    product: any,
    context: BotContext,
    customMessage?: string,
    recipientId?: string,
  ): Promise<boolean> {
    const sessionKey = `msg_${senderId}_${merchant.id}`;
    const targetRecipient = recipientId || senderId;
    const isCommentId = !!recipientId;
    const stockStatus = product.available ? '✅ In stock' : '❌ Out of stock';

    if (product.variants.length > 1) {
      // Create variant selection cards with better UI - exactly like Instagram
      const sent = await this.sendVariantSelection(
        targetRecipient,
        product,
        merchant,
        token,
        customMessage,
        isCommentId,
      );
      if (!sent) {
        return false;
      }
      await this.session.updateContext(sessionKey, 'SELECTING_VARIANT', {
        ...context,
        selectedProduct: product,
      });
      return true;
    } else {
      const productUrl = product.onlineStoreUrl || `https://${merchant.shop}/products/${product.handle}`;
      // Create Shopify cart URL that adds product - user can then checkout
      const buyNowUrl = product.variants?.[0]?.id 
        ? `https://${merchant.shop}/cart/${product.variants[0].id}:1`
        : `https://${merchant.shop}/cart/add?id=${product.variants?.[0]?.id || product.id}&quantity=1`;
      
      const sent = await this.metaSender.sendProductCard(
        targetRecipient,
        {
          title: product.title,
          description: product.description,
          price: product.price,
          imageUrl: product.primaryImage || product.images?.[0],
          productUrl: productUrl,
          id: product.id,
        },
        [
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
        ],
        token,
        merchant.id,
        'messenger',
        isCommentId,
      );
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

  private async sendVariantSelection(
    recipientId: string,
    product: any,
    merchant: any,
    token: string,
    customMessage?: string,
    isCommentId = false,
  ): Promise<boolean> {
    const stockStatus = product.available ? '✅ In stock' : '❌ Out of stock';
    const message = customMessage || 
      `👗 *${product.title}*\n──────────────────\n💰 Starting at $${product.price.toFixed(2)}\n${product.description ? product.description.substring(0, 120) + '...' : ''}\n\n${stockStatus}`;

    // If 3 or fewer variants, show as buttons
    if (product.variants.length <= 3) {
      const buttons = product.variants.map((variant: any) => ({
        type: 'postback' as const,
        title: `${variant.title} - $${variant.price.toFixed(2)}`,
        payload: `VAR_${variant.id}`,
      }));

      return this.metaSender.sendButtonTemplate(
        recipientId,
        message + '\n\n🎨 *Choose your variant:*',
        buttons,
        token,
        merchant.id,
        'messenger',
        isCommentId,
      );
    }

    // For more than 3 variants, use quick replies with better formatting
    const replies = product.variants.slice(0, 13).map((variant: any) => ({
      title: `${variant.title} - $${variant.price.toFixed(2)}`.substring(0, 20),
      payload: `VAR_${variant.id}`,
    }));

    const variantsList = product.variants
      .slice(0, 8) // Show first 8 variants
      .map((v: any, i: number) => 
        `${i + 1}️⃣ *${v.title}* - $${v.price.toFixed(2)} ${v.inventoryQuantity > 0 ? '✅' : '❌'}`
      )
      .join('\n');

    const fullMessage = `${message}\n\n🎨 *Available Variants:*\n${variantsList}\n\n👇 Select your preferred variant:`;

    return this.metaSender.sendQuickReplies(
      recipientId,
      fullMessage,
      replies,
      token,
      merchant.id,
      'messenger',
      isCommentId,
    );
  }
}