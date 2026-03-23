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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
    }>;
    findOne(user: JwtPayload, id: string): Promise<{
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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
    }>;
    update(user: JwtPayload, id: string, payload: UpdateOrderDto): Promise<{
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
        orderNumber: string | null;
        deliveryCode: string | null;
        buyerId: string | null;
        deliveryAddress: string | null;
        notes: string | null;
    }>;
}
