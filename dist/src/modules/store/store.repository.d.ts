import { PrismaService } from '../../prisma/prisma.service';
export declare class StoreRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findBySlug(slug: string): import("../../../generated/prisma/models").Prisma__StoreClient<{
        seller: {
            id: string;
            email: string | null;
            passwordHash: string;
            name: string;
            phone: string;
            createdAt: Date;
            updatedAt: Date;
            isVerified: boolean;
        };
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        slug: string;
        description: string | null;
        category: string | null;
        city: string | null;
        logoUrl: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findBySellerId(sellerId: string): import("../../../generated/prisma/models").Prisma__StoreClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        slug: string;
        description: string | null;
        category: string | null;
        city: string | null;
        logoUrl: string | null;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(payload: {
        sellerId: string;
        slug: string;
        name: string;
        description?: string;
    }): import("../../../generated/prisma/models").Prisma__StoreClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        slug: string;
        description: string | null;
        category: string | null;
        city: string | null;
        logoUrl: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: string, payload: {
        name?: string;
        description?: string;
        logoUrl?: string;
        city?: string;
        category?: string;
    }): import("../../../generated/prisma/models").Prisma__StoreClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        slug: string;
        description: string | null;
        category: string | null;
        city: string | null;
        logoUrl: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
