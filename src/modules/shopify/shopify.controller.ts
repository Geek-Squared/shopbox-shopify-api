import {
  Controller,
  Get,
  Post,
  Query,
  Res,
  UnauthorizedException,
  Body,
  Headers,
  UseGuards,
  Logger,
  RawBody,
  HttpCode,
  HttpException,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response, Request } from 'express';
import { ShopifyService } from './shopify.service';
import { ShopifyRepository } from './shopify.repository';
import { ShopifyApiService } from './shopify-api.service';
import { ShopifyBillingService } from './shopify-billing.service';
import { ConfigService } from '@nestjs/config';
import { ShopifyAuthGuard } from './guards/shopify-auth.guard';
import { CurrentShop } from './decorators/current-shop.decorator';
import { PrismaService } from '../../prisma/prisma.service';

@ApiTags('Shopify')
@Controller('shopify')
export class ShopifyController {
  private readonly logger = new Logger(ShopifyController.name);

  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly repository: ShopifyRepository,
    private readonly config: ConfigService,
    private readonly shopifyApiService: ShopifyApiService,
    private readonly billingService: ShopifyBillingService,
    private readonly prisma: PrismaService,
  ) {}

  @ApiOperation({ summary: 'Start Shopify OAuth flow' })
  @Get('auth')
  async auth(
    @Query('shop') shop: string,
    @Query('plan') plan: string,
    @Res() res: Response,
  ) {
    if (!shop) {
      throw new UnauthorizedException('Shop parameter is required');
    }
    const authUrl = this.shopifyService.generateAuthUrl(shop, plan || 'FREE');
    return res.redirect(authUrl);
  }

  @ApiOperation({ summary: 'Shopify OAuth callback' })
  @Get('auth/callback')
  async callback(
    @Query('code') code: string,
    @Query('shop') shop: string,
    @Query('state') state: string,
    @Query('hmac') hmac: string,
    @Query() query: Record<string, string>,
    @Res() res: Response,
  ) {
    // 1. Verify HMAC
    if (!this.shopifyService.verifyHmac(query, hmac)) {
      throw new UnauthorizedException('Invalid HMAC signature');
    }

    // 2. Verify State
    if (!this.shopifyService.validateStateNonce(state, shop)) {
      throw new UnauthorizedException('Invalid or expired state nonce');
    }

    // 3. Exchange code for access token
    const accessToken = await this.shopifyService.exchangeCodeForToken(
      shop,
      code,
    );

    // 4. Get shop info
    const shopInfo = await this.shopifyService.getShopInfo(shop, accessToken);

    // 5. Upsert Merchant
    await this.repository.upsertMerchant({
      shop,
      accessToken,
      scope: this.config.get<string>('SHOPIFY_SCOPES'),
      storeName: shopInfo.name,
    });

    // 6. Register Webhooks
    await this.shopifyService.registerWebhooks(shop, accessToken);

    // 7. Check desired plan from state
    const stateData = this.shopifyService.getAndVerifyState(state, shop);
    const chosenPlan = stateData?.plan || 'FREE';

    // 8. subscription check - only paid plans trigger billing
    const merchant = await this.repository.findByShop(shop);
    const hasActiveSubscription =
      merchant?.planStatus === 'ACTIVE' || merchant?.planStatus === 'TRIAL';

    if (!hasActiveSubscription && chosenPlan !== 'FREE') {
      this.logger.log(`Initiating ${chosenPlan} billing flow for shop: ${shop}`);
      try {
        const { confirmationUrl } = await this.billingService.createSubscription(
          shop,
          chosenPlan as any,
        );
        if (confirmationUrl) {
          return res.redirect(confirmationUrl);
        }
      } catch (billingErr) {
        this.logger.error(`Billing creation failed: ${billingErr.message}`);
      }
    } else if (chosenPlan === 'FREE') {
      // Set merchant to FREE plan explicitly if they chose it and no other active plan exists
      if (!hasActiveSubscription) {
        await this.prisma.shopifyMerchant.update({
          where: { shop },
          data: {
            planName: 'FREE',
            planStatus: 'ACTIVE',
          },
        });
      }
    }

    // 9. Redirect to app in Shopify admin
    const apiKey = this.config.get<string>('SHOPIFY_API_KEY');
    const storeShortName = shop.replace('.myshopify.com', '');
    return res.redirect(
      `https://admin.shopify.com/store/${storeShortName}/apps/${apiKey}`,
    );
  }

  private verifyShopifyWebhook(rawBody: Buffer, hmac: string): void {
    if (!hmac) throw new UnauthorizedException('Missing webhook HMAC');
    const isValid = this.shopifyService.verifyWebhookHmac(
      rawBody.toString('utf8'),
      hmac,
    );
    if (!isValid) throw new UnauthorizedException('Invalid webhook HMAC');
  }

  @ApiOperation({ summary: 'Shopify uninstalled webhook' })
  @Post('webhooks/app/uninstalled')
  async onUninstalled(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-shop-domain') shop: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    this.logger.log(`Received uninstall webhook for shop: ${shop}`);
    await this.shopifyService.handleUninstall(shop);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Shopify order created webhook' })
  @Post('webhooks/orders/create')
  async onOrderCreated(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-shop-domain') shop: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    this.logger.log(`Received Shopify order webhook: ${body.id}`);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Shopify product update webhook' })
  @Post('webhooks/products/update')
  async onProductUpdate(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-shop-domain') shop: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    this.logger.log(`Received Shopify product update webhook for shop: ${shop}`);
    this.shopifyApiService.clearCache(shop);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Shopify shop update webhook' })
  @Post('webhooks/shop/update')
  async onShopUpdate(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-shop-domain') shop: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    this.logger.log(`Received Shopify shop update webhook for shop: ${shop}`);
    await this.repository.partialUpdate(shop, { storeName: body.name });
    return { status: 'ok' };
  }

  // --- CENTRALIZED COMPLIANCE WEBHOOK ---
  // Shopify hits /api/shopify/webhooks to test HMAC and send GDPR requests

  @ApiOperation({ summary: 'Centralized Shopify Compliance Webhook' })
  @Post('webhooks')
  @HttpCode(200)
  async handleComplianceWebhook(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-topic') topic: string,
    @Headers('x-shopify-shop-domain') shop: string,
    @Req() req: Request & { rawBody: Buffer },
  ) {
    const rawBody = req.rawBody;
    const body = req.body;

    this.logger.log(`Received Shopify webhook topic: ${topic} for shop: ${shop}`);

    // Validate HMAC
    if (!hmac || !rawBody) {
      this.logger.warn(`Missing HMAC or rawBody for topic: ${topic}`);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const isValid = this.shopifyService.verifyWebhookHmac(
      rawBody.toString('utf8'),
      hmac,
    );
    if (!isValid) {
      this.logger.warn(`Invalid HMAC signature for topic: ${topic}`);
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    // Route to the right handler based on topic
    switch (topic) {
      case 'customers/data_request':
        return this.onCustomerDataRequest(hmac, rawBody, body);
      case 'customers/redact':
        return this.onCustomerRedact(hmac, rawBody, body);
      case 'shop/redact':
        return this.onShopRedact(hmac, rawBody, body);
      case 'app/uninstalled':
        return this.onUninstalled(hmac, shop, rawBody, body);
      default:
        this.logger.debug(`Unhandled webhook topic: ${topic}`);
        return { received: true };
    }
  }

  // --- MANDATORY GDPR WEBHOOKS ---
  // Required for Shopify App Store Approval
  // Note: These can still be called individually if configured specifically, 
  // but handleComplianceWebhook is the preferred entry point now.

  @ApiOperation({ summary: 'GDPR: Customer data request' })
  @Post('webhooks/customers/data_request')
  async onCustomerDataRequest(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    const phone = body.customer?.phone;
    const email = body.customer?.email;
    this.logger.log(
      `GDPR: Customer data request for ${email} (${phone}) from shop ${body.shop_domain}`,
    );

    // Collect all data we hold on this customer (identified by phone number)
    if (phone) {
      const buyer = await this.prisma.buyer.findUnique({
        where: { phoneNumber: phone },
        include: { orders: { include: { items: true, payment: true } } },
      });
      const botSession = await this.prisma.botSession.findUnique({
        where: { phoneNumber: phone },
      });
      const otpCodes = await this.prisma.otpCode.findMany({
        where: { phoneNumber: phone },
      });
      const messages = await this.prisma.whatsappMessage.findMany({
        where: { OR: [{ toNumber: phone }, { fromNumber: phone }] },
      });

      this.logger.log(
        `GDPR data export for ${phone}: buyer=${!!buyer}, orders=${buyer?.orders?.length ?? 0}, botSession=${!!botSession}, otpCodes=${otpCodes.length}, messages=${messages.length}`,
      );
    }

    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'GDPR: Customer redact' })
  @Post('webhooks/customers/redact')
  async onCustomerRedact(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    const phone = body.customer?.phone;
    const email = body.customer?.email;
    this.logger.log(
      `GDPR: Customer redact for ${email} (${phone}) from shop ${body.shop_domain}`,
    );

    if (phone) {
      // Anonymize Buyer personal fields (keep record for order integrity)
      await this.prisma.buyer.updateMany({
        where: { phoneNumber: phone },
        data: { fullName: '[redacted]', city: null },
      });

      // Anonymize personal fields on Orders (keep order records for accounting)
      const buyer = await this.prisma.buyer.findUnique({
        where: { phoneNumber: phone },
      });
      if (buyer) {
        await this.prisma.order.updateMany({
          where: { buyerId: buyer.id },
          data: {
            customerName: '[redacted]',
            customerPhone: '[redacted]',
            customerEmail: null,
            deliveryAddress: null,
          },
        });
      }

      // Delete bot session and OTP codes (no business value)
      await this.prisma.botSession.deleteMany({ where: { phoneNumber: phone } });
      await this.prisma.otpCode.deleteMany({ where: { phoneNumber: phone } });

      // Anonymize message phone numbers
      await this.prisma.whatsappMessage.updateMany({
        where: { toNumber: phone },
        data: { toNumber: '[redacted]' },
      });
      await this.prisma.whatsappMessage.updateMany({
        where: { fromNumber: phone },
        data: { fromNumber: '[redacted]' },
      });

      this.logger.log(`GDPR: Customer data redacted for ${phone}`);
    }

    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'GDPR: Shop redact' })
  @Post('webhooks/shop/redact')
  async onShopRedact(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @RawBody() rawBody: Buffer,
    @Body() body: any,
  ) {
    this.verifyShopifyWebhook(rawBody, hmac);
    const shop = body.shop_domain;
    this.logger.log(`GDPR: Shop redact for ${shop}`);

    const merchant = await this.prisma.shopifyMerchant.findUnique({
      where: { shop },
    });

    if (merchant) {
      // Delete all merchant-specific Meta data
      await this.prisma.commentDmLog.deleteMany({
        where: { merchantId: merchant.id },
      });
      await this.prisma.commentTrigger.deleteMany({
        where: { merchantId: merchant.id },
      });
      await this.prisma.postProductMapping.deleteMany({
        where: { merchantId: merchant.id },
      });

      // Delete the merchant record itself
      await this.prisma.shopifyMerchant.delete({ where: { shop } });

      this.logger.log(`GDPR: Shop data deleted for ${shop}`);
    }

    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Get current merchant data' })
  @UseGuards(ShopifyAuthGuard)
  @Get('merchant')
  async getMerchant(@CurrentShop() shop: string) {
    const merchant = await this.repository.findByShop(shop);
    if (!merchant) {
      throw new UnauthorizedException('Merchant not found');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { accessToken, ...data } = merchant;
    return data;
  }
}
