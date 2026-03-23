import { PrismaService } from '../../prisma/prisma.service';
export interface CartItem {
    productId: string;
    productName: string;
    unitPrice: number;
    quantity: number;
    imageUrl?: string;
    variantId?: string;
}
export interface BotContext {
    storeSlug?: string;
    storeId?: string;
    sellerId?: string;
    selectedProductId?: string;
    cart?: CartItem[];
    buyerName?: string;
    deliveryAddress?: string;
    paymentMethod?: string;
    notes?: string;
    activeDeliveryId?: string;
    riderId?: string;
    merchantId?: string;
    shop?: string;
    products?: any[];
    selectedProduct?: any;
    collectionId?: string;
}
export declare class BotSessionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    get(phoneNumber: string): Promise<{
        state: string;
        context: BotContext;
    }>;
    set(phoneNumber: string, state: string, context: BotContext): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phoneNumber: string;
        state: string;
        context: import("@prisma/client/runtime/client").JsonValue;
    }>;
    updateContext(phoneNumber: string, state: string, update: Partial<BotContext>): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phoneNumber: string;
        state: string;
        context: import("@prisma/client/runtime/client").JsonValue;
    }>;
    reset(phoneNumber: string): Promise<void | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phoneNumber: string;
        state: string;
        context: import("@prisma/client/runtime/client").JsonValue;
    }>;
    addToCart(cart: CartItem[], item: CartItem): CartItem[];
    cartSubtotal(cart: CartItem[]): number;
}
