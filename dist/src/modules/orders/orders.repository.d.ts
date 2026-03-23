import { PrismaService } from '../../prisma/prisma.service';
export declare class OrdersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listBySeller(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            currency: string;
            status: import("../../../generated/prisma/enums").PaymentStatus;
            orderId: string;
            provider: string;
            amount: number;
            gatewayReference: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        storeId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
    })[]>;
    findByIdForSeller(id: string, sellerId: string): import("../../../generated/prisma/models").Prisma__OrderClient<{
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            currency: string;
            status: import("../../../generated/prisma/enums").PaymentStatus;
            orderId: string;
            provider: string;
            amount: number;
            gatewayReference: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        storeId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findById(id: string): import("../../../generated/prisma/models").Prisma__OrderClient<{
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            currency: string;
            status: import("../../../generated/prisma/enums").PaymentStatus;
            orderId: string;
            provider: string;
            amount: number;
            gatewayReference: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        storeId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        storeId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        totalAmount: number;
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    updateForSeller(id: string, sellerId: string, payload: {
        status?: 'PENDING' | 'PAID' | 'CONFIRMED' | 'FULFILLED' | 'CANCELLED';
        customerName?: string;
        customerPhone?: string;
    }): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
}
