import {
  Injectable,
  Logger,
  ConflictException,
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

  // ─── URL HELPERS ────────────────────────────────────────────────────────────

  private normalizeFacebookUrl(postUrl?: string): string | undefined {
    if (!postUrl) return undefined;
    try {
      const url = new URL(postUrl);
      url.hash = '';
      if (url.hostname === 'm.facebook.com') url.hostname = 'www.facebook.com';
      const normalized = `${url.origin}${url.pathname}${url.search}`;
      return normalized.endsWith('/') && !url.search
        ? normalized.slice(0, -1)
        : normalized;
    } catch {
      return postUrl;
    }
  }

  private getProductUrl(shop: string, product: any): string | null {
    if (product?.onlineStoreUrl) return product.onlineStoreUrl;
    if (product?.handle) return `https://${shop}/products/${product.handle}`;
    return null;
  }

  private getCheckoutUrl(shop: string, product: any): string | null {
    const variantId = product?.variants?.[0]?.id;
    if (variantId) return `https://${shop}/cart/${variantId}:1`;
    return this.getProductUrl(shop, product);
  }

  // ─── INSTAGRAM COMMENT HANDLER ──────────────────────────────────────────────

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

    // ── 1. Find matching trigger ──────────────────────────────────────────────
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId, isActive: true },
    });

    const matchingTrigger = triggers.find(
      (t) =>
        t.keyword.trim().length > 0 &&
        commentText.toLowerCase().includes(t.keyword.toLowerCase()),
    );

    if (!matchingTrigger) return;

    // ── 2. Anti-spam check ────────────────────────────────────────────────────
    const existingLog = await this.prisma.commentDmLog.findUnique({
      where: {
        merchantId_commenterId_mediaId: { merchantId, commenterId, mediaId },
      },
    });
    if (existingLog) {
      this.logger.warn(`🛡️ Anti-spam: Already DMd ${commenterUsername} for this post.`);
      return;
    }

    // ── 3. Load merchant ──────────────────────────────────────────────────────
    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) return;

    // ── 4. Plan check (skip in dev) ───────────────────────────────────────────
    const isDev = process.env.NODE_ENV !== 'production';
    if (!isDev && merchant.planStatus !== 'ACTIVE') {
      this.logger.warn(`Merchant ${merchant.shop} has no active plan.`);
      return;
    }

    // ── 5. Smart post-product mapping lookup ──────────────────────────────────
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

    // ── 6. Instagram ID resolution fallback ───────────────────────────────────
    if (!postMapping && instagramToken && !mediaId.startsWith('http')) {
      try {
        this.logger.debug(`🔍 Resolving Instagram ID for ${mediaId}...`);
        const igRes = await fetch(
          `https://graph.facebook.com/v21.0/${mediaId}?fields=permalink,shortcode&access_token=${instagramToken}`,
        );
        if (igRes.ok) {
          const igData = await igRes.json();
          const shortcode =
            igData.shortcode || igData.permalink?.split('/p/')[1]?.split('/')[0];

          if (shortcode) {
            this.logger.debug(`📍 Resolved ${mediaId} → shortcode: ${shortcode}`);
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

            // Update mapping with canonical ID for future lookups
            if (postMapping) {
              this.logger.log(`🧠 Updating mapping ${postMapping.id} with canonical ID ${mediaId}`);
              await this.prisma.postProductMapping.update({
                where: { id: postMapping.id },
                data: { mediaId },
              });
            }
          }
        }
      } catch (err) {
        this.logger.warn(`Failed IG ID resolution for ${mediaId}: ${err.message}`);
      }
    }

    // ── 7. Main DM flow ───────────────────────────────────────────────────────
    let delivered = false;
    let fetchedProduct: any = null; // ✅ FIX: cache product to avoid double API call

    try {
      if (postMapping?.isActive) {
        try {
          fetchedProduct = await this.shopifyApi.getProduct(
            merchant.shop,
            postMapping.shopifyProductId,
          );

          if (fetchedProduct) {
            this.logger.debug(
              `🔄 Sending IG private reply opener for "${fetchedProduct.title}" to @${commenterUsername}`,
            );

            // Step 1: Send private reply opener to open DM window
            const privateReplyText = `Hi @${commenterUsername}! I've sent you details about the ${fetchedProduct.title} 😊`;
            const privateReplySent = await this.metaSender.sendText(
              commentId,
              privateReplyText,
              instagramToken,
              merchant.id,
              'instagram',
              true, // isPrivateReply
            );

            if (privateReplySent) {
              this.logger.log(`✅ IG private reply opener sent to @${commenterUsername}`);
            } else {
              this.logger.warn(`❌ IG private reply opener failed for @${commenterUsername}`);
            }

            // Step 2: Send rich product card to DM
            delivered = await this.instagramBot.showProductDetail(
              commenterId,
              merchant,
              instagramToken,
              fetchedProduct,
              { merchantId, shop: merchant.shop },
              undefined,
            );

            if (delivered) {
              this.logger.log(`🎯 IG product card sent for "${fetchedProduct.title}" to @${commenterUsername}`);
            } else {
              this.logger.warn(`❌ IG product card rejected for @${commenterUsername} — likely DM restrictions`);
            }
          }
        } catch (productErr) {
          this.logger.error(`Failed to send IG product card: ${productErr.message}`);
        }
      } else {
        this.logger.log(`ℹ️ No mapping for post ${mediaId}. Skipping IG DM.`);
      }

      // ── 8. Always post public reply ─────────────────────────────────────────
      if (matchingTrigger.replyComment) {
        let replyMessage: string;

        if (delivered) {
          replyMessage = `Hi @${commenterUsername}! Check your DMs 😊`;
        } else if (postMapping && fetchedProduct) {
          // ✅ FIX: reuse cached product, no double API call
          const productUrl = this.getProductUrl(merchant.shop, fetchedProduct);
          const checkoutUrl = this.getCheckoutUrl(merchant.shop, fetchedProduct);
          const fallbackParts = [`Hi @${commenterUsername}! Thanks for your interest!`];
          if (checkoutUrl) fallbackParts.push(`🛒 Shop: ${checkoutUrl}`);
          else if (productUrl) fallbackParts.push(`🛍️ View: ${productUrl}`);
          replyMessage = fallbackParts.join('\n').substring(0, 600);
        } else {
          // ✅ FIX: null-safe generic reply when no mapping exists
          replyMessage = `Hi @${commenterUsername}! Thanks for your interest! DM us to order 😊`;
        }

        await fetch(
          `https://graph.facebook.com/v21.0/${commentId}/replies?access_token=${instagramToken}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: replyMessage }),
          },
        );
      }

      // ── 9. Save log and increment count only if DM delivered ────────────────
      if (!delivered) return;

      await this.prisma.commentDmLog.create({
        data: { merchantId, commenterId, mediaId, keyword: matchingTrigger.keyword },
      });

      await this.prisma.commentTrigger.update({
        where: { id: matchingTrigger.id },
        data: { triggerCount: { increment: 1 } },
      });

    } catch (error) {
      this.logger.error(`Failed to handle IG comment trigger: ${error.message}`);
    }
  }

  // ─── FACEBOOK COMMENT HANDLER ───────────────────────────────────────────────

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

    // ── 1. Find matching trigger ──────────────────────────────────────────────
    const triggers = await this.prisma.commentTrigger.findMany({
      where: { merchantId, isActive: true },
    });

    const matchingTrigger = triggers.find(
      (t) =>
        t.keyword.trim().length > 0 &&
        commentText.toLowerCase().includes(t.keyword.toLowerCase()),
    );

    if (!matchingTrigger) {
      this.logger.warn(`⚠️ Keyword "${commentText}" did not match any active trigger.`);
      return;
    }

    // ── 2. Anti-spam check ────────────────────────────────────────────────────
    const existingLog = await this.prisma.commentDmLog.findUnique({
      where: {
        merchantId_commenterId_mediaId: { merchantId, commenterId, mediaId: postId },
      },
    });

    if (existingLog) {
      this.logger.warn(`🛡️ Anti-spam: Already DMd ${commenterName} for this post.`);
      return;
    }

    // ── 3. Load merchant ──────────────────────────────────────────────────────
    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) {
      this.logger.error(`❌ Merchant ${merchantId} not found!`);
      return;
    }

    // ── 4. Plan check ─────────────────────────────────────────────────────────
    const isDev = process.env.NODE_ENV !== 'production';
    if (!isDev && merchant.planStatus !== 'ACTIVE') return;

    // ── 5. Smart post-product mapping lookup ──────────────────────────────────
    const numericId = postId.includes('_') ? postId.split('_')[1] : postId;
    this.logger.log(`🔍 Looking for mapping: ${postId} (Numeric: ${numericId})`);

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
          ...(normalizedPermalinkBase
            ? [{ postUrl: { startsWith: normalizedPermalinkBase } }]
            : []),
        ],
      },
    });

    if (!postMapping) {
      this.logger.warn(`📍 No product mapping found for post ${postId}. Trying canonical fallback...`);
      // ✅ FIX: removed early return — let canonical resolution fallback run
    }

    // ── 6. Canonical & attachment resolution fallback ─────────────────────────
    if (!postMapping && merchant.messengerToken) {
      try {
        const fbRes = await fetch(
          `https://graph.facebook.com/v21.0/${postId}?fields=permalink_url,attachments&access_token=${messengerToken}`,
        );

        if (fbRes.ok) {
          const fbData = await fbRes.json();

          // Try canonical URL match
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
                  ...(canonicalBase
                    ? [{ postUrl: { startsWith: canonicalBase } }]
                    : []),
                ],
              },
            });
          }

          // Try photo attachment ID match
          if (!postMapping && fbData.attachments?.data) {
            const photoIds = fbData.attachments.data.flatMap((at: any) => {
              const ids: string[] = [];
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
        this.logger.warn(`Failed canonical resolution for ${postId}: ${err.message}`);
      }
    }

    // ── 7. Main DM flow ───────────────────────────────────────────────────────
    let delivered = false;
    let fetchedProduct: any = null; // ✅ cache product reference

    try {
      if (postMapping?.isActive) {
        try {
          fetchedProduct = await this.shopifyApi.getProduct(
            merchant.shop,
            postMapping.shopifyProductId,
          );

          if (fetchedProduct) {
            const privateReplyText = [
              `${fetchedProduct.title} - $${fetchedProduct.price.toFixed(2)}`,
              `Reply "shop" here to continue in Messenger.`,
            ].join('\n').substring(0, 640);

            // Build comment ID variants for private reply
            const commentSuffix = commentId.includes('_')
              ? commentId.split('_').pop()
              : commentId;
            const pagePrefixedCommentId =
              commentSuffix && merchant.messengerPageId
                ? `${merchant.messengerPageId}_${commentSuffix}`
                : null;

            // Attempt 1: private reply with original comment ID
            let privateReplySent = await this.metaSender.sendText(
              commentId,
              privateReplyText,
              messengerToken,
              merchant.id,
              'messenger',
              true,
            );

            // Attempt 2: retry with page-prefixed comment ID
            if (!privateReplySent && pagePrefixedCommentId && pagePrefixedCommentId !== commentId) {
              this.logger.warn(`Retrying private reply with page-prefixed ID: ${pagePrefixedCommentId}`);
              privateReplySent = await this.metaSender.sendText(
                pagePrefixedCommentId,
                privateReplyText,
                messengerToken,
                merchant.id,
                'messenger',
                true,
              );
            }

            // Attempt 3: direct DM opener if private reply failed
            let directOpenerSent = false;
            if (!privateReplySent) {
              this.logger.warn(`Private reply failed. Trying direct DM to ${commenterName}...`);
              directOpenerSent = await this.metaSender.sendText(
                commenterId,
                `${fetchedProduct.title} - $${fetchedProduct.price.toFixed(2)}\nReply "shop" to order.`,
                messengerToken,
                merchant.id,
                'messenger',
              );

              if (!directOpenerSent) {
                this.logger.warn(
                  `Direct DM also failed for ${commenterName}. ` +
                  `This usually means the user has never messaged your page. ` +
                  `They need to send a message to your page first to open the 24-hour window.`,
                );
              }
            }

            // Only send product card if we opened any DM path
            if (privateReplySent || directOpenerSent) {
              // Pre-load bot session with product context
              const sessionKey = `msg_${commenterId}_${merchantId}`;
              await this.session.updateContext(sessionKey, 'VIEWING_PRODUCT', {
                merchantId,
                shop: merchant.shop,
                selectedProduct: fetchedProduct,
              });

              delivered = await this.messengerBot.showProductDetail(
                commenterId,
                merchant,
                messengerToken,
                fetchedProduct,
                { merchantId, shop: merchant.shop },
                undefined,
              );

              if (delivered) {
                this.logger.log(`🎯 Messenger product flow sent for "${fetchedProduct.title}" to ${commenterName}`);
              } else {
                this.logger.warn(`❌ Messenger product flow rejected for ${commenterName}`);
              }
            } else {
              this.logger.warn(`Skipping product card — no DM path available for ${commenterName}`);
              delivered = false;
            }
          } else {
            this.logger.warn(`Product ${postMapping.shopifyProductId} not found in Shopify.`);
          }
        } catch (productErr) {
          this.logger.error(`Failed to send Facebook product card: ${productErr.message}`);
        }
      } else {
        this.logger.log(`ℹ️ No mapping for post ${postId}. Skipping Facebook DM.`);
      }

      // ── 8. Always post public reply ─────────────────────────────────────────
      if (matchingTrigger.replyComment) {
        let replyMessage: string;

        if (delivered) {
          replyMessage = `Hi ${commenterName}! Check your DMs 😊`;
        } else if (fetchedProduct) {
          // ✅ FIX: reuse cached product — no second API call
          const checkoutUrl = this.getCheckoutUrl(merchant.shop, fetchedProduct);
          const productUrl = this.getProductUrl(merchant.shop, fetchedProduct);
          const pageLink = merchant.messengerPageId
            ? `https://m.me/${merchant.messengerPageId}?ref=product_${fetchedProduct.id}`
            : null;

          const fallbackParts = [`Hi ${commenterName}! Here's what you're looking for:`];
          if (checkoutUrl) fallbackParts.push(`🛒 Shop now: ${checkoutUrl}`);
          else if (productUrl) fallbackParts.push(`🛍️ View product: ${productUrl}`);
          if (pageLink) fallbackParts.push(`💬 Message us: ${pageLink}`);

          replyMessage = fallbackParts.join('\n').substring(0, 600);
        } else {
          // ✅ FIX: null-safe fallback when no mapping and no product
          replyMessage = `Hi ${commenterName}! Thanks for your interest! Please message us directly for more info 😊`;
        }

        await fetch(
          `https://graph.facebook.com/v21.0/${commentId}/comments?access_token=${messengerToken}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: replyMessage }),
          },
        );
      }

      // ── 9. Save log and increment count only if DM delivered ────────────────
      if (!delivered) return;

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

    } catch (error) {
      this.logger.error(`Failed to handle FB comment trigger: ${error.message}`);
    }
  }

  // ─── TRIGGER CRUD ────────────────────────────────────────────────────────────

  async createTrigger(
    merchantId: string,
    data: { keyword: string; replyComment?: boolean; templateMessage?: string },
  ) {
    if (data.keyword.length > 20) {
      throw new ConflictException('Keyword too long (max 20 chars)');
    }

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

  // ─── TEMPLATE HELPER ─────────────────────────────────────────────────────────

  private replaceTemplateVariables(template: string, product: any): string {
    if (!template) return '';
    return template
      .replace(/{{product_name}}/g, product.title || '')
      .replace(/{{price}}/g, `$${product.price ? product.price.toFixed(2) : '0.00'}`)
      .replace(/{{currency}}/g, 'USD')
      .replace(/{{link}}/g, product.onlineStoreUrl || '');
  }
}