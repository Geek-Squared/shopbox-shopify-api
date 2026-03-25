import { Module } from '@nestjs/common';
import { ShopifyController } from './shopify.controller';
import { ShopifyBillingController } from './shopify-billing.controller';
import { ShopifyService } from './shopify.service';
import { ShopifyBillingService } from './shopify-billing.service';
import { ShopifyRepository } from './shopify.repository';
import { ShopifyApiService } from './shopify-api.service';

@Module({
  controllers: [ShopifyController, ShopifyBillingController],
  providers: [
    ShopifyService,
    ShopifyBillingService,
    ShopifyRepository,
    ShopifyApiService,
  ],
  exports: [
    ShopifyService,
    ShopifyBillingService,
    ShopifyRepository,
    ShopifyApiService,
  ],
})
export class ShopifyModule {}
