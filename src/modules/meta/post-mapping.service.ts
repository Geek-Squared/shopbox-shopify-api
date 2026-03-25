import {
  Injectable,
  Logger,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { ShopifyRepository } from '../shopify/shopify.repository';

@Injectable()
export class PostMappingService {
  private readonly logger = new Logger(PostMappingService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly shopifyApi: ShopifyApiService,
    private readonly shopifyRepo: ShopifyRepository,
  ) {}

  private normalizeFacebookUrl(postUrl: string): string {
    const url = new URL(postUrl);
    url.hash = '';

    if (url.hostname === 'm.facebook.com') {
      url.hostname = 'www.facebook.com';
    }

    const normalized = `${url.origin}${url.pathname}${url.search}`;
    return normalized.endsWith('/') && !url.search
      ? normalized.slice(0, -1)
      : normalized;
  }

  /**
   * Extract the Facebook post_id from a Facebook post URL.
   * Format: https://www.facebook.com/permalink.php?story_fbid=122106202934120930&id=61553627927615
   * Returns: pageId_storyFbid (e.g. "1060394393815353_122106202934120930")
   */
  extractFacebookPostId(postUrl: string, messengerPageId: string): string {
    try {
      const normalizedUrl = this.normalizeFacebookUrl(postUrl);
      const url = new URL(normalizedUrl);
      const storyFbid = url.searchParams.get('story_fbid');
      const fbidParam = url.searchParams.get('fbid');
      const numericId = [storyFbid, fbidParam].find((value) =>
        /^\d+$/.test(value ?? ''),
      );
      if (numericId) {
        return `${messengerPageId}_${numericId}`;
      }

      // Handle format: /posts/122106202934120930
      const postsMatch = normalizedUrl.match(/\/posts\/(\d+)/);
      if (postsMatch) {
        return `${messengerPageId}_${postsMatch[1]}`;
      }

      // Some Facebook permalinks only expose a pfbid token. Preserve the full
      // URL so webhook permalink matching can still recover the mapping later.
      const pfbidMatch = normalizedUrl.match(/pfbid([a-zA-Z0-9]+)/);
      if (pfbidMatch) {
        return `url:${normalizedUrl}`;
      }

      throw new Error('Could not extract post ID from URL');
    } catch (e) {
      if (e.message.includes('Invalid URL')) {
        // Maybe they pasted just the post ID directly
        if (/^\d+_\d+$/.test(postUrl)) {
          return postUrl;
        }
        // Or just the story_fbid
        if (/^\d+$/.test(postUrl)) {
          return `${messengerPageId}_${postUrl}`;
        }
      }
      throw new ConflictException(
        `Could not extract Facebook post ID: ${e.message}`,
      );
    }
  }

  /**
   * Create a new post-to-product mapping.
   */
  async createMapping(
    merchantId: string,
    data: {
      postUrl: string;
      platform: 'facebook' | 'instagram';
      shopifyProductId: string;
      productTitle?: string;
    },
  ) {
    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) throw new NotFoundException('Merchant not found');

    let mediaId: string;
    let normalizedPostUrl = data.postUrl;

    if (data.platform === 'facebook') {
      if (!merchant.messengerPageId) {
        throw new ConflictException(
          'Facebook Messenger is not connected. Connect it first.',
        );
      }
      normalizedPostUrl = this.normalizeFacebookUrl(data.postUrl);
      mediaId = this.extractFacebookPostId(
        normalizedPostUrl,
        merchant.messengerPageId,
      );
    } else {
      // Instagram: Extract ID or Shortcode from URL
      // Format: https://www.instagram.com/p/C4... or https://www.instagram.com/reels/C4...
      const match = data.postUrl.match(/\/(?:p|reels|reel)\/([a-zA-Z0-9_-]+)/);
      const shortcode = match ? match[1] : null;

      if (shortcode && merchant.instagramToken) {
        try {
          // If we have a shortcode, try to resolve the real numeric Media ID via Graph API
          // This is critical because webhooks only send the numeric ID.
          const url = `https://graph.facebook.com/v21.0/instagram_oembed?url=https://www.instagram.com/p/${shortcode}/&access_token=${merchant.instagramToken}`;
          const res = await fetch(url);
          if (res.ok) {
            const oembed = await res.json();
            // The oembed endpoint doesn't give media_id directly, but we can use
            // the business discovery or media edge if we need it.
            // FOR NOW: We'll store the shortcode and make the trigger service search by shortcode too.
            mediaId = shortcode;
          } else {
            mediaId = shortcode;
          }
        } catch (e) {
          mediaId = shortcode;
        }
      } else {
        // Fallback to whatever was provided (might already be an ID)
        mediaId = data.postUrl.split('/').filter(Boolean).pop() || data.postUrl;
      }
    }

    // Fetch product title from Shopify for caching (with local fallback if fetch fails)
    let productTitle = data.productTitle || 'Unknown Product';
    try {
      const product = await this.shopifyApi.getProduct(
        merchant.shop,
        data.shopifyProductId,
      );
      if (product?.title) {
        productTitle = product.title;
      }
    } catch (e) {
      this.logger.warn(
        `Could not fetch product title: ${e.message}. Using fallback: ${productTitle}`,
      );
    }

    // Upsert to handle re-linking the same post to a different product
    const mapping = await this.prisma.postProductMapping.upsert({
      where: {
        merchantId_mediaId: { merchantId, mediaId },
      },
      create: {
        merchantId,
        platform: data.platform,
        postUrl: normalizedPostUrl,
        mediaId,
        shopifyProductId: data.shopifyProductId,
        productTitle,
      },
      update: {
        shopifyProductId: data.shopifyProductId,
        productTitle,
        postUrl: normalizedPostUrl,
        isActive: true,
      },
    });

    this.logger.log(
      `✅ Mapped post ${mediaId} → product "${productTitle}" (${data.shopifyProductId})`,
    );
    return mapping;
  }

  /**
   * List all post-product mappings for a merchant.
   */
  async listMappings(merchantId: string) {
    return this.prisma.postProductMapping.findMany({
      where: { merchantId },
      orderBy: { createdAt: 'desc' },
    });
  }

  /**
   * Update a mapping (e.g. change the linked product or toggle active).
   */
  async updateMapping(
    merchantId: string,
    mappingId: string,
    data: Partial<{
      shopifyProductId: string;
      productTitle: string;
      isActive: boolean;
    }>,
  ) {
    return this.prisma.postProductMapping.update({
      where: { id: mappingId, merchantId },
      data,
    });
  }

  /**
   * Delete a mapping.
   */
  async deleteMapping(merchantId: string, mappingId: string) {
    return this.prisma.postProductMapping.delete({
      where: { id: mappingId, merchantId },
    });
  }

  /**
   * Find a product mapping for a specific post.
   * This is the core lookup used by the comment trigger handler.
   */
  async findByMediaId(merchantId: string, mediaId: string) {
    return this.prisma.postProductMapping.findUnique({
      where: {
        merchantId_mediaId: { merchantId, mediaId },
      },
    });
  }
}
