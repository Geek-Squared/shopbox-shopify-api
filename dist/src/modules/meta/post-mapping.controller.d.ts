import { PostMappingService } from './post-mapping.service';
export declare class PostMappingController {
    private readonly postMappingService;
    constructor(postMappingService: PostMappingService);
    create(req: any, body: {
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
    list(req: any): Promise<{
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
    update(req: any, id: string, body: any): Promise<{
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
    remove(req: any, id: string): Promise<{
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
