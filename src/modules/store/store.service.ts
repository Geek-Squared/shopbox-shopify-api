import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreRepository } from './store.repository';

@Injectable()
export class StoreService {
  constructor(
    private readonly storeRepository: StoreRepository,
    private readonly prisma: PrismaService,
  ) {}

  async getBySlug(slug: string) {
    const store = await this.storeRepository.findBySlug(slug);
    if (!store) {
      throw new NotFoundException('Store not found');
    }

    const products = await this.prisma.product.findMany({
      where: { storeId: store.id, active: true },
      orderBy: { createdAt: 'desc' },
    });
    return {
      id: store.id,
      slug: store.slug,
      name: store.name,
      description: store.description,
      products,
    };
  }

  async updateStore(sellerId: string, payload: UpdateStoreDto) {
    const store = await this.storeRepository.findBySellerId(sellerId);
    if (!store) {
      throw new NotFoundException('Store not found');
    }

    return this.storeRepository.update(store.id, payload);
  }
}
