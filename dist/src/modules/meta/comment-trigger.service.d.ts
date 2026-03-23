import { PrismaService } from '../../prisma/prisma.service';
import { MetaSenderService } from './meta-sender.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { MessengerBotService } from './messenger-bot.service';
import { BotSessionService } from '../whatsapp/bot-session.service';
export declare class CommentTriggerService {
    private readonly prisma;
    private readonly metaSender;
    private readonly shopifyRepo;
    private readonly shopifyApi;
    private readonly messengerBot;
    private readonly session;
    private readonly logger;
    constructor(prisma: PrismaService, metaSender: MetaSenderService, shopifyRepo: ShopifyRepository, shopifyApi: ShopifyApiService, messengerBot: MessengerBotService, session: BotSessionService);
    handleInstagramComment(data: {
        merchantId: string;
        commentText: string;
        commenterId: string;
        commenterUsername: string;
        mediaId: string;
        commentId: string;
        instagramToken: string;
    }): Promise<void>;
    handleFacebookComment(data: {
        merchantId: string;
        commentText: string;
        commenterId: string;
        commenterName: string;
        postId: string;
        commentId: string;
        messengerToken: string;
    }): Promise<void>;
    createTrigger(merchantId: string, data: {
        keyword: string;
        replyComment?: boolean;
        templateMessage?: string;
    }): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }>;
    listTriggers(merchantId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }[]>;
    updateTrigger(merchantId: string, triggerId: string, data: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }>;
    deleteTrigger(merchantId: string, triggerId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }>;
    getTriggerStats(merchantId: string): Promise<{
        totalTriggers: number;
        totalDmsSent: number;
        totalOrdersFromIg: number;
        conversionRate: number;
    }>;
    private replaceTemplateVariables;
}
