import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class StoreRepository {
  constructor(private readonly prisma: PrismaService) {}

  findBySlug(slug: string) {
    return this.prisma.store.findUnique({ where: { slug }, include: { seller: true } });
  }

  findBySellerId(sellerId: string) {
    return this.prisma.store.findUnique({ where: { sellerId } });
  }

  create(payload: {
    sellerId: string;
    slug: string;
    name: string;
    description?: string;
  }) {
    return this.prisma.store.create({ data: payload });
  }

  update(id: string, payload: { name?: string; description?: string; logoUrl?: string; city?: string; category?: string; }) {
    return this.prisma.store.update({ where: { id }, data: payload });
  }
}
