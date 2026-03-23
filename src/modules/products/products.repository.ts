import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProductsRepository {
  constructor(private readonly prisma: PrismaService) {}

  listBySeller(sellerId: string) {
    return this.prisma.product.findMany({
      where: { sellerId },
      include: { images: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  findByIdForSeller(id: string, sellerId: string) {
    return this.prisma.product.findFirst({
      where: { id, sellerId },
      include: { images: true },
    });
  }

  findPublicById(id: string) {
    return this.prisma.product.findFirst({
      where: { id, active: true },
      include: { images: true },
    });
  }

  create(payload: {
    sellerId: string;
    storeId: string;
    name: string;
    description?: string;
    price: number;
    currency: string;
    stockQty?: number;
    images?: { imageUrl: string; isPrimary?: boolean; sortOrder?: number }[];
  }) {
    const { images, ...data } = payload;
    return this.prisma.product.create({
      data: {
        ...data,
        images: images
          ? {
              create: images,
            }
          : undefined,
      },
    });
  }

  update(
    id: string,
    sellerId: string,
    payload: {
      name?: string;
      description?: string;
      price?: number;
      currency?: string;
      active?: boolean;
      stockQty?: number;
    },
  ) {
    return this.prisma.product.updateMany({
      where: { id, sellerId },
      data: payload,
    });
  }

  remove(id: string, sellerId: string) {
    return this.prisma.product.deleteMany({ where: { id, sellerId } });
  }

  listActiveByStore(storeId: string) {
    return this.prisma.product.findMany({
      where: { storeId, active: true },
      include: { images: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  listActiveByStoreGrouped(storeId: string) {
    // Basic grouping by order for now, or just return list
    // WhatsApp bot handles the actual menu formatting
    return this.listActiveByStore(storeId);
  }

  setStock(id: string, sellerId: string, quantity: number) {
    return this.prisma.product.updateMany({
      where: { id, sellerId },
      data: { stockQty: quantity },
    });
  }

  decrementStock(id: string, quantity: number) {
    return this.prisma.product.update({
      where: { id },
      data: { stockQty: { decrement: quantity } },
    });
  }

  findLowStock(sellerId: string) {
    return this.prisma.product.findMany({
      where: { sellerId, stockQty: { lte: 5, gt: 0 } },
      include: { images: true },
    });
  }

  findOutOfStock(sellerId: string) {
    return this.prisma.product.findMany({
      where: { sellerId, stockQty: 0 },
      include: { images: true },
    });
  }

  toggleActive(id: string, sellerId: string, active: boolean) {
    return this.prisma.product.updateMany({
      where: { id, sellerId },
      data: { active },
    });
  }

  addImage(data: {
    productId: string;
    imageUrl: string;
    isPrimary?: boolean;
    sortOrder?: number;
  }) {
    return this.prisma.productImage.create({ data });
  }

  removeImage(id: string, productId: string) {
    return this.prisma.productImage.deleteMany({
      where: { id, productId },
    });
  }

  async setPrimaryImage(id: string, productId: string) {
    // Reset all others
    await this.prisma.productImage.updateMany({
      where: { productId },
      data: { isPrimary: false },
    });
    // Set this one
    return this.prisma.productImage.update({
      where: { id },
      data: { isPrimary: true },
    });
  }

  countBySeller(sellerId: string) {
    return this.prisma.product.count({ where: { sellerId } });
  }
}
