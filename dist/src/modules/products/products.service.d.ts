import { StoreRepository } from '../store/store.repository';
import { SellersRepository } from '../sellers/sellers.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
export declare class ProductsService {
    private readonly productsRepository;
    private readonly storeRepository;
    private readonly sellerRepository;
    constructor(productsRepository: ProductsRepository, storeRepository: StoreRepository, sellerRepository: SellersRepository);
    findAll(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    listPublicByStore(storeId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    listForBot(storeId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
    findOne(id: string, sellerId: string): Promise<{
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
    }>;
    findPublicById(id: string): Promise<{
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
    }>;
    create(sellerId: string, payload: CreateProductDto): Promise<{
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
    }>;
    update(id: string, sellerId: string, payload: UpdateProductDto): Promise<{
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
    }>;
    updateStock(id: string, sellerId: string, quantity: number): Promise<{
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
    }>;
    getLowStock(sellerId: string): Promise<({
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
    getOutOfStock(sellerId: string): Promise<({
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
    toggleActive(id: string, sellerId: string, active: boolean): Promise<{
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
    }>;
    addImage(productId: string, sellerId: string, data: {
        imageUrl: string;
        isPrimary?: boolean;
        sortOrder?: number;
    }): Promise<{
        id: string;
        productId: string;
        imageUrl: string;
        isPrimary: boolean;
        sortOrder: number;
    }>;
    removeImage(imageId: string, productId: string, sellerId: string): Promise<{
        deleted: boolean;
        id: string;
    }>;
    setPrimaryImage(imageId: string, productId: string, sellerId: string): Promise<{
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
    }>;
    remove(id: string, sellerId: string): Promise<{
        deleted: boolean;
        id: string;
    }>;
    decrementStock(productId: string, quantity: number): Promise<{
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
    }>;
    private enforcePlanLimit;
}
