import { Response } from 'express';
import { ShopifyService } from './shopify.service';
import { ShopifyRepository } from './shopify.repository';
import { ShopifyApiService } from './shopify-api.service';
import { ConfigService } from '@nestjs/config';
export declare class ShopifyController {
    private readonly shopifyService;
    private readonly repository;
    private readonly config;
    private readonly shopifyApiService;
    private readonly logger;
    constructor(shopifyService: ShopifyService, repository: ShopifyRepository, config: ConfigService, shopifyApiService: ShopifyApiService);
    auth(shop: string, res: Response): Promise<void>;
    callback(code: string, shop: string, state: string, hmac: string, query: Record<string, string>, res: Response): Promise<void>;
    onUninstalled(hmac: string, shop: string, body: any): Promise<{
        status: string;
    }>;
    onOrderCreated(hmac: string, body: any): Promise<{
        status: string;
    }>;
    onProductUpdate(shop: string, body: any): Promise<{
        status: string;
    }>;
    onShopUpdate(shop: string, body: any): Promise<{
        status: string;
    }>;
    onCustomerDataRequest(body: any): Promise<{
        status: string;
    }>;
    onCustomerRedact(body: any): Promise<{
        status: string;
    }>;
    onShopRedact(shop: string): Promise<{
        status: string;
    }>;
    getMerchant(shop: string): Promise<{
        id: string;
        storeSlug: string | null;
        updatedAt: Date;
        shop: string;
        scope: string;
        storeName: string | null;
        whatsappConnected: boolean;
        whatsappNumber: string | null;
        whatsappPhoneId: string | null;
        whatsappToken: string | null;
        instagramConnected: boolean;
        instagramToken: string | null;
        instagramAccountId: string | null;
        instagramUsername: string | null;
        messengerConnected: boolean;
        messengerToken: string | null;
        messengerPageId: string | null;
        messengerPageName: string | null;
        isActive: boolean;
        installedAt: Date;
        uninstalledAt: Date | null;
        planName: string | null;
        planStatus: string | null;
        planChargeId: string | null;
        planTrialExpiresAt: Date | null;
    }>;
}
