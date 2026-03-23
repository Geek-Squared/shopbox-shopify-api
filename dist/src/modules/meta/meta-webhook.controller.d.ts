import { ConfigService } from '@nestjs/config';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { PrismaService } from '../../prisma/prisma.service';
import { InstagramBotService } from './instagram-bot.service';
import { MessengerBotService } from './messenger-bot.service';
import { CommentTriggerService } from './comment-trigger.service';
export declare class MetaWebhookController {
    private readonly config;
    private readonly repository;
    private readonly prisma;
    private readonly igBot;
    private readonly msgBot;
    private readonly commentService;
    private readonly logger;
    constructor(config: ConfigService, repository: ShopifyRepository, prisma: PrismaService, igBot: InstagramBotService, msgBot: MessengerBotService, commentService: CommentTriggerService);
    verify(query: any): any;
    handle(signature: string, body: any, rawBody: Buffer): Promise<{
        status: string;
    }>;
    private handleInstagramComment;
    private handleFacebookComment;
    private handleInstagram;
    private handleMessenger;
    private verifySignature;
}
