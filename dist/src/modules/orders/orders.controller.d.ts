import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersService } from './orders.service';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(user: JwtPayload): import("../../../generated/prisma/internal/prismaNamespace").PrismaPromise<({
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
        orderNumber: string | null;
        deliveryCode: string | null;
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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    }>;
    findOne(user: JwtPayload, id: string): Promise<{
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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    }>;
    update(user: JwtPayload, id: string, payload: UpdateOrderDto): Promise<{
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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
    }>;
}
