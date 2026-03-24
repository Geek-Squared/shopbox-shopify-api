import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from './shopify.repository';
export declare class ShopifyApiService {
    private readonly config;
    private readonly repository;
    private readonly logger;
    private productCache;
    private collectionCache;
    constructor(config: ConfigService, repository: ShopifyRepository);
    private shopifyFetch;
    private stripHtml;
    graphqlFetch(shop: string, query: string, variables?: any): Promise<any>;
    getProducts(shop: string, skipCache?: boolean): Promise<any>;
    getProduct(shop: string, productId: string): Promise<{
        id: any;
        title: any;
        handle: any;
        onlineStoreUrl: any;
        description: string;
        price: number;
        available: any;
        totalInventory: any;
        primaryImage: any;
        images: any;
        variants: any;
        productType: any;
        tags: any[];
    }>;
    getCollections(shop: string): Promise<any>;
    getProductsByCollection(shop: string, collectionId: string): Promise<any>;
    createOrder(shop: string, data: {
        lineItems: {
            variantId: string;
            quantity: number;
        }[];
        customerFirstName: string;
        customerPhone: string;
        customerEmail?: string;
        shippingAddress: string;
        note?: string;
        paymentMethod: string;
    }): Promise<{
        id: any;
        orderNumber: any;
        totalPrice: any;
        currency: any;
        invoiceUrl: any;
    }>;
    getShopInfo(shop: string): Promise<{
        name: any;
        email: any;
        currency: any;
        timezone: any;
        countryCode: any;
        planName: any;
    }>;
    registerWebhook(shop: string, topic: string): Promise<any>;
    clearCache(shop: string): void;
    private mapGqlProduct;
}
