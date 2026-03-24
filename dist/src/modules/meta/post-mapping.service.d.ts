import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
export declare class PostMappingService {
    private readonly prisma;
    private readonly shopifyApi;
    private readonly shopifyRepo;
    private readonly logger;
    constructor(prisma: PrismaService, shopifyApi: ShopifyApiService, shopifyRepo: ShopifyRepository);
    private normalizeFacebookUrl;
    extractFacebookPostId(postUrl: string, messengerPageId: string): string;
    createMapping(merchantId: string, data: {
        postUrl: string;
        platform: 'facebook' | 'instagram';
        shopifyProductId: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        mediaId: string;
        platform: string;
        postUrl: string | null;
        shopifyProductId: string;
        productTitle: string | null;
    }>;
    listMappings(merchantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        mediaId: string;
        platform: string;
        postUrl: string | null;
        shopifyProductId: string;
        productTitle: string | null;
    }[]>;
    updateMapping(merchantId: string, mappingId: string, data: Partial<{
        shopifyProductId: string;
        productTitle: string;
        isActive: boolean;
    }>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        mediaId: string;
        platform: string;
        postUrl: string | null;
        shopifyProductId: string;
        productTitle: string | null;
    }>;
    deleteMapping(merchantId: string, mappingId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        mediaId: string;
        platform: string;
        postUrl: string | null;
        shopifyProductId: string;
        productTitle: string | null;
    }>;
    findByMediaId(merchantId: string, mediaId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        mediaId: string;
        platform: string;
        postUrl: string | null;
        shopifyProductId: string;
        productTitle: string | null;
    }>;
}
