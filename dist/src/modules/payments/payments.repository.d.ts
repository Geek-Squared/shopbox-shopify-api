import { PrismaService } from '../../prisma/prisma.service';
export declare class PaymentsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(payload: {
        orderId: string;
        provider: string;
        amount: number;
        currency: string;
        gatewayReference: string;
        status: 'PENDING' | 'SUCCESS' | 'FAILED';
    }): import("../../../generated/prisma/models").Prisma__PaymentClient<{
        id: string;
        status: import("../../../generated/prisma/enums").PaymentStatus;
        createdAt: Date;
        orderId: string;
        currency: string;
        provider: string;
        gatewayReference: string | null;
        updatedAt: Date;
        amount: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findById(id: string): import("../../../generated/prisma/models").Prisma__PaymentClient<{
        id: string;
        status: import("../../../generated/prisma/enums").PaymentStatus;
        createdAt: Date;
        orderId: string;
        currency: string;
        provider: string;
        gatewayReference: string | null;
        updatedAt: Date;
        amount: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: string, payload: {
        status: 'PENDING' | 'SUCCESS' | 'FAILED';
        gatewayReference?: string;
    }): import("../../../generated/prisma/models").Prisma__PaymentClient<{
        id: string;
        status: import("../../../generated/prisma/enums").PaymentStatus;
        createdAt: Date;
        orderId: string;
        currency: string;
        provider: string;
        gatewayReference: string | null;
        updatedAt: Date;
        amount: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
