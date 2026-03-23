import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from './shopify.repository';
export declare class ShopifyService {
    private readonly config;
    private readonly repository;
    private readonly logger;
    private stateNonces;
    constructor(config: ConfigService, repository: ShopifyRepository);
    generateAuthUrl(shop: string): string;
    verifyHmac(params: Record<string, string>, hmac: string): boolean;
    verifyWebhookHmac(rawBody: string, hmac: string): boolean;
    validateStateNonce(nonce: string, shop: string): boolean;
    exchangeCodeForToken(shop: string, code: string): Promise<string>;
    getShopInfo(shop: string, token: string): Promise<any>;
    registerWebhooks(shop: string, token: string): Promise<void>;
    handleUninstall(shop: string): Promise<void>;
}
