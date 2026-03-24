import { PrismaService } from '../../prisma/prisma.service';
export declare class ProductsRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    listBySeller(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    })[]>;
    findByIdForSeller(id: string, sellerId: string): import("../../../generated/prisma/models").Prisma__ProductClient<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findPublicById(id: string): import("../../../generated/prisma/models").Prisma__ProductClient<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    create(payload: {
        sellerId: string;
        storeId: string;
        name: string;
        description?: string;
        price: number;
        currency: string;
        stockQty?: number;
        images?: {
            imageUrl: string;
            isPrimary?: boolean;
            sortOrder?: number;
        }[];
    }): import("../../../generated/prisma/models").Prisma__ProductClient<{
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    update(id: string, sellerId: string, payload: {
        name?: string;
        description?: string;
        price?: number;
        currency?: string;
        active?: boolean;
        stockQty?: number;
    }): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    remove(id: string, sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    listActiveByStore(storeId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    })[]>;
    listActiveByStoreGrouped(storeId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    })[]>;
    setStock(id: string, sellerId: string, quantity: number): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    decrementStock(id: string, quantity: number): import("../../../generated/prisma/models").Prisma__ProductClient<{
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    findLowStock(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    })[]>;
    findOutOfStock(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        createdAt: Date;
        sellerId: string;
        storeId: string;
        name: string;
        price: number;
        description: string | null;
        currency: string;
        active: boolean;
        updatedAt: Date;
        stockQty: number;
    })[]>;
    toggleActive(id: string, sellerId: string, active: boolean): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    addImage(data: {
        productId: string;
        imageUrl: string;
        isPrimary?: boolean;
        sortOrder?: number;
    }): import("../../../generated/prisma/models").Prisma__ProductImageClient<{
        id: string;
        productId: string;
        imageUrl: string;
        isPrimary: boolean;
        sortOrder: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, {
        omit: import("../../../generated/prisma/internal/prismaNamespace").GlobalOmitConfig;
    }>;
    removeImage(id: string, productId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<import("../../../generated/prisma/internal/prismaNamespace").BatchPayload>;
    setPrimaryImage(id: string, productId: string): Promise<{
        id: string;
        productId: string;
        imageUrl: string;
        isPrimary: boolean;
        sortOrder: number;
    }>;
    countBySeller(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<number>;
}
