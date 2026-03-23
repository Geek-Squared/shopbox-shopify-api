import { PrismaService } from '../../prisma/prisma.service';
export declare class StoreRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    findBySlug(slug: string): import("../../../generated/prisma/models").Prisma__StoreClient<{
        seller: {
            id: string;
            createdAt: Date;
            name: string;
            email: string | null;
            phone: string;
            passwordHash: string;
            isVerified: boolean;
            updatedAt: Date;
        };
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        name: string;
        description: string | null;
        slug: string;
        logoUrl: string | null;
        city: string | null;
        category: string | null;
        updatedAt: Date;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findBySellerId(sellerId: string): import("../../../generated/prisma/models").Prisma__StoreClient<{
        id: string;
        createdAt: Date;
        sellerId: string;
        name: string;
        description: string | null;
        slug: string;
        logoUrl: string | null;
        city: string | null;
        category: string | null;
        updatedAt: Date;
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
        createdAt: Date;
        sellerId: string;
        name: string;
        description: string | null;
        slug: string;
        logoUrl: string | null;
        city: string | null;
        category: string | null;
        updatedAt: Date;
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
        createdAt: Date;
        sellerId: string;
        name: string;
        description: string | null;
        slug: string;
        logoUrl: string | null;
        city: string | null;
        category: string | null;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
}
