import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  UseGuards,
  Request,
  Res,
  Logger,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { ShopifyBillingService } from './shopify-billing.service';
import { ShopifyAuthGuard } from './guards/shopify-auth.guard';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@ApiTags('Shopify Billing')
@Controller('shopify/billing')
export class ShopifyBillingController {
  private readonly logger = new Logger(ShopifyBillingController.name);

  constructor(
    private readonly billingService: ShopifyBillingService,
    private readonly config: ConfigService,
  ) {}

  @ApiOperation({ summary: 'Check current subscription status' })
  @ApiBearerAuth()
  @UseGuards(ShopifyAuthGuard)
  @Get('status')
  async status(@Request() req: any) {
    const merchant = req.merchant;
    return {
      planName: merchant.planName,
      status: merchant.planStatus,
      isTrial:
        !!merchant.planTrialExpiresAt &&
        new Date(merchant.planTrialExpiresAt) > new Date(),
    };
  }

  @ApiOperation({ summary: 'Create a new subscription' })
  @ApiBearerAuth()
  @UseGuards(ShopifyAuthGuard)
  @Post('subscribe')
  async subscribe(
    @Body() body: { plan: 'BASIC' | 'PRO'; mock?: boolean },
    @Request() req: any,
  ) {
    const shop = req.merchant.shop;
    return this.billingService.createSubscription(shop, body.plan, body.mock);
  }

  @ApiOperation({ summary: 'Handle billing confirmation callback' })
  @Get('callback')
  async callback(
    @Query('shop') shop: string,
    @Query('plan') plan: string,
    @Query('charge_id') chargeId: string,
    @Res() res: Response,
  ) {
    this.logger.log(
      `Received billing callback: shop=${shop}, plan=${plan}, charge_id=${chargeId}`,
    );

    if (!shop || !chargeId) {
      this.logger.error(
        `Missing callback params! shop=${shop}, charge_id=${chargeId}`,
      );
      return res.status(400).send('Missing shop or charge_id');
    }

    try {
      await this.billingService.verifyAndActivateSubscription(
        shop,
        plan,
        chargeId,
      );
      this.logger.log(`Successfully activated ${plan} plan for ${shop}`);

      // Redirect back to Shopify Admin correctly
      const apiKey =
        this.config.get<string>('SHOPIFY_API_KEY') || 'shopbox-dev-1';
      const storeShortName = shop.replace('.myshopify.com', '');
      const redirectUrl = `https://admin.shopify.com/store/${storeShortName}/apps/${apiKey}`;

      return res.redirect(redirectUrl);
    } catch (error) {
      return res
        .status(500)
        .send(`Billing Verification Failed: ${error.message}`);
    }
  }
}
