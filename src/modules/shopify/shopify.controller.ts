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
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { ShopifyService } from './shopify.service';
import { ShopifyRepository } from './shopify.repository';
import { ShopifyApiService } from './shopify-api.service';
import { ConfigService } from '@nestjs/config';
import { ShopifyAuthGuard } from './guards/shopify-auth.guard';
import { CurrentShop } from './decorators/current-shop.decorator';

@ApiTags('Shopify')
@Controller('shopify')
export class ShopifyController {
  private readonly logger = new Logger(ShopifyController.name);

  constructor(
    private readonly shopifyService: ShopifyService,
    private readonly repository: ShopifyRepository,
    private readonly config: ConfigService,
    private readonly shopifyApiService: ShopifyApiService,
  ) {}


  @ApiOperation({ summary: 'Start Shopify OAuth flow' })
  @Get('auth')
  async auth(@Query('shop') shop: string, @Res() res: Response) {
    if (!shop) {
      throw new UnauthorizedException('Shop parameter is required');
    }
    const authUrl = this.shopifyService.generateAuthUrl(shop);
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

    // 7. Redirect to app in Shopify admin
    const apiKey = this.config.get<string>('SHOPIFY_API_KEY');
    const storeShortName = shop.replace('.myshopify.com', '');
    return res.redirect(`https://admin.shopify.com/store/${storeShortName}/apps/${apiKey}`);
  }

  @ApiOperation({ summary: 'Shopify uninstalled webhook' })
  @Post('webhooks/app/uninstalled')
  async onUninstalled(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Headers('x-shopify-shop-domain') shop: string,
    @Body() body: any,
  ) {
    this.logger.log(`Received uninstall webhook for shop: ${shop}`);
    // Note: In production, verify HMAC using raw body.
    await this.shopifyService.handleUninstall(shop);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Shopify order created webhook' })
  @Post('webhooks/orders/create')
  async onOrderCreated(
    @Headers('x-shopify-hmac-sha256') hmac: string,
    @Body() body: any,
  ) {
    this.logger.log(`Received Shopify order webhook: ${body.id}`);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Shopify product update webhook' })
  @Post('webhooks/products/update')
  async onProductUpdate(
    @Headers('x-shopify-shop-domain') shop: string,
    @Body() body: any,
  ) {
    this.logger.log(`Received Shopify product update webhook for shop: ${shop}`);
    this.shopifyApiService.clearCache(shop);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'Shopify shop update webhook' })
  @Post('webhooks/shop/update')
  async onShopUpdate(
    @Headers('x-shopify-shop-domain') shop: string,
    @Body() body: any,
  ) {
    this.logger.log(`Received Shopify shop update webhook for shop: ${shop}`);
    await this.repository.partialUpdate(shop, {
      storeName: body.name,
    });
    return { status: 'ok' };
  }

  // --- MANDATORY GDPR WEBHOOKS ---
  // Required for Shopify App Store Approval

  @ApiOperation({ summary: 'GDPR: Customer data request' })
  @Post('webhooks/customers/data_request')
  async onCustomerDataRequest(@Body() body: any) {
    this.logger.log(`GDPR: Customer data request received for ${body.customer?.email}`);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'GDPR: Customer redact' })
  @Post('webhooks/customers/redact')
  async onCustomerRedact(@Body() body: any) {
    this.logger.log(`GDPR: Customer redact request received for ${body.customer?.email}`);
    return { status: 'ok' };
  }

  @ApiOperation({ summary: 'GDPR: Shop redact' })
  @Post('webhooks/shop/redact')
  async onShopRedact(@Headers('x-shopify-shop-domain') shop: string) {
    this.logger.log(`GDPR: Shop redact request received for ${shop}`);
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
