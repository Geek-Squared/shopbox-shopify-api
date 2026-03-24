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
        buyerId: string | null;
        deliveryCode: string | null;
        notes: string | null;
        orderNumber: string | null;
        deliveryAddress: string | null;
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
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        storeId: string;
        status: import("../../../generated/prisma/enums").OrderStatus;
        customerName: string;
        customerPhone: string;
        customerEmail: string | null;
        totalAmount: number;
        buyerId: string | null;
        deliveryCode: string | null;
        notes: string | null;
        orderNumber: string | null;
        deliveryAddress: string | null;
    }>;
    findOne(id: string, sellerId: string): Promise<{
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
        buyerId: string | null;
        deliveryCode: string | null;
        notes: string | null;
        orderNumber: string | null;
        deliveryAddress: string | null;
    }>;
    update(id: string, sellerId: string, payload: UpdateOrderDto): Promise<{
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
        buyerId: string | null;
        deliveryCode: string | null;
        notes: string | null;
        orderNumber: string | null;
        deliveryAddress: string | null;
    }>;
    private sendOrderNotifications;
}
