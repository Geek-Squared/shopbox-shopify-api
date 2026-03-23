import {
  Controller,
  Get,
  Post,
  Delete,
  Query,
  Res,
  Body,
  UseGuards,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { Response } from 'express';
import { MetaOauthService } from './meta-oauth.service';
import { ShopifyAuthGuard } from '../shopify/guards/shopify-auth.guard';
import { CurrentShop } from '../shopify/decorators/current-shop.decorator';

@ApiTags('Meta OAuth')
@Controller('meta/auth')
export class MetaOauthController {
  constructor(private readonly metaService: MetaOauthService) {}

  @ApiOperation({ summary: 'Initiate Messenger OAuth' })
  @Get('messenger')
  async messengerAuth(@Query('shop') shop: string, @Res() res: Response) {
    const url = this.metaService.getMessengerAuthUrl(shop);
    return res.redirect(url);
  }

  @ApiOperation({ summary: 'Messenger OAuth callback' })
  @Get('messenger/callback')
  async messengerCallback(
    @Query('code') code: string,
    @Query('state') shop: string,
    @Res() res: Response,
  ) {
    await this.metaService.connectMessenger(shop, code);
    return res.redirect(`https://${shop}/admin/apps/${process.env.SHOPIFY_API_KEY}/app/channels`);
  }

  @ApiOperation({ summary: 'Initiate Instagram OAuth' })
  @Get('instagram')
  async instagramAuth(@Query('shop') shop: string, @Res() res: Response) {
    const url = this.metaService.getInstagramAuthUrl(shop);
    return res.redirect(url);
  }

  @ApiOperation({ summary: 'Instagram OAuth callback' })
  @Get('instagram/callback')
  async instagramCallback(
    @Query('code') code: string,
    @Query('state') shop: string,
    @Res() res: Response,
  ) {
    await this.metaService.connectInstagram(shop, code);
    return res.redirect(`https://${shop}/admin/apps/${process.env.SHOPIFY_API_KEY}/app/channels`);
  }

  @ApiOperation({ summary: 'Manually select Messenger page' })
  @UseGuards(ShopifyAuthGuard)
  @Post('messenger/select-page')
  async selectMessengerPage(
    @CurrentShop() shop: string,
    @Body('pageId') pageId: string,
    @Body('pageToken') pageToken: string,
  ) {
    await this.metaService.subscribePageToWebhook(pageId, pageToken);
    // Note: Here we'd ideally verify this page belongs to the merchant via getPages
    // but assuming correct data from frontend for now.
    return { connected: true };
  }

  @ApiOperation({ summary: 'Disconnect Messenger' })
  @UseGuards(ShopifyAuthGuard)
  @Delete('messenger')
  async disconnectMessenger(@CurrentShop() shop: string) {
    await this.metaService.disconnectMessenger(shop);
    return { connected: false };
  }

  @ApiOperation({ summary: 'Disconnect Instagram' })
  @UseGuards(ShopifyAuthGuard)
  @Delete('instagram')
  async disconnectInstagram(@CurrentShop() shop: string) {
    await this.metaService.disconnectInstagram(shop);
    return { connected: false };
  }
}
