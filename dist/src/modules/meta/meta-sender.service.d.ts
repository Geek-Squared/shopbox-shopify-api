import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
type MetaTemplateButton = {
    type: 'postback';
    title: string;
    payload: string;
} | {
    type: 'web_url';
    title: string;
    url: string;
};
export declare class MetaSenderService {
    private readonly config;
    private readonly prisma;
    private readonly repository;
    private readonly logger;
    private readonly baseUrl;
    constructor(config: ConfigService, prisma: PrismaService, repository: ShopifyRepository);
    private parseResponseBody;
    private extractTextFromMessage;
    private sendCommentPrivateReply;
    sendToMeta(token: string, recipientId: string, message: object, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean, retryCount?: number): Promise<boolean>;
    sendText(recipientId: string, text: string, token: string, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean): Promise<boolean>;
    sendImage(recipientId: string, imageUrl: string, token: string, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean): Promise<boolean>;
    sendQuickReplies(recipientId: string, text: string, replies: {
        title: string;
        payload: string;
    }[], token: string, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean): Promise<boolean>;
    sendButtons(recipientId: string, text: string, buttons: {
        title: string;
        payload: string;
    }[], token: string, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean): Promise<boolean>;
    sendButtonTemplate(recipientId: string, text: string, buttons: MetaTemplateButton[], token: string, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean): Promise<boolean>;
    sendProductCard(recipientId: string, product: {
        title: string;
        description?: string;
        price: number;
        imageUrl?: string;
        productUrl?: string;
        id: string;
    }, buttons: MetaTemplateButton[], token: string, merchantId: string, channel: 'messenger' | 'instagram', isCommentId?: boolean): Promise<boolean>;
    sendCarousel(recipientId: string, cards: {
        title: string;
        subtitle: string;
        imageUrl: string;
        productId: string;
    }[], token: string, merchantId: string): Promise<boolean>;
    sendReceipt(recipientId: string, order: {
        buyerName: string;
        orderNumber: string;
        items: {
            name: string;
            qty: number;
            price: number;
            imageUrl?: string;
        }[];
        subtotal: number;
        shipping: number;
        total: number;
        paymentMethod: string;
    }, token: string, merchantId: string): Promise<boolean>;
    sendProductListText(recipientId: string, products: {
        title: string;
        price: number;
        inventoryQuantity: number;
    }[], token: string, merchantId: string, channel: 'instagram' | 'messenger'): Promise<boolean>;
    sendTypingOn(recipientId: string, token: string, channel: 'messenger' | 'instagram'): Promise<void | Response>;
    setupPersistentMenu(pageToken: string): Promise<Response>;
    setupGetStarted(pageToken: string): Promise<Response>;
}
export {};
