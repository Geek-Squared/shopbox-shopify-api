import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyApiService } from './shopify-api.service';
import { ConfigService } from '@nestjs/config';
export declare const BILLING_PLANS: {
    BASIC: {
        name: string;
        amount: number;
        currencyCode: string;
        interval: string;
        trialDays: number;
    };
    PRO: {
        name: string;
        amount: number;
        currencyCode: string;
        interval: string;
        trialDays: number;
    };
};
export declare class ShopifyBillingService {
    private readonly prisma;
    private readonly shopifyApi;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, shopifyApi: ShopifyApiService, config: ConfigService);
    createSubscription(shop: string, plan: 'BASIC' | 'PRO', mock?: boolean): Promise<{
        confirmationUrl: any;
        subscriptionId: any;
    }>;
    verifyAndActivateSubscription(shop: string, plan: string, chargeId: string): Promise<boolean>;
    checkActivePlan(merchantId: string): Promise<boolean>;
}
