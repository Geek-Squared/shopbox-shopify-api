import { Injectable, Logger, NotFoundException, ConflictException } from '@nestjs/common';
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

  /**
   * Extract the Facebook post_id from a Facebook post URL.
   * Format: https://www.facebook.com/permalink.php?story_fbid=122106202934120930&id=61553627927615
   * Returns: pageId_storyFbid (e.g. "1060394393815353_122106202934120930")
   */
  extractFacebookPostId(postUrl: string, messengerPageId: string): string {
    try {
      const url = new URL(postUrl);
      const storyFbid = url.searchParams.get('story_fbid') || url.searchParams.get('fbid');
      if (storyFbid) {
        return `${messengerPageId}_${storyFbid}`;
      }

      // Handle format: /posts/122106202934120930
      const postsMatch = postUrl.match(/\/posts\/(\d+)/);
      if (postsMatch) {
        return `${messengerPageId}_${postsMatch[1]}`;
      }

      // Handle format: /PageName/posts/pfbid... (just use the last segment)
      const pfbidMatch = postUrl.match(/pfbid([a-zA-Z0-9]+)/);
      if (pfbidMatch) {
        // For pfbid URLs, we can't reliably extract the numeric ID
        // The merchant should use the story_fbid format
        throw new Error('Please use the permalink URL format with story_fbid parameter');
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
      throw new ConflictException(`Could not extract Facebook post ID: ${e.message}`);
    }
  }

  /**
   * Create a new post-to-product mapping.
   */
  async createMapping(merchantId: string, data: {
    postUrl: string;
    platform: 'facebook' | 'instagram';
    shopifyProductId: string;
  }) {
    const merchant = await this.shopifyRepo.findById(merchantId);
    if (!merchant) throw new NotFoundException('Merchant not found');

    let mediaId: string;

    if (data.platform === 'facebook') {
      if (!merchant.messengerPageId) {
        throw new ConflictException('Facebook Messenger is not connected. Connect it first.');
      }
      mediaId = this.extractFacebookPostId(data.postUrl, merchant.messengerPageId);
    } else {
      // Instagram: for now, accept the media_id directly or extract from URL
      // TODO: Add Instagram oEmbed/Graph API lookup when needed
      mediaId = data.postUrl;
    }

    // Fetch product title from Shopify for caching
    let productTitle = 'Unknown Product';
    try {
      const product = await this.shopifyApi.getProduct(merchant.shop, data.shopifyProductId);
      productTitle = product?.title || 'Unknown Product';
    } catch (e) {
      this.logger.warn(`Could not fetch product title: ${e.message}`);
    }

    // Upsert to handle re-linking the same post to a different product
    const mapping = await this.prisma.postProductMapping.upsert({
      where: {
        merchantId_mediaId: { merchantId, mediaId },
      },
      create: {
        merchantId,
        platform: data.platform,
        postUrl: data.postUrl,
        mediaId,
        shopifyProductId: data.shopifyProductId,
        productTitle,
      },
      update: {
        shopifyProductId: data.shopifyProductId,
        productTitle,
        postUrl: data.postUrl,
        isActive: true,
      },
    });

    this.logger.log(`✅ Mapped post ${mediaId} → product "${productTitle}" (${data.shopifyProductId})`);
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
  async updateMapping(merchantId: string, mappingId: string, data: Partial<{
    shopifyProductId: string;
    productTitle: string;
    isActive: boolean;
  }>) {
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
