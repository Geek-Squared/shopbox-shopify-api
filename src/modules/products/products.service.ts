import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { StoreRepository } from '../store/store.repository';
import { SellersRepository } from '../sellers/sellers.repository';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';

// ─── Plan limits ──────────────────────────────────────────────────────────────
const PLAN_PRODUCT_LIMITS: Record<string, number> = {
  FREE: 10,
  BASIC: Infinity,
  PRO: Infinity,
};

@Injectable()
export class ProductsService {
  constructor(
    private readonly productsRepository: ProductsRepository,
    private readonly storeRepository: StoreRepository,
    private readonly sellerRepository: SellersRepository,
  ) {}

  // ─── LIST ──────────────────────────────────────────────────────────────────

  findAll(sellerId: string) {
    return this.productsRepository.listBySeller(sellerId);
  }

  listPublicByStore(storeId: string) {
    return this.productsRepository.listActiveByStore(storeId);
  }

  // Used by WhatsApp bot — returns active products grouped for menu display
  listForBot(storeId: string) {
    return this.productsRepository.listActiveByStoreGrouped(storeId);
  }

  // ─── FIND ONE ──────────────────────────────────────────────────────────────

  async findOne(id: string, sellerId: string) {
    const product = await this.productsRepository.findByIdForSeller(
      id,
      sellerId,
    );
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  async findPublicById(id: string) {
    const product = await this.productsRepository.findPublicById(id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  // ─── CREATE ────────────────────────────────────────────────────────────────

  async create(sellerId: string, payload: CreateProductDto) {
    // 1. Verify store exists
    const store = await this.storeRepository.findBySellerId(sellerId);
    if (!store) {
      throw new NotFoundException('Store not found. Please create a store first.');
    }

    // 2. Enforce plan product limits
    await this.enforcePlanLimit(sellerId);

    // 3. Create product with images
    return this.productsRepository.create({
      sellerId,
      storeId: store.id,
      name: payload.name,
      description: payload.description,
      price: payload.price,
      currency: payload.currency ?? 'USD',
      stockQty: payload.stockQty ?? 0,
      images: payload.images,
    });
  }

  // ─── UPDATE ────────────────────────────────────────────────────────────────

  async update(id: string, sellerId: string, payload: UpdateProductDto) {
    const result = await this.productsRepository.update(id, sellerId, payload);
    if (result.count === 0) {
      throw new NotFoundException('Product not found');
    }
    return this.findOne(id, sellerId);
  }

  // ─── STOCK ─────────────────────────────────────────────────────────────────

  async updateStock(id: string, sellerId: string, quantity: number) {
    const result = await this.productsRepository.setStock(
      id,
      sellerId,
      quantity,
    );
    if (result.count === 0) {
      throw new NotFoundException('Product not found');
    }
    return this.findOne(id, sellerId);
  }

  async getLowStock(sellerId: string) {
    return this.productsRepository.findLowStock(sellerId);
  }

  async getOutOfStock(sellerId: string) {
    return this.productsRepository.findOutOfStock(sellerId);
  }

  // ─── TOGGLE ────────────────────────────────────────────────────────────────

  async toggleActive(id: string, sellerId: string, active: boolean) {
    const result = await this.productsRepository.toggleActive(
      id,
      sellerId,
      active,
    );
    if (result.count === 0) {
      throw new NotFoundException('Product not found');
    }
    return this.findOne(id, sellerId);
  }

  // ─── IMAGES ────────────────────────────────────────────────────────────────

  async addImage(
    productId: string,
    sellerId: string,
    data: { imageUrl: string; isPrimary?: boolean; sortOrder?: number },
  ) {
    // Verify ownership
    await this.findOne(productId, sellerId);
    return this.productsRepository.addImage({ productId, ...data });
  }

  async removeImage(imageId: string, productId: string, sellerId: string) {
    // Verify ownership
    await this.findOne(productId, sellerId);
    const result = await this.productsRepository.removeImage(
      imageId,
      productId,
    );
    if (result.count === 0) {
      throw new NotFoundException('Image not found');
    }
    return { deleted: true, id: imageId };
  }

  async setPrimaryImage(imageId: string, productId: string, sellerId: string) {
    // Verify ownership
    await this.findOne(productId, sellerId);
    await this.productsRepository.setPrimaryImage(imageId, productId);
    return this.findOne(productId, sellerId);
  }

  // ─── DELETE ────────────────────────────────────────────────────────────────

  async remove(id: string, sellerId: string) {
    const result = await this.productsRepository.remove(id, sellerId);
    if (result.count === 0) {
      throw new NotFoundException('Product not found');
    }
    return { deleted: true, id };
  }

  // ─── INTERNAL ──────────────────────────────────────────────────────────────

  /** Called by order service to decrement stock when order is placed */
  async decrementStock(productId: string, quantity: number) {
    return this.productsRepository.decrementStock(productId, quantity);
  }

  // ─── PRIVATE ───────────────────────────────────────────────────────────────

  private async enforcePlanLimit(sellerId: string): Promise<void> {
    const seller = await this.sellerRepository.findById(sellerId);
    if (!seller) throw new NotFoundException('Seller not found');

    const plan = (seller as any).plan ?? 'FREE';
    const limit = PLAN_PRODUCT_LIMITS[plan] ?? 10;

    if (limit === Infinity) return;

    const count = await this.productsRepository.countBySeller(sellerId);
    if (count >= limit) {
      throw new ForbiddenException(
        `Your ${plan} plan allows a maximum of ${limit} products. ` +
          `Upgrade to Basic ($8/mo) or Pro ($20/mo) for unlimited products.`,
      );
    }
  }
}