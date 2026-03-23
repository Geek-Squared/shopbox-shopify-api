import { PrismaService } from '../../prisma/prisma.service';
export declare class WhatsappRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(payload: {
        sellerId?: string;
        storeId?: string;
        orderId?: string;
        direction: 'INBOUND' | 'OUTBOUND';
        toNumber?: string;
        fromNumber?: string;
        content: string;
        status?: string;
    }): import("../../../generated/prisma/models").Prisma__WhatsappMessageClient<{
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
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
