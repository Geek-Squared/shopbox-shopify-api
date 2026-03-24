import { ProductsRepository } from '../products/products.repository';
import { StoreRepository } from '../store/store.repository';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';
export declare class OrdersService {
    private readonly ordersRepository;
    private readonly storeRepository;
    private readonly productsRepository;
    private readonly whatsapp;
    private readonly logger;
    constructor(ordersRepository: OrdersRepository, storeRepository: StoreRepository, productsRepository: ProductsRepository, whatsapp: WhatsappService);
    findAll(sellerId: string): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        deliveryCode: string | null;
        orderNumber: string | null;
        buyerId: string | null;
    })[]>;
    create(payload: CreateOrderDto): Promise<{
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
        deliveryCode: string | null;
        orderNumber: string | null;
        buyerId: string | null;
    }>;
    findOne(id: string, sellerId: string): Promise<{
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
        deliveryCode: string | null;
        orderNumber: string | null;
        buyerId: string | null;
    }>;
    update(id: string, sellerId: string, payload: UpdateOrderDto): Promise<{
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
        deliveryCode: string | null;
        orderNumber: string | null;
        buyerId: string | null;
    }>;
    private sendOrderNotifications;
}
