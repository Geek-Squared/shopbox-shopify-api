import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from '../shopify/shopify.repository';
export declare class MetaOauthService {
    private readonly config;
    private readonly shopifyRepository;
    private readonly logger;
    constructor(config: ConfigService, shopifyRepository: ShopifyRepository);
    getMessengerAuthUrl(shop: string): string;
    getInstagramAuthUrl(shop: string): string;
    exchangeCodeForToken(code: string, redirectUriSuffix: string): Promise<string>;
    getPages(userToken: string): Promise<{
        id: string;
        name: string;
        access_token: string;
        category: string;
        instagram_business_account?: {
            id: string;
            username: string;
        };
    }[]>;
    getInstagramAccount(pageId: string, pageToken: string): Promise<{
        id: any;
        username: any;
    }>;
    subscribePageToWebhook(pageId: string, pageToken: string): Promise<boolean>;
    connectMessenger(shop: string, code: string): Promise<{
        connected: boolean;
        pageName: string;
    }>;
    connectInstagram(shop: string, code: string): Promise<{
        connected: boolean;
        username: any;
    }>;
    disconnectMessenger(shop: string): Promise<{
        id: string;
        storeSlug: string | null;
        updatedAt: Date;
        shop: string;
        accessToken: string;
        scope: string;
        storeName: string | null;
        whatsappConnected: boolean;
        whatsappNumber: string | null;
        whatsappPhoneId: string | null;
        whatsappToken: string | null;
        instagramConnected: boolean;
        instagramToken: string | null;
        instagramAccountId: string | null;
        messengerConnected: boolean;
        messengerToken: string | null;
        messengerPageId: string | null;
        isActive: boolean;
        installedAt: Date;
        uninstalledAt: Date | null;
        instagramUsername: string | null;
        messengerPageName: string | null;
        planChargeId: string | null;
        planName: string | null;
        planStatus: string | null;
        planTrialExpiresAt: Date | null;
    }>;
    disconnectInstagram(shop: string): Promise<{
        id: string;
        storeSlug: string | null;
        updatedAt: Date;
        shop: string;
        accessToken: string;
        scope: string;
        storeName: string | null;
        whatsappConnected: boolean;
        whatsappNumber: string | null;
        whatsappPhoneId: string | null;
        whatsappToken: string | null;
        instagramConnected: boolean;
        instagramToken: string | null;
        instagramAccountId: string | null;
        messengerConnected: boolean;
        messengerToken: string | null;
        messengerPageId: string | null;
        isActive: boolean;
        installedAt: Date;
        uninstalledAt: Date | null;
        instagramUsername: string | null;
        messengerPageName: string | null;
        planChargeId: string | null;
        planName: string | null;
        planStatus: string | null;
        planTrialExpiresAt: Date | null;
    }>;
    getFacebookPosts(shop: string): Promise<any>;
    getInstagramPosts(shop: string): Promise<any>;
}
