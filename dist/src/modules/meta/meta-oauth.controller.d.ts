import { Response } from 'express';
import { MetaOauthService } from './meta-oauth.service';
export declare class MetaOauthController {
    private readonly metaService;
    constructor(metaService: MetaOauthService);
    messengerAuth(shop: string, res: Response): Promise<void>;
    messengerCallback(code: string, shop: string, res: Response): Promise<void>;
    instagramAuth(shop: string, res: Response): Promise<void>;
    instagramCallback(code: string, shop: string, res: Response): Promise<void>;
    selectMessengerPage(shop: string, pageId: string, pageToken: string): Promise<{
        connected: boolean;
    }>;
    disconnectMessenger(shop: string): Promise<{
        connected: boolean;
    }>;
    disconnectInstagram(shop: string): Promise<{
        connected: boolean;
    }>;
    getFacebookPosts(shop: string): Promise<any>;
    getInstagramPosts(shop: string): Promise<any>;
}
