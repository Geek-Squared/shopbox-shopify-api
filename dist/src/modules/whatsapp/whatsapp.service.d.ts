import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../prisma/prisma.service';
interface ListRow {
    id: string;
    title: string;
    description?: string;
}
interface ListSection {
    title: string;
    rows: ListRow[];
}
interface ButtonOption {
    id: string;
    title: string;
}
export declare class WhatsappService {
    private readonly config;
    private readonly prisma;
    private readonly logger;
    private readonly apiUrl;
    private readonly token;
    constructor(config: ConfigService, prisma: PrismaService);
    send(payload: object, meta?: {
        sellerId?: string;
        storeId?: string;
        orderId?: string;
        toNumber?: string;
    }): Promise<void>;
    sendText(to: string, message: string, meta?: {
        sellerId?: string;
        storeId?: string;
        orderId?: string;
    }): Promise<void>;
    sendList(to: string, header: string, body: string, buttonText: string, sections: ListSection[], meta?: {
        sellerId?: string;
        storeId?: string;
        orderId?: string;
    }): Promise<void>;
    sendButtons(to: string, body: string, buttons: ButtonOption[], meta?: {
        sellerId?: string;
        storeId?: string;
        orderId?: string;
    }): Promise<void>;
    sendOTP(phone: string, code: string, purpose: string): Promise<void>;
    notifySellerNewOrder(sellerPhone: string, orderNumber: string, buyerName: string, itemsSummary: string, total: number, paymentMethod: string, meta?: {
        sellerId?: string;
        storeId?: string;
        orderId?: string;
    }): Promise<void>;
    notifyBuyerOrderConfirmed(buyerPhone: string, orderNumber: string, storeName: string, total: number, deliveryCode: string, storeSlug: string, meta?: {
        orderId?: string;
    }): Promise<void>;
    notifyBuyerOutForDelivery(buyerPhone: string, orderNumber: string, riderName: string, riderPhone: string, deliveryCode: string, meta?: {
        orderId?: string;
    }): Promise<void>;
    notifyBuyerDelivered(buyerPhone: string, orderNumber: string, meta?: {
        orderId?: string;
    }): Promise<void>;
    notifyRiderNewJob(riderPhone: string, deliveryId: string, pickupAddress: string, dropoffAddress: string, distanceKm: number, earnUsd: number): Promise<void>;
    verifyWebhookSignature(payload: string, signature: string): boolean;
    getVerifyToken(): string;
    parseIncomingMessage(body: any): {
        from: string;
        type: string;
        text?: string;
        interactiveId?: string;
        messageId: string;
    } | null;
    isStatusUpdate(body: any): boolean;
    logMessage(data: {
        direction: 'INBOUND' | 'OUTBOUND';
        fromNumber?: string;
        toNumber?: string;
        content: string;
        status?: string;
        sellerId?: string;
        storeId?: string;
        orderId?: string;
    }): Promise<{
        id: string;
        direction: import("../../../generated/prisma/enums").MessageDirection;
        toNumber: string | null;
        fromNumber: string | null;
        content: string;
        status: string | null;
        createdAt: Date;
        sellerId: string | null;
        storeId: string | null;
        orderId: string | null;
    }>;
    formatPhone(phone: string): string;
}
export {};
