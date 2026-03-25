import { PrismaService } from '../../prisma/prisma.service';
import { MetaSenderService } from './meta-sender.service';
import { ShopifyApiService } from '../shopify/shopify-api.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
import { BotSessionService, BotContext } from '../whatsapp/bot-session.service';
import { ConfigService } from '@nestjs/config';
export declare class MessengerBotService {
    private readonly prisma;
    private readonly metaSender;
    private readonly shopifyApi;
    private readonly repository;
    private readonly session;
    private readonly config;
    private readonly logger;
    constructor(prisma: PrismaService, metaSender: MetaSenderService, shopifyApi: ShopifyApiService, repository: ShopifyRepository, session: BotSessionService, config: ConfigService);
    showProductDetail(senderId: string, merchant: any, token: string, product: any, context: BotContext, customMessage?: string, recipientId?: string): Promise<boolean>;
    private sendVariantSelection;
}
