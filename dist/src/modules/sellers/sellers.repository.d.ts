import { PrismaService } from '../../prisma/prisma.service';
export declare class SellersRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findByEmail(email: string): import("../../../generated/prisma/models").Prisma__SellerClient<{
        id: string;
        createdAt: Date;
        name: string;
        email: string | null;
        phone: string;
        passwordHash: string;
        updatedAt: Date;
        isVerified: boolean;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findByPhone(phone: string): import("../../../generated/prisma/models").Prisma__SellerClient<{
        id: string;
        createdAt: Date;
        name: string;
        email: string | null;
        phone: string;
        passwordHash: string;
        updatedAt: Date;
        isVerified: boolean;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findById(id: string): import("../../../generated/prisma/models").Prisma__SellerClient<{
        id: string;
        createdAt: Date;
        name: string;
        email: string | null;
        phone: string;
        passwordHash: string;
        updatedAt: Date;
        isVerified: boolean;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(payload: {
        email?: string;
        name: string;
        phone: string;
        passwordHash: string;
    }): import("../../../generated/prisma/models").Prisma__SellerClient<{
        id: string;
        createdAt: Date;
        name: string;
        email: string | null;
        phone: string;
        passwordHash: string;
        updatedAt: Date;
        isVerified: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: string, payload: {
        name?: string;
        phone?: string;
        isVerified?: boolean;
        otpCode?: string | null;
        otpExpiresAt?: Date | null;
    }): import("../../../generated/prisma/models").Prisma__SellerClient<{
        id: string;
        createdAt: Date;
        name: string;
        email: string | null;
        phone: string;
        passwordHash: string;
        updatedAt: Date;
        isVerified: boolean;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
