import { Injectable, Logger, ConflictException, NotFoundException, forwardRef, Inject } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MetaSenderService } from './meta-sender.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { MessengerBotService } from './messenger-bot.service';
import { BotSessionService } from '../whatsapp/bot-session.service';

@Injectable()
export class CommentTriggerService {
  private readonly logger = new Logger(CommentTriggerService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly metaSender: MetaSenderService,
    private readonly shopifyRepo: ShopifyRepository,
    private readonly shopifyApi: ShopifyApiService,
    @Inject(forwardRef(() => MessengerBotService))
    private readonly messengerBot: MessengerBotService,
    private readonly session: BotSessionService,
  ) {}

  async handleInstagramComment(data: {
    merchantId: string;
    commentText: string;
    commenterId: string;
    commenterUsername: string;
    mediaId: string;
    commentId: string;
    instagramToken: string;
  }) {
    const { merchantId, commentText, commenterId, commenterUsername, mediaId, commentId, instagramToken } = data;

    // Find active triggers for merchant
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId, isActive: true },
    });

    const matchingTrigger = triggers.find(t => 
      t.keyword.trim().length > 0 && commentText.toLowerCase().includes(t.keyword.toLowerCase())
    );

    if (!matchingTrigger) return;

    // Duplication check (prevent spam)
    const existingLog = await this.prisma.commentDmLog.findUnique({
      where: {
        merchantId_commenterId_mediaId: {
          merchantId,
          commenterId,
          mediaId,
        },
      },
    });

    if (existingLog) return;

    // Get merchant for store info
    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) return;

    // Check for Active Plan (Mandatory for Shopify)
    const isDevelopment = process.env.NODE_ENV !== 'production';
    if (!isDevelopment && merchant.planStatus !== 'ACTIVE') {
       this.logger.warn(`Merchant ${merchant.shop} does not have an active plan. Skipping automation.`);
       return;
    }

    const storeName = merchant.shop.split('.')[0];

    // Prepare custom message
    let dmText = matchingTrigger.templateMessage;
    if (!dmText) {
      dmText = `Hi @{{commenter_name}}! 👋\n\nThanks for your interest! We'd love to help you shop.\n\nTap below to browse {{store_name}} and order directly here 👇`;
    }

    // Replace basic variables
    dmText = dmText.replace(/{{commenter_name}}/g, commenterUsername || 'there')
                   .replace(/{{store_name}}/g, storeName || 'our store');

    // Check for product mapping
    const postMapping = await this.prisma.postProductMapping.findUnique({
      where: { merchantId_mediaId: { merchantId, mediaId } },
    });

    if (postMapping && postMapping.isActive) {
      try {
        const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
        if (product) {
          dmText = this.replaceTemplateVariables(dmText, product);
        }
      } catch (e) {
        this.logger.warn(`Could not fetch product for IG variable replacement: ${e.message}`);
      }
    }

    try {
      // Send DM
      await this.metaSender.sendText(
        commenterId,
        dmText,
        instagramToken,
        merchantId,
        'instagram'
      );

      await this.metaSender.sendQuickReplies(
        commenterId,
        "Select an option:",
        [
          { title: "🛍️ Browse Store", payload: "START_SHOPPING" },
          { title: "💰 See Prices", payload: "SHOW_PRODUCTS" }
        ],
        instagramToken,
        merchantId,
        'instagram'
      );

      // Save Log
      await this.prisma.commentDmLog.create({
        data: {
          merchantId,
          commenterId,
          mediaId,
          keyword: matchingTrigger.keyword,
        },
      });

      // Increment Count
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

    } catch (error) {
      this.logger.error(`Failed to handle IG comment trigger: ${error.message}`);
    }
  }

  async handleFacebookComment(data: {
    merchantId: string;
    commentText: string;
    commenterId: string;
    commenterName: string;
    postId: string;
    commentId: string;
    messengerToken: string;
  }) {
    const { merchantId, commentText, commenterId, commenterName, postId, commentId, messengerToken } = data;

    // Skip comments made by the page itself
    if (commentText === undefined) return;

    // Find active triggers for merchant
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId, isActive: true },
    });

    const matchingTrigger = triggers.find(t => 
      t.keyword.trim().length > 0 && commentText.toLowerCase().includes(t.keyword.toLowerCase())
    );

    if (!matchingTrigger) {
      this.logger.debug(`No matching trigger found for keyword "${commentText}"`);
      return;
    }

    // Duplication check (prevent spam per post)
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
    if (!merchant) return;

    // Check for Active Plan (Mandatory for Shopify)
    const isDevelopment = process.env.NODE_ENV !== 'production';
    if (!isDevelopment && merchant.planStatus !== 'ACTIVE') {
       this.logger.warn(`Merchant ${merchant.shop} does not have an active plan. Skipping automation.`);
       return;
    }

    const storeName = merchant.shop.split('.')[0];

    // 🆕 Check if this post is mapped to a specific Shopify product
    const postMapping = await this.prisma.postProductMapping.findUnique({
      where: {
        merchantId_mediaId: { merchantId, mediaId: postId },
      },
    });

    // Prepare custom message if template exists
    let dmText = matchingTrigger.templateMessage;
    // Fallback if no template is set
    if (!dmText) {
      if (postMapping && postMapping.isActive) {
        dmText = `Hi {{commenter_name}}! 👋 Here's the product you were interested in from our post:`;
      } else {
        dmText = `Hi {{commenter_name}}! 👋 Thanks for your interest on our post.\n\nReply "shopping" to browse {{store_name}} and order directly here 👇`;
      }
    }

    // Replace basic variables
    dmText = dmText.replace(/{{commenter_name}}/g, commenterName || 'there')
                   .replace(/{{store_name}}/g, storeName || 'our store');

    this.logger.debug(`Sending DM with template: "${dmText}"`);

    try {
      // Step 1: Send private reply DM via the Send API
      const dmUrl = `https://graph.facebook.com/v18.0/me/messages?access_token=${messengerToken}`;

      if (postMapping && postMapping.isActive) {
        // 🎯 DIRECT PRODUCT DM — the killer feature!
        this.logger.log(`🎯 Post ${postId} is mapped to product "${postMapping.productTitle}" (${postMapping.shopifyProductId})`);

        // If we have a product, try to replace product variables in the template
        let finalDmText = dmText;
        try {
          const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
          if (product) {
            finalDmText = this.replaceTemplateVariables(finalDmText, product);
          }
        } catch (e) {
          this.logger.warn(`Could not fetch product for variable replacement: ${e.message}`);
        }

        // First: Send the private reply to open the DM thread
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
        } else {
          this.logger.log(`✅ Sent private reply DM for comment ${commentId}`);

          // Now send the actual product card via the bot
          try {
            const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
            if (product) {
              // Initialize a bot session so the buyer can interact with the product
              const sessionKey = `msg_${commenterId}_${merchantId}`;
              await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                merchantId,
                shop: merchant.shop,
                selectedProduct: product,
              });

              // Send the product card directly
              await this.messengerBot.showProductDetail(
                commenterId,
                merchant,
                messengerToken,
                product,
                { merchantId, shop: merchant.shop }
              );
              this.logger.log(`🎯 Sent direct product card for "${product.title}" to ${commenterName}`);
            } else {
              this.logger.warn(`Product ${postMapping.shopifyProductId} not found in Shopify`);
            }
          } catch (productErr) {
            this.logger.error(`Failed to send product card: ${productErr.message}`);
          }
        }

      } else {
        // No product mapping, just send the (potentially customized) welcome message
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
        } else {
          this.logger.log(`✅ Successfully sent private reply DM for comment ${commentId}`);
        }
      }

      // Save Log
      await this.prisma.commentDmLog.create({
        data: {
          merchantId,
          commenterId,
          mediaId: postId,
          keyword: matchingTrigger.keyword,
        },
      });

      // Increment Count
      await this.prisma.commentTrigger.update({
        where: { id: matchingTrigger.id },
        data: { triggerCount: { increment: 1 } },
      });

      // Step 2: Public Reply (Optional)
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
        } else {
          this.logger.log(`✅ Successfully sent public reply to comment ${commentId}`);
        }
      }

    } catch (error) {
      this.logger.error(`Failed to handle FB comment trigger: ${error.message}`);
    }
  }

  async createTrigger(merchantId: string, data: { keyword: string; replyComment?: boolean; templateMessage?: string }) {
    if (data.keyword.length > 20) throw new ConflictException('Keyword too long (max 20 chars)');

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

  async listTriggers(merchantId: string) {
    return this.prisma.commentTrigger.findMany({
      where: { merchantId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async updateTrigger(merchantId: string, triggerId: string, data: any) {
    return this.prisma.commentTrigger.update({
      where: { id: triggerId, merchantId },
      data,
    });
  }

  async deleteTrigger(merchantId: string, triggerId: string) {
    return this.prisma.commentTrigger.delete({
      where: { id: triggerId, merchantId },
    });
  }

  async getTriggerStats(merchantId: string) {
    const totalTriggers = await this.prisma.commentTrigger.count({ where: { merchantId } });
    const totalDms = await this.prisma.commentDmLog.count({ where: { merchantId } });
    
    // Simplistic conversion rate: orders / DMs (In a real app would filter by order tags)
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

  private replaceTemplateVariables(template: string, product: any): string {
    if (!template) return '';
    
    return template
      .replace(/{{product_name}}/g, product.title || '')
      .replace(/{{price}}/g, `$${product.price ? product.price.toFixed(2) : '0.00'}`)
      .replace(/{{currency}}/g, 'USD') // Can be made dynamic from merchant data later
      .replace(/{{link}}/g, product.onlineStoreUrl || '');
  }
}
