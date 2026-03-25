import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Headers,
  UnauthorizedException,
  Logger,
  RawBody,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { InstagramBotService } from './instagram-bot.service';
import { MessengerBotService } from './messenger-bot.service';
import { CommentTriggerService } from './comment-trigger.service';
import * as crypto from 'crypto';

@ApiTags('Meta Webhook')
@Controller('meta/webhook')
export class MetaWebhookController {
  private readonly logger = new Logger(MetaWebhookController.name);

  constructor(
    private readonly config: ConfigService,
    private readonly repository: ShopifyRepository,
    private readonly prisma: PrismaService,
    private readonly igBot: InstagramBotService,
    private readonly msgBot: MessengerBotService,
    private readonly commentService: CommentTriggerService,
  ) {}

  @ApiOperation({ summary: 'Meta Webhook Verification' })
  @Get()
  verify(@Query() query: any) {
    const mode = query['hub.mode'] || query['hub_mode'];
    const token = query['hub.verify_token'] || query['hub_verify_token'];
    const challenge = query['hub.challenge'] || query['hub_challenge'];

    const verifyToken = this.config.get<string>('META_VERIFY_TOKEN');

    this.logger.debug(
      `Webhook Verification: mode=${mode}, token=${token}, expected=${verifyToken}`,
    );

    if (mode === 'subscribe' && token === verifyToken) {
      return challenge;
    }
    throw new UnauthorizedException('Webhook verification failed');
  }

  @ApiOperation({ summary: 'Handle Meta Webhook POST' })
  @Post()
  async handle(
    @Headers('x-hub-signature-256') signature: string,
    @Body() body: any,
    @RawBody() rawBody: Buffer,
  ) {
    if (!signature) {
      throw new UnauthorizedException('No signature found');
    }
    this.logger.debug(`Webhook payload: ${JSON.stringify(body, null, 2)}`);

    // signature verification using META_APP_SECRET
    const isValid = this.verifySignature(
      rawBody || JSON.stringify(body),
      signature,
    );
    if (!isValid && process.env.NODE_ENV === 'production') {
      throw new UnauthorizedException('Invalid signature');
    }

    const payload = body.entry?.[0];
    if (!payload) return { status: 'ok' };

    const change = payload.changes?.[0];
    const isInstagramComment = change?.field === 'comments';
    const isFacebookComment =
      change?.field === 'feed' &&
      change?.value?.item === 'comment' &&
      change?.value?.verb === 'add';

    // Instagram DMs can arrive in two formats depending on the API version/setup:
    // 1. New Cloud API format (payload.changes)
    // 2. Standard Graph API format (payload.messaging & object === 'instagram')
    const isInstagramDM =
      (change?.field === 'messages' &&
        change?.value?.messaging_product === 'instagram') ||
      (body.object === 'instagram' && !!payload.messaging);

    // Messenger detection
    const isMessenger = body.object === 'page' && !!payload.messaging;

    if (isFacebookComment) {
      this.handleFacebookComment(payload).catch((e) => this.logger.error(e));
    } else if (isInstagramComment) {
      this.handleInstagramComment(payload).catch((e) => this.logger.error(e));
    } else if (isInstagramDM) {
      await this.handleInstagram(payload);
    } else if (isMessenger) {
      await this.handleMessenger(payload);
    }

    return { status: 'ok' };
  }
  private async handleInstagramComment(entry: any) {
    const value = entry.changes[0].value;
    const commentId = value.id;
    const commentText = value.text;
    const fromId = value.from.id;
    const fromUsername = value.from.username;
    const mediaId = value.media.id;
    const igAccountId = entry.id;

    if (fromId === igAccountId) {
      this.logger.debug(`Ignoring comment from Instagram account itself`);
      return;
    }

    const merchants = await this.prisma.shopifyMerchant.findMany({
      where: { instagramAccountId: igAccountId },
      orderBy: { updatedAt: 'desc' },
    });

    const merchant =
      merchants.find((m) => !!m.accessToken && m.isActive) || merchants[0];

    if (merchant && merchant.instagramToken) {
      this.logger.log(
        `Routing IG comment "${commentText}" from @${fromUsername} to CommentTriggerService (Shop: ${merchant.shop})`,
      );
      this.commentService.handleInstagramComment({
        merchantId: merchant.id,
        commentText,
        commenterId: fromId,
        commenterUsername: fromUsername,
        mediaId,
        commentId,
        instagramToken: merchant.instagramToken,
      });
    } else {
      this.logger.warn(
        `No connected merchant found for Instagram account ${igAccountId}`,
      );
    }
  }

  private async handleFacebookComment(entry: any) {
    const value = entry.changes[0].value;
    const commentId = value.comment_id;
    const commentText = value.message;
    const fromId = value.from?.id;
    const fromName = value.from?.name;
    const postId = value.post_id;
    const pageId = entry.id;

    if (!fromId || fromId === pageId) {
      this.logger.debug(`Ignoring comment from page itself or missing fromId`);
      return; // ignore bot's own replies
    }

    const merchants = await this.prisma.shopifyMerchant.findMany({
      where: { messengerPageId: pageId },
      orderBy: { updatedAt: 'desc' },
    });

    const merchant =
      merchants.find((m) => !!m.accessToken && m.isActive) || merchants[0];

    if (merchant && merchant.messengerToken) {
      this.logger.log(
        `Routing FB comment "${commentText}" from ${fromName} to CommentTriggerService (Shop: ${merchant.shop})`,
      );
      this.commentService.handleFacebookComment({
        merchantId: merchant.id,
        commentText,
        commenterId: fromId,
        commenterName: fromName,
        postId,
        postPermalinkUrl: value.post?.permalink_url,
        commentId,
        messengerToken: merchant.messengerToken,
      });
    } else {
      this.logger.debug(`No connected merchant found for pageId ${pageId}`);
    }
  }

  private async handleInstagram(entry: any) {
    let from: string;
    let text: string;

    // Handle both payload formats for Instagram
    let postback: string;
    if (entry.messaging) {
      // Standard Graph API format
      const message = entry.messaging[0];
      if (
        !message ||
        (!message.message && !message.postback) ||
        message.message?.is_echo
      )
        return;
      from = message.sender.id;
      text = message.message?.text;
      postback =
        message.postback?.payload || message.message?.quick_reply?.payload;
    } else {
      // New format (e.g. from curl mock)
      const change = entry.changes?.[0];
      const message = change?.value?.messages?.[0];
      if (!message) return;
      from = message.from;
      text = message.text?.body;
      postback = message.interactive?.button_reply?.id;
    }

    if (!from || (!text && !postback)) return;

    const igAccountId = entry.id;
    this.logger.log(
      `Received Instagram message from ${from} for account ${igAccountId}`,
    );

    const merchants = await this.prisma.shopifyMerchant.findMany({
      where: { instagramAccountId: igAccountId },
      orderBy: { updatedAt: 'desc' },
    });

    const merchant =
      merchants.find((m) => !!m.accessToken && m.isActive) || merchants[0];

    if (merchant) {
      // Route to InstagramBotService (async)
      this.igBot
        .handle({
          senderId: from,
          merchantId: merchant.id,
          text,
          postbackPayload: postback,
        })
        .catch((e) => this.logger.error(e));
    }
  }

  private async handleMessenger(entry: any) {
    const messaging = entry.messaging?.[0];
    if (!messaging || messaging.message?.is_echo) return;

    const from = messaging.sender.id;
    const text = messaging.message?.text;
    const postback =
      messaging.postback?.payload || messaging.message?.quick_reply?.payload;
    const referral = messaging.referral?.ref;
    const pageId = entry.id;

    this.logger.log(
      `Received Messenger message from ${from} for page ${pageId}`,
    );

    // Find Merchant
    const merchant = await this.prisma.shopifyMerchant.findFirst({
      where: { messengerPageId: pageId },
    });

    if (merchant) {
      // Route to MessengerBotService (async)
      this.msgBot
        .handle({
          senderId: from,
          merchantId: merchant.id,
          text,
          postbackPayload: postback,
          referral,
        })
        .catch((e) => this.logger.error(e));
    }
  }

  private verifySignature(
    rawBody: Buffer | string,
    signature: string,
  ): boolean {
    const secret = this.config.get<string>('META_APP_SECRET');
    const expected = crypto
      .createHmac('sha256', secret)
      .update(rawBody)
      .digest('hex');

    return signature === `sha256=${expected}`;
  }
}
