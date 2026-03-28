import {
  Injectable,
  Logger,
  ConflictException,
  NotFoundException,
  forwardRef,
  Inject,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { MetaSenderService } from './meta-sender.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { InstagramBotService } from './instagram-bot.service';
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
    private readonly instagramBot: InstagramBotService,
    private readonly session: BotSessionService,
  ) {}

  private normalizeFacebookUrl(postUrl?: string): string | undefined {
    if (!postUrl) {
      return undefined;
    }

    try {
      const url = new URL(postUrl);
      url.hash = '';

      if (url.hostname === 'm.facebook.com') {
        url.hostname = 'www.facebook.com';
      }

      const normalized = `${url.origin}${url.pathname}${url.search}`;
      return normalized.endsWith('/') && !url.search
        ? normalized.slice(0, -1)
        : normalized;
    } catch {
      return postUrl;
    }
  }

  private getProductUrl(shop: string, product: any): string | null {
    if (product?.onlineStoreUrl) {
      return product.onlineStoreUrl;
    }
    if (product?.handle) {
      return `https://${shop}/products/${product.handle}`;
    }
    return null;
  }

  private getCheckoutUrl(shop: string, product: any): string | null {
    const variantId = product?.variants?.[0]?.id;
    if (variantId) {
      return `https://${shop}/cart/${variantId}:1`;
    }
    return this.getProductUrl(shop, product);
  }

  async handleInstagramComment(data: {
    merchantId: string;
    commentText: string;
    commenterId: string;
    commenterUsername: string;
    mediaId: string;
    commentId: string;
    instagramToken: string;
  }) {
    const {
      merchantId,
      commentText,
      commenterId,
      commenterUsername,
      mediaId,
      commentId,
      instagramToken,
    } = data;

    // Find active triggers for merchant
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId, isActive: true },
    });

    const matchingTrigger = triggers.find(
      (t) =>
        t.keyword.trim().length > 0 &&
        commentText.toLowerCase().includes(t.keyword.toLowerCase()),
    );

    if (!matchingTrigger) return;

    // Duplication check (prevent spam per post)
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

    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) return;

    // Check for Active Plan
    const isDevelopment = process.env.NODE_ENV !== 'production';
    if (!isDevelopment && merchant.planStatus !== 'ACTIVE') {
      this.logger.warn(
        `Merchant ${merchant.shop} does not have an active plan. Skipping automation.`,
      );
      return;
    }

    // 🆕 SMART LOOKUP — Find mapping even if ID format varies
    const numericId = mediaId.includes('_') ? mediaId.split('_')[1] : mediaId;
    let postMapping = await this.prisma.postProductMapping.findFirst({
      where: {
        merchantId,
        isActive: true,
        OR: [
          { mediaId: mediaId },
          { mediaId: numericId },
          { postUrl: { contains: mediaId } },
          { postUrl: { contains: numericId } },
        ],
      },
    });

    // 🆕 INSTAGRAM ID RESOLUTION FALLBACK
    // If we have a numeric ID from webhook but the mapping was created with a shortcode/URL
    if (!postMapping && instagramToken && !mediaId.startsWith('http')) {
      try {
        this.logger.debug(
          `🔍 Attempting Instagram ID resolution for ${mediaId}...`,
        );
        const url = `https://graph.facebook.com/v21.0/${mediaId}?fields=permalink,shortcode&access_token=${instagramToken}`;
        const igRes = await fetch(url);
        if (igRes.ok) {
          const igData = await igRes.json();
          const shortcode =
            igData.shortcode ||
            igData.permalink?.split('/p/')[1]?.split('/')[0];

          if (shortcode) {
            this.logger.debug(
              `📍 Post ${mediaId} resolved to shortcode: ${shortcode}`,
            );
            postMapping = await this.prisma.postProductMapping.findFirst({
              where: {
                merchantId,
                isActive: true,
                OR: [
                  { mediaId: shortcode },
                  { postUrl: { contains: shortcode } },
                ],
              },
            });

            if (postMapping) {
              this.logger.log(
                `🧠 Learning! Updating mapping ${postMapping.id} with canonical numeric ID ${mediaId}`,
              );
              await this.prisma.postProductMapping.update({
                where: { id: postMapping.id },
                data: { mediaId: mediaId },
              });
            }
          }
        }
      } catch (err) {
        this.logger.warn(
          `Failed IG ID resolution for ${mediaId}: ${err.message}`,
        );
      }
    }

    try {
      let delivered = false;

      if (postMapping && postMapping.isActive) {
        try {
          const product = await this.shopifyApi.getProduct(
            merchant.shop,
            postMapping.shopifyProductId,
          );
          if (product) {
            this.logger.debug(`🔄 Attempting to send IG private reply opener for "${product.title}" to ${commenterUsername} (ID: ${commenterId})`);
            
            // 🆕 STEP 1: Send a plain-text private reply (Opener) to open the DM window
            // This is safer than sending a Template/Card as the first message.
            const privateReplyText = `Hi @${commenterUsername}! I've sent you details about the ${product.title} to your DMs. Check them out! 😊`;
            
            const privateReplySent = await this.metaSender.sendText(
              commentId,
              privateReplyText,
              instagramToken,
              merchant.id,
              'instagram',
              true,
            );

            if (privateReplySent) {
               this.logger.log(`✅ Instagram private reply opener sent to @${commenterUsername}`);
            } else {
               this.logger.warn(`❌ Instagram private reply opener failed for @${commenterUsername}. Attempting direct DM fallback if possible.`);
            }

            // 🆕 STEP 2: Send the rich product card
            // We use commenterId here to ensure it goes to the DM thread
            delivered = await this.instagramBot.showProductDetail(
              commenterId,
              merchant,
              instagramToken,
              product,
              { merchantId, shop: merchant.shop },
              undefined, 
            );

            if (delivered) {
              this.logger.log(
                `🎯 Sent direct product card for "${product.title}" to IG user ${commenterUsername}`,
              );
            } else {
              this.logger.warn(
                `❌ Meta rejected the IG direct product reply for "${product.title}" to ${commenterUsername}. This may be due to Instagram DM restrictions or user privacy settings.`,
              );
            }
          }
        } catch (productErr) {
          this.logger.error(
            `Failed to send IG product card: ${productErr.message}`,
          );
        }
      } else {
        this.logger.log(`ℹ️ Post ${mediaId} has no mapping. Skipping IG DM.`);
      }

      // Always post a public reply if enabled, regardless of DM success  
      if (matchingTrigger.replyComment) {
        let replyMessage: string;
        
        if (delivered) {
          replyMessage = `Hi @${commenterUsername}! Check your DMs 😊`;
        } else {
          // DM failed - provide fallback with links
          const product = await this.shopifyApi.getProduct(merchant.shop, postMapping.shopifyProductId);
          const productUrl = this.getProductUrl(merchant.shop, product);
          const checkoutUrl = this.getCheckoutUrl(merchant.shop, product);
          
          const fallbackParts = [`Hi @${commenterUsername}! Thanks for your interest!`];
          if (checkoutUrl) fallbackParts.push(`🛒 Shop: ${checkoutUrl}`);
          else if (productUrl) fallbackParts.push(`🛍️ View: ${productUrl}`);
          
          replyMessage = fallbackParts.join('\n').substring(0, 600);
        }
          
        const replyUrl = `https://graph.facebook.com/v21.0/${commentId}/replies?access_token=${instagramToken}`;
        await fetch(replyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: replyMessage }),
        });
      }



      if (!delivered) {
        return;
      }

      // Save Log only if DM was delivered
      await this.prisma.commentDmLog.create({
        data: {
          merchantId,
          commenterId,
          mediaId,
          keyword: matchingTrigger.keyword,
        },
      });

      // Increment Count only if DM was delivered
      await this.prisma.commentTrigger.update({
        where: { id: matchingTrigger.id },
        data: { triggerCount: { increment: 1 } },
      });
    } catch (error) {
      this.logger.error(
        `Failed to handle IG comment trigger: ${error.message}`,
      );
    }
  }

  async handleFacebookComment(data: {
    merchantId: string;
    commentText: string;
    commenterId: string;
    commenterName: string;
    postId: string;
    postPermalinkUrl?: string;
    commentId: string;
    messengerToken: string;
  }) {
    const {
      merchantId,
      commentText,
      commenterId,
      commenterName,
      postId,
      postPermalinkUrl,
      commentId,
      messengerToken,
    } = data;

    if (commentText === undefined) return;

    // Find active triggers
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId, isActive: true },
    });

    const matchingTrigger = triggers.find(
      (t) =>
        t.keyword.trim().length > 0 &&
        commentText.toLowerCase().includes(t.keyword.toLowerCase()),
    );

    if (!matchingTrigger) {
      this.logger.warn(
        `⚠️ [CommentTrigger] Keyword "${commentText}" did not match any active trigger.`,
      );
      return;
    }

    // Duplication check (Anti-Spam)
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
      this.logger.warn(
        `🛡️ [CommentTrigger] Anti-Spam: Already sent DM to ${commenterName} for this post today.`,
      );
      return;
    }

    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) {
      this.logger.error(
        `❌ [CommentTrigger] Merchant record lost during processing!`,
      );
      return;
    }

    // Plan check
    const isDevelopment = process.env.NODE_ENV !== 'production';
    if (!isDevelopment && merchant.planStatus !== 'ACTIVE') return;

    // 🆕 SMART LOOKUP
    const numericId = postId.includes('_') ? postId.split('_')[1] : postId;
    this.logger.log(
      `🔍 [CommentTrigger] Looking for mapping for Post ${postId} (Numeric: ${numericId})`,
    );

    const normalizedPermalinkUrl = this.normalizeFacebookUrl(postPermalinkUrl);
    const normalizedPermalinkBase = normalizedPermalinkUrl?.split('?')[0];
    let postMapping = await this.prisma.postProductMapping.findFirst({
      where: {
        merchantId,
        isActive: true,
        OR: [
          { mediaId: postId },
          { mediaId: numericId },
          ...(normalizedPermalinkUrl
            ? [
                { mediaId: `url:${normalizedPermalinkUrl}` },
                { postUrl: normalizedPermalinkUrl },
              ]
            : []),
          ...(normalizedPermalinkUrl
            ? [{ postUrl: { startsWith: normalizedPermalinkBase } }]
            : []),
        ],
      },
    });

    if (!postMapping) {
      this.logger.warn(
        `📍 [CommentTrigger] No product mapping found for this post. App works, but don't know what to sell!`,
      );
      return;
    }

    // 🆕 CANONICAL & ATTACHMENT RESOLUTION FALLBACK
    if (!postMapping && merchant.messengerToken) {
      try {
        const url = `https://graph.facebook.com/v21.0/${postId}?fields=permalink_url,attachments&access_token=${messengerToken}`;

        const fbRes = await fetch(url);
        if (fbRes.ok) {
          const fbData = await fbRes.json();

          const canonicalUrl = this.normalizeFacebookUrl(fbData.permalink_url);
          const canonicalBase = canonicalUrl?.split('?')[0];
          if (canonicalUrl) {
            postMapping = await this.prisma.postProductMapping.findFirst({
              where: {
                merchantId,
                isActive: true,
                OR: [
                  { mediaId: `url:${canonicalUrl}` },
                  { postUrl: canonicalUrl },
                  { postUrl: { startsWith: canonicalBase } },
                ],
              },
            });
          }

          if (!postMapping && fbData.attachments?.data) {
            const photoIds = fbData.attachments.data.flatMap((at: any) => {
              const ids = [];
              if (at.target?.id) ids.push(at.target.id);
              if (at.subattachments?.data) {
                ids.push(
                  ...at.subattachments.data
                    .map((sat: any) => sat.target?.id)
                    .filter(Boolean),
                );
              }
              return ids;
            });

            if (photoIds.length > 0) {
              postMapping = await this.prisma.postProductMapping.findFirst({
                where: {
                  merchantId,
                  isActive: true,
                  OR: photoIds.flatMap((pid) => [
                    { mediaId: pid },
                    { mediaId: { endsWith: `_${pid}` } },
                    { postUrl: { contains: pid } },
                  ]),
                },
              });
            }
          }
        }
      } catch (err) {
        this.logger.warn(
          `Failed canonical resolution for ${postId}: ${err.message}`,
        );
      }
    }

    try {
      let delivered = false;
      let selectedProduct: any = null;

      if (postMapping && postMapping.isActive) {
        try {
          const product = await this.shopifyApi.getProduct(
            merchant.shop,
            postMapping.shopifyProductId,
          );
          if (product) {
            selectedProduct = product;
            const privateReplyLines = [
              `*Product Card*: ${product.title} - $${product.price.toFixed(2)}`,
              `Reply "*shop*" here to continue in Messenger.`,
            ];




            const commentSuffix = commentId.includes('_')
              ? commentId.split('_').pop()
              : commentId;
            const pagePrefixedCommentId =
              commentSuffix && merchant.messengerPageId
                ? `${merchant.messengerPageId}_${commentSuffix}`
                : null;

            let privateReplySent = await this.metaSender.sendText(
              commentId,
              privateReplyLines.join('\n').substring(0, 640),
              messengerToken,
              merchant.id,
              'messenger',
              true,
            );

            if (
              !privateReplySent &&
              pagePrefixedCommentId &&
              pagePrefixedCommentId !== commentId
            ) {
              this.logger.warn(
                `Private reply failed with commentId ${commentId}. Retrying with page-prefixed id ${pagePrefixedCommentId}.`,
              );
              privateReplySent = await this.metaSender.sendText(
                pagePrefixedCommentId,
                privateReplyLines.join('\n').substring(0, 640),
                messengerToken,
                merchant.id,
                'messenger',
                true,
              );
            }

            let directOpenerSent = false;
            if (!privateReplySent) {
              this.logger.warn(
                `Meta did not accept the private reply opener for "${product.title}" to ${commenterName}. Trying direct DM opener.`,
              );
              directOpenerSent = await this.metaSender.sendText(
                commenterId,
                `${product.title} - $${product.price.toFixed(2)}\nReply "shop" to continue.`,
                messengerToken,
                merchant.id,
                'messenger',
              );
              if (!directOpenerSent) {
                this.logger.warn(
                  `Meta did not accept direct DM opener for "${product.title}" to ${commenterName}. Skipping product flow and using fallback.`,
                );
              }
            }

            // If we cannot open any DM path, don't attempt rich product sends that will
            // inevitably fail with the same policy error.
            if (!privateReplySent && !directOpenerSent) {
              delivered = false;
            } else {
              const sessionKey = `msg_${commenterId}_${merchantId}`;
              await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                merchantId,
                shop: merchant.shop,
                selectedProduct: product,
              });

              delivered = await this.messengerBot.showProductDetail(
                commenterId,
                merchant,
                messengerToken,
                product,
                { merchantId, shop: merchant.shop },
                undefined,
              );

              if (delivered) {
                this.logger.log(
                  `🎯 Sent Messenger product flow for "${product.title}" to ${commenterName}`,
                );
              } else {
                this.logger.warn(
                  `Meta did not accept the Messenger product flow for "${product.title}" to ${commenterName}`,
                );
              }
            }
          } else {
            this.logger.warn(
              `Product ${postMapping.shopifyProductId} not found. Skipping DM.`,
            );
          }
        } catch (productErr) {
          this.logger.error(
            `Failed to send Facebook product card: ${productErr.message}`,
          );
        }
      } else {
        this.logger.log(
          `ℹ️ Post ${postId} has no mapping. Skipping Facebook DM.`,
        );
      }

      // Always post a public reply if enabled, regardless of DM success
      if (matchingTrigger.replyComment) {
        let replyMessage: string;
        
        if (delivered) {
          // DM was successful
          replyMessage = `Hi ${commenterName}! Check your DMs 😊`;
        } else if (selectedProduct) {
          // DM failed but we have a product - provide fallback options
          const checkoutUrl = this.getCheckoutUrl(merchant.shop, selectedProduct);
          const productUrl = this.getProductUrl(merchant.shop, selectedProduct);
          const pageLink = merchant.messengerPageId
            ? `https://m.me/${merchant.messengerPageId}?ref=product_${selectedProduct.id}`
            : null;

          const fallbackParts = [`Hi ${commenterName}! Here's what you're looking for:`];
          
          if (checkoutUrl) {
            fallbackParts.push(`🛒 Shop now: ${checkoutUrl}`);
          } else if (productUrl) {
            fallbackParts.push(`🛍️ View product: ${productUrl}`);
          }
          
          if (pageLink) {
            fallbackParts.push(`💬 Message us: ${pageLink}`);
          }
          
          replyMessage = fallbackParts.join('\n').substring(0, 600);
        } else {
          // No product mapping found
          replyMessage = `Hi ${commenterName}! Thanks for your interest! Please message us directly for more info 😊`;
        }

        const replyUrl = `https://graph.facebook.com/v21.0/${commentId}/comments?access_token=${messengerToken}`;
        await fetch(replyUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: replyMessage }),
        });
      }


      if (!delivered) {
        return;
      }

      // Save Log only if DM was delivered
      await this.prisma.commentDmLog.create({
        data: {
          merchantId,
          commenterId,
          mediaId: postId,
          keyword: matchingTrigger.keyword,
        },
      });

      // Increment Count only if DM was delivered
      await this.prisma.commentTrigger.update({
        where: { id: matchingTrigger.id },
        data: { triggerCount: { increment: 1 } },
      });
    } catch (error) {
      this.logger.error(
        `Failed to handle FB comment trigger: ${error.message}`,
      );
    }
  }

  async createTrigger(
    merchantId: string,
    data: { keyword: string; replyComment?: boolean; templateMessage?: string },
  ) {
    if (data.keyword.length > 20)
      throw new ConflictException('Keyword too long (max 20 chars)');

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
    const totalTriggers = await this.prisma.commentTrigger.count({
      where: { merchantId },
    });
    const totalDms = await this.prisma.commentDmLog.count({
      where: { merchantId },
    });

    const totalOrders = await this.prisma.order.count({
      where: { sellerId: merchantId, notes: { contains: 'Instagram' } },
    });

    return {
      totalTriggers,
      totalDmsSent: totalDms,
      totalOrdersFromIg: totalOrders,
      conversionRate: totalDms > 0 ? (totalOrders / totalDms) * 100 : 0,
    };
  }

  private replaceTemplateVariables(template: string, product: any): string {
    if (!template) return '';
    return template
      .replace(/{{product_name}}/g, product.title || '')
      .replace(
        /{{price}}/g,
        `$${product.price ? product.price.toFixed(2) : '0.00'}`,
      )
      .replace(/{{currency}}/g, 'USD')
      .replace(/{{link}}/g, product.onlineStoreUrl || '');
  }
}
