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
        isActive: boolean;
        updatedAt: Date;
        merchantId: string;
        platform: string;
        postUrl: string | null;
        mediaId: string;
        shopifyProductId: string;
        productTitle: string | null;
        createdAt: Date;
    }>;
    list(req: any): Promise<{
        id: string;
        isActive: boolean;
        updatedAt: Date;
        merchantId: string;
        platform: string;
        postUrl: string | null;
        mediaId: string;
        shopifyProductId: string;
        productTitle: string | null;
        createdAt: Date;
    }[]>;
    update(req: any, id: string, body: any): Promise<{
        id: string;
        isActive: boolean;
        updatedAt: Date;
        merchantId: string;
        platform: string;
        postUrl: string | null;
        mediaId: string;
        shopifyProductId: string;
        productTitle: string | null;
        createdAt: Date;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        isActive: boolean;
        updatedAt: Date;
        merchantId: string;
        platform: string;
        postUrl: string | null;
        mediaId: string;
        shopifyProductId: string;
        productTitle: string | null;
        createdAt: Date;
    }>;
}
