import { PrismaService } from '../../prisma/prisma.service';
export declare class OrdersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listBySeller(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        payment: {
            id: string;
            status: import("../../../generated/prisma/enums").PaymentStatus;
            createdAt: Date;
            orderId: string;
            currency: string;
            provider: string;
            gatewayReference: string | null;
            updatedAt: Date;
            amount: number;
        };
        items: {
            id: string;
            orderId: string;
            productId: string;
            quantity: number;
            unitPrice: number;
            lineTotal: number;
        }[];
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        updatedAt: Date;
        deliveryAddress: string | null;
        notes: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    })[]>;
    findByIdForSeller(id: string, sellerId: string): import("../../../generated/prisma/models").Prisma__OrderClient<{
        payment: {
            id: string;
            status: import("../../../generated/prisma/enums").PaymentStatus;
            createdAt: Date;
            orderId: string;
            currency: string;
            provider: string;
            gatewayReference: string | null;
            updatedAt: Date;
            amount: number;
        };
        items: {
            id: string;
            orderId: string;
            productId: string;
            quantity: number;
            unitPrice: number;
            lineTotal: number;
        }[];
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        updatedAt: Date;
        deliveryAddress: string | null;
        notes: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findById(id: string): import("../../../generated/prisma/models").Prisma__OrderClient<{
        payment: {
            id: string;
            status: import("../../../generated/prisma/enums").PaymentStatus;
            createdAt: Date;
            orderId: string;
            currency: string;
            provider: string;
            gatewayReference: string | null;
            updatedAt: Date;
            amount: number;
        };
        items: {
            id: string;
            orderId: string;
            productId: string;
            quantity: number;
            unitPrice: number;
            lineTotal: number;
        }[];
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        updatedAt: Date;
        deliveryAddress: string | null;
        notes: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(payload: {
        sellerId: string;
        storeId: string;
        customerName: string;
        customerPhone: string;
        customerEmail?: string;
        totalAmount: number;
        orderNumber?: string;
        deliveryCode?: string;
        items: Array<{
            productId: string;
            quantity: number;
            unitPrice: number;
            lineTotal: number;
        }>;
    }): import("../../../generated/prisma/models").Prisma__OrderClient<{
        items: {
            id: string;
            orderId: string;
            productId: string;
            quantity: number;
            unitPrice: number;
            lineTotal: number;
        }[];
    } & {
        id: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        updatedAt: Date;
        deliveryAddress: string | null;
        notes: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    updateForSeller(id: string, sellerId: string, payload: {
        status?: 'PENDING' | 'PAID' | 'CONFIRMED' | 'FULFILLED' | 'CANCELLED';
        customerName?: string;
        customerPhone?: string;
    }): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
