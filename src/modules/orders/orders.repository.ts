import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class OrdersRepository {
  constructor(private readonly prisma: PrismaService) {}

  listBySeller(sellerId: string) {
    return this.prisma.order.findMany({
      where: { sellerId },
      include: { items: true, payment: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findByIdForSeller(id: string, sellerId: string) {
    return this.prisma.order.findFirst({
      where: { id, sellerId },
      include: { items: true, payment: true },
    });
  }

  findById(id: string) {
    return this.prisma.order.findUnique({
      where: { id },
      include: { items: true, payment: true },
    });
  }

  create(payload: {
    sellerId: string;
    storeId: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    totalAmount: number;
    orderNumber?: string;
    deliveryCode?: string;
    items: Array<{
      productId: string;
      quantity: number;
      unitPrice: number;
      lineTotal: number;
    }>;
  }) {
    return this.prisma.order.create({
      data: {
        sellerId: payload.sellerId,
        storeId: payload.storeId,
        customerName: payload.customerName,
        customerPhone: payload.customerPhone,
        customerEmail: payload.customerEmail,
        totalAmount: payload.totalAmount,
        orderNumber: payload.orderNumber,
        deliveryCode: payload.deliveryCode,
        items: {
          create: payload.items,
        },
      },
      include: { items: true },
    });
  }

  updateForSeller(
    id: string,
    sellerId: string,
    payload: {
      status?: 'PENDING' | 'PAID' | 'CONFIRMED' | 'FULFILLED' | 'CANCELLED';
      customerName?: string;
      customerPhone?: string;
    },
  ) {
    return this.prisma.order.updateMany({
      where: { id, sellerId },
      data: payload,
    });
  }
}
