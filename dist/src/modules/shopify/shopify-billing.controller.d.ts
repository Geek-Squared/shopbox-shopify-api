import { ShopifyBillingService } from './shopify-billing.service';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
export declare class ShopifyBillingController {
    private readonly billingService;
    private readonly config;
    private readonly logger;
    constructor(billingService: ShopifyBillingService, config: ConfigService);
    status(req: any): Promise<{
        planName: any;
        status: any;
        isTrial: boolean;
    }>;
    subscribe(body: {
        plan: 'BASIC' | 'PRO';
        mock?: boolean;
    }, req: any): Promise<{
        confirmationUrl: any;
        subscriptionId: any;
    }>;
    callback(shop: string, plan: string, chargeId: string, res: Response): Promise<void | Response<any, Record<string, any>>>;
}
