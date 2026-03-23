import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
import { ShopifyRepository } from '../shopify/shopify.repository';
export declare class MetaSenderService {
    private readonly config;
    private readonly prisma;
    private readonly repository;
    private readonly logger;
    private readonly baseUrl;
    constructor(config: ConfigService, prisma: PrismaService, repository: ShopifyRepository);
    sendToMeta(token: string, recipientId: string, message: object, merchantId: string, channel: 'messenger' | 'instagram'): Promise<void>;
    sendText(recipientId: string, text: string, token: string, merchantId: string, channel: 'messenger' | 'instagram'): Promise<void>;
    sendImage(recipientId: string, imageUrl: string, token: string, merchantId: string, channel: 'messenger' | 'instagram'): Promise<void>;
    sendQuickReplies(recipientId: string, text: string, replies: {
        title: string;
        payload: string;
    }[], token: string, merchantId: string, channel: 'messenger' | 'instagram'): Promise<void>;
    sendButtons(recipientId: string, text: string, buttons: {
        title: string;
        payload: string;
    }[], token: string, merchantId: string, channel: 'messenger' | 'instagram'): Promise<void>;
    sendCarousel(recipientId: string, cards: {
        title: string;
        subtitle: string;
        imageUrl: string;
        productId: string;
    }[], token: string, merchantId: string): Promise<void>;
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
    }, token: string, merchantId: string): Promise<void>;
    sendProductListText(recipientId: string, products: {
        title: string;
        price: number;
        inventoryQuantity: number;
    }[], token: string, merchantId: string, channel: 'instagram' | 'messenger'): Promise<void>;
    sendTypingOn(recipientId: string, token: string, channel: 'messenger' | 'instagram'): Promise<void | Response>;
    setupPersistentMenu(pageToken: string): Promise<Response>;
    setupGetStarted(pageToken: string): Promise<Response>;
}
