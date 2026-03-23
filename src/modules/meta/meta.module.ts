import { Module } from '@nestjs/common';
import { MetaOauthController } from './meta-oauth.controller';
import { MetaOauthService } from './meta-oauth.service';
import { MetaSenderService } from './meta-sender.service';
import { MetaWebhookController } from './meta-webhook.controller';
import { InstagramBotService } from './instagram-bot.service';
import { MessengerBotService } from './messenger-bot.service';
import { CommentTriggerService } from './comment-trigger.service';
import { CommentTriggerController } from './comment-trigger.controller';
import { PostMappingService } from './post-mapping.service';
import { PostMappingController } from './post-mapping.controller';
import { ShopifyModule } from '../shopify/shopify.module';
import { PrismaModule } from '../../prisma/prisma.module';
import { WhatsappModule } from '../whatsapp/whatsapp.module';

@Module({
  imports: [ShopifyModule, PrismaModule, WhatsappModule],
  controllers: [
    MetaOauthController,
    MetaWebhookController,
    CommentTriggerController,
    PostMappingController,
  ],
  providers: [
    MetaOauthService,
    MetaSenderService,
    InstagramBotService,
    MessengerBotService,
    CommentTriggerService,
    PostMappingService,
  ],
  exports: [MetaOauthService, MetaSenderService, CommentTriggerService, PostMappingService],
})
export class MetaModule {}
