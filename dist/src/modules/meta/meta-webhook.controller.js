"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MetaWebhookController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaWebhookController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("@nestjs/config");
const shopify_repository_1 = require("../shopify/shopify.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
const instagram_bot_service_1 = require("./instagram-bot.service");
const messenger_bot_service_1 = require("./messenger-bot.service");
const comment_trigger_service_1 = require("./comment-trigger.service");
const crypto = require("crypto");
let MetaWebhookController = MetaWebhookController_1 = class MetaWebhookController {
    constructor(config, repository, prisma, igBot, msgBot, commentService) {
        this.config = config;
        this.repository = repository;
        this.prisma = prisma;
        this.igBot = igBot;
        this.msgBot = msgBot;
        this.commentService = commentService;
        this.logger = new common_1.Logger(MetaWebhookController_1.name);
    }
    verify(query) {
        const mode = query['hub.mode'] || query['hub_mode'];
        const token = query['hub.verify_token'] || query['hub_verify_token'];
        const challenge = query['hub.challenge'] || query['hub_challenge'];
        const verifyToken = this.config.get('META_VERIFY_TOKEN');
        this.logger.debug(`Webhook Verification: mode=${mode}, token=${token}, expected=${verifyToken}`);
        if (mode === 'subscribe' && token === verifyToken) {
            return challenge;
        }
        throw new common_1.UnauthorizedException('Webhook verification failed');
    }
    async handle(signature, body, rawBody) {
        if (!signature) {
            throw new common_1.UnauthorizedException('No signature found');
        }
        this.logger.debug(`Webhook payload: ${JSON.stringify(body, null, 2)}`);
        const isValid = this.verifySignature(rawBody || JSON.stringify(body), signature);
        if (!isValid && process.env.NODE_ENV === 'production') {
            throw new common_1.UnauthorizedException('Invalid signature');
        }
        const payload = body.entry?.[0];
        if (!payload)
            return { status: 'ok' };
        const change = payload.changes?.[0];
        const isInstagramComment = change?.field === 'comments';
        const isFacebookComment = change?.field === 'feed' && change?.value?.item === 'comment' && change?.value?.verb === 'add';
        const isInstagramDM = (change?.field === 'messages' && change?.value?.messaging_product === 'instagram') ||
            (body.object === 'instagram' && !!payload.messaging);
        const isMessenger = body.object === 'page' && !!payload.messaging;
        if (isFacebookComment) {
            this.handleFacebookComment(payload).catch(e => this.logger.error(e));
        }
        else if (isInstagramComment) {
            this.handleInstagramComment(payload).catch(e => this.logger.error(e));
        }
        else if (isInstagramDM) {
            await this.handleInstagram(payload);
        }
        else if (isMessenger) {
            await this.handleMessenger(payload);
        }
        return { status: 'ok' };
    }
    async handleInstagramComment(entry) {
        const value = entry.changes[0].value;
        const commentId = value.id;
        const commentText = value.text;
        const fromId = value.from.id;
        const fromUsername = value.from.username;
        const mediaId = value.media.id;
        const igAccountId = entry.id;
        const merchant = await this.prisma.shopifyMerchant.findFirst({
            where: { instagramAccountId: igAccountId },
        });
        if (merchant) {
            this.commentService.handleInstagramComment({
                merchantId: merchant.id,
                commentText,
                commenterId: fromId,
                commenterUsername: fromUsername,
                mediaId,
                commentId,
                instagramToken: merchant.instagramToken,
            });
        }
    }
    async handleFacebookComment(entry) {
        const value = entry.changes[0].value;
        const commentId = value.comment_id;
        const commentText = value.message;
        const fromId = value.from?.id;
        const fromName = value.from?.name;
        const postId = value.post_id;
        const pageId = entry.id;
        if (!fromId || fromId === pageId) {
            this.logger.debug(`Ignoring comment from page itself or missing fromId`);
            return;
        }
        const merchant = await this.prisma.shopifyMerchant.findFirst({
            where: { messengerPageId: pageId },
        });
        if (merchant && merchant.messengerToken) {
            this.logger.log(`Routing FB comment "${commentText}" from ${fromName} to CommentTriggerService`);
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
        }
        else {
            this.logger.debug(`No merchant found for pageId ${pageId}`);
        }
    }
    async handleInstagram(entry) {
        let from;
        let text;
        let postback;
        if (entry.messaging) {
            const message = entry.messaging[0];
            if (!message || (!message.message && !message.postback) || message.message?.is_echo)
                return;
            from = message.sender.id;
            text = message.message?.text;
            postback = message.postback?.payload || message.message?.quick_reply?.payload;
        }
        else {
            const change = entry.changes?.[0];
            const message = change?.value?.messages?.[0];
            if (!message)
                return;
            from = message.from;
            text = message.text?.body;
            postback = message.interactive?.button_reply?.id;
        }
        if (!from || (!text && !postback))
            return;
        const igAccountId = entry.id;
        this.logger.log(`Received Instagram message from ${from} for account ${igAccountId}`);
        const merchant = await this.prisma.shopifyMerchant.findFirst({
            where: { instagramAccountId: igAccountId },
        });
        if (merchant) {
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
    async handleMessenger(entry) {
        const messaging = entry.messaging?.[0];
        if (!messaging || messaging.message?.is_echo)
            return;
        const from = messaging.sender.id;
        const text = messaging.message?.text;
        const postback = messaging.postback?.payload || messaging.message?.quick_reply?.payload;
        const referral = messaging.referral?.ref;
        const pageId = entry.id;
        this.logger.log(`Received Messenger message from ${from} for page ${pageId}`);
        const merchant = await this.prisma.shopifyMerchant.findFirst({
            where: { messengerPageId: pageId },
        });
        if (merchant) {
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
    verifySignature(rawBody, signature) {
        const secret = this.config.get('META_APP_SECRET');
        const expected = crypto
            .createHmac('sha256', secret)
            .update(rawBody)
            .digest('hex');
        return signature === `sha256=${expected}`;
    }
};
exports.MetaWebhookController = MetaWebhookController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Meta Webhook Verification' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MetaWebhookController.prototype, "verify", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Handle Meta Webhook POST' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('x-hub-signature-256')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.RawBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Buffer]),
    __metadata("design:returntype", Promise)
], MetaWebhookController.prototype, "handle", null);
exports.MetaWebhookController = MetaWebhookController = MetaWebhookController_1 = __decorate([
    (0, swagger_1.ApiTags)('Meta Webhook'),
    (0, common_1.Controller)('meta/webhook'),
    __metadata("design:paramtypes", [config_1.ConfigService,
        shopify_repository_1.ShopifyRepository,
        prisma_service_1.PrismaService,
        instagram_bot_service_1.InstagramBotService,
        messenger_bot_service_1.MessengerBotService,
        comment_trigger_service_1.CommentTriggerService])
], MetaWebhookController);
//# sourceMappingURL=meta-webhook.controller.js.map