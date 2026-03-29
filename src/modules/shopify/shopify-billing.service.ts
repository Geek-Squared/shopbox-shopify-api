import {
  Injectable,
  Logger,
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyApiService } from './shopify-api.service';
import { ConfigService } from '@nestjs/config';

export const BILLING_PLANS = {
  FREE: {
    name: 'Free',
    amount: 0,
    currencyCode: 'USD',
    interval: 'EVERY_30_DAYS',
    trialDays: 0,
    dmLimit: 100,
  },
  STARTER: {
    name: 'Starter',
    amount: 19.0,
    currencyCode: 'USD',
    interval: 'EVERY_30_DAYS',
    trialDays: 7,
    dmLimit: 1000,
  },
  PRO: {
    name: 'Pro',
    amount: 49.0,
    currencyCode: 'USD',
    interval: 'EVERY_30_DAYS',
    trialDays: 14,
    dmLimit: 5000,
  },
  ENTERPRISE: {
    name: 'Enterprise',
    amount: 149.0,
    currencyCode: 'USD',
    interval: 'EVERY_30_DAYS',
    trialDays: 30,
    dmLimit: 25000,
  },
};

@Injectable()
export class ShopifyBillingService {
  private readonly logger = new Logger(ShopifyBillingService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly shopifyApi: ShopifyApiService,
    private readonly config: ConfigService,
  ) {}

  async createSubscription(shop: string, plan: 'BASIC' | 'PRO', mock = false) {
    const planConfig = BILLING_PLANS[plan];
    if (!planConfig) throw new BadRequestException('Invalid plan');

    // 🚀 DEV MOCK MODE: Bypass Shopify and update DB directly
    if (mock || process.env.SHOPIFY_MOCK_BILLING === 'true') {
      await this.prisma.shopifyMerchant.update({
        where: { shop },
        data: {
          planName: plan,
          planStatus: 'ACTIVE',
          planChargeId: `gid://shopify/AppSubscription/MOCK_${Date.now()}`,
        },
      });
      return { confirmationUrl: null, subscriptionId: 'MOCK' };
    }

    const appUrl = this.config.get<string>('APP_URL');
    const returnUrl = `${appUrl}/api/shopify/billing/callback?shop=${shop}&plan=${plan}`;

    const query = `
      mutation appSubscriptionCreate($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $test: Boolean, $trialDays: Int) {
        appSubscriptionCreate(name: $name, lineItems: $lineItems, returnUrl: $returnUrl, test: $test, trialDays: $trialDays) {
          appSubscription { id }
          confirmationUrl
          userErrors { field message }
        }
      }
    `;

    const variables = {
      name: planConfig.name,
      test: process.env.NODE_ENV !== 'production', // Test mode in dev
      returnUrl,
      trialDays: planConfig.trialDays,
      lineItems: [
        {
          plan: {
            appRecurringPricingDetails: {
              price: {
                amount: planConfig.amount,
                currencyCode: planConfig.currencyCode,
              },
              interval: planConfig.interval,
            },
          },
        },
      ],
    };

    const data = await this.shopifyApi.graphqlFetch(shop, query, variables);
    const result = data.appSubscriptionCreate;

    if (result.userErrors?.length > 0) {
      throw new BadRequestException(
        `Shopify Billing Error: ${JSON.stringify(result.userErrors)}`,
      );
    }

    return {
      confirmationUrl: result.confirmationUrl,
      subscriptionId: result.appSubscription.id,
    };
  }

  async verifyAndActivateSubscription(
    shop: string,
    plan: string,
    chargeId: string,
  ) {
    // 🛠️ Ensure chargeId is in GID format if it's just a number
    const gid = chargeId.startsWith('gid://')
      ? chargeId
      : `gid://shopify/AppSubscription/${chargeId}`;

    const query = `
      query getSubscription($id: ID!) {
        node(id: $id) {
          ... on AppSubscription {
            status
            name
          }
        }
      }
    `;

    const data = await this.shopifyApi.graphqlFetch(shop, query, { id: gid });
    const subscription = data.node;

    if (!subscription || subscription.status !== 'ACTIVE') {
      this.logger.warn(
        `Subscription ${chargeId} for ${shop} is not active: ${subscription?.status}`,
      );
      // In some cases, status might stay PENDING if the redirect didn't finish, but usually it's ACTIVE here.
    }

    // Update DB
    await this.prisma.shopifyMerchant.update({
      where: { shop },
      data: {
        planName: plan,
        planStatus: subscription?.status || 'ACTIVE',
        planChargeId: chargeId,
      },
    });

    return true;
  }

  async checkActivePlan(merchantId: string): Promise<boolean> {
    const merchant = await this.prisma.shopifyMerchant.findUnique({
      where: { id: merchantId },
    });

    if (!merchant) return false;

    // Optional: Add logic to check trial expiration or hit Shopify API to confirm status if skeptical
    return (
      merchant.planStatus === 'ACTIVE' ||
      (merchant.planName === 'STARTER' && !!merchant.planChargeId)
    );
  }

  async resetMonthlyUsage() {
    this.logger.log('Resetting monthly DM usage for eligible merchants...');
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const result = await this.prisma.shopifyMerchant.updateMany({
      where: {
        dmPeriodStart: { lt: thirtyDaysAgo },
      },
      data: {
        dmSentThisMonth: 0,
        dmPeriodStart: new Date(),
      },
    });

    this.logger.log(`Successfully reset DM count for ${result.count} merchants.`);
    return result.count;
  }
}
