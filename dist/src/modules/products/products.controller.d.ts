import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { CreateProductImageDto } from './dto/create-product-image.dto';
import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(user: JwtPayload): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    })[]>;
    getLowStock(user: JwtPayload): Promise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    })[]>;
    getOutOfStock(user: JwtPayload): Promise<({
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    })[]>;
    findOne(user: JwtPayload, id: string): Promise<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    create(user: JwtPayload, payload: CreateProductDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    update(user: JwtPayload, id: string, payload: UpdateProductDto): Promise<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    activate(user: JwtPayload, id: string): Promise<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    deactivate(user: JwtPayload, id: string): Promise<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    updateStock(user: JwtPayload, id: string, payload: UpdateStockDto): Promise<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    addImage(user: JwtPayload, id: string, payload: CreateProductImageDto): Promise<{
        id: string;
        productId: string;
        imageUrl: string;
        isPrimary: boolean;
        sortOrder: number;
    }>;
    removeImage(user: JwtPayload, id: string, imageId: string): Promise<{
        deleted: boolean;
        id: string;
    }>;
    setPrimaryImage(user: JwtPayload, id: string, imageId: string): Promise<{
        images: {
            id: string;
            productId: string;
            imageUrl: string;
            isPrimary: boolean;
            sortOrder: number;
        }[];
    } & {
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        description: string | null;
        storeId: string;
        price: number;
        currency: string;
        active: boolean;
        stockQty: number;
    }>;
    remove(user: JwtPayload, id: string): Promise<{
        deleted: boolean;
        id: string;
    }>;
}
