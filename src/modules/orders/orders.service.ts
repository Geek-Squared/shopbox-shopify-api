import {
  BadRequestException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { ProductsRepository } from '../products/products.repository';
import { StoreRepository } from '../store/store.repository';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { OrdersRepository } from './orders.repository';

@Injectable()
export class OrdersService {
  private readonly logger = new Logger(OrdersService.name);

  constructor(
    private readonly ordersRepository: OrdersRepository,
    private readonly storeRepository: StoreRepository,
    private readonly productsRepository: ProductsRepository,
    private readonly whatsapp: WhatsappService, // ← ADDED
  ) {}

  findAll(sellerId: string) {
    return this.ordersRepository.listBySeller(sellerId);
  }

  async create(payload: CreateOrderDto) {
    const store = await this.storeRepository.findBySlug(payload.storeSlug);
    if (!store) {
      throw new NotFoundException('Store not found');
    }

    const products = await this.productsRepository.listActiveByStore(store.id);
    const byId = new Map(products.map((product) => [product.id, product]));

    if (payload.items.length === 0) {
      throw new BadRequestException('Order must include at least one item');
    }

    const lineItems = payload.items.map((item) => {
      const product = byId.get(item.productId);
      if (!product) {
        throw new BadRequestException(
          `Product ${item.productId} is invalid for this store`,
        );
      }

      const lineTotal = Number((item.quantity * product.price).toFixed(2));
      return {
        productId: product.id,
        quantity: item.quantity,
        unitPrice: product.price,
        lineTotal,
      };
    });

    const totalAmount = Number(
      lineItems.reduce((acc, item) => acc + item.lineTotal, 0).toFixed(2),
    );

    const orderNumber = `ORD-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    const deliveryCode = Math.floor(1000 + Math.random() * 9000).toString();

    const order = await this.ordersRepository.create({
      sellerId: store.sellerId,
      storeId: store.id,
      customerName: payload.customerName,
      customerPhone: payload.customerPhone,
      customerEmail: payload.customerEmail,
      totalAmount,
      items: lineItems,
      orderNumber,
      deliveryCode,
    });

    
    this.sendOrderNotifications(order, store, lineItems, products).catch(
      (err) =>
        this.logger.error(`WhatsApp notification failed: ${err.message}`),
    );

    return order;
  }

  async findOne(id: string, sellerId: string) {
    const order = await this.ordersRepository.findByIdForSeller(id, sellerId);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }

  async update(id: string, sellerId: string, payload: UpdateOrderDto) {
    const result = await this.ordersRepository.updateForSeller(
      id,
      sellerId,
      payload,
    );
    if (result.count === 0) {
      throw new NotFoundException('Order not found');
    }
    return this.findOne(id, sellerId);
  }

  // ── ADDED: Notification helpers ──────────────────────────────────────────

  private async sendOrderNotifications(
    order: any,
    store: any,
    lineItems: { productId: string; quantity: number; unitPrice: number; lineTotal: number }[],
    products: any[],
  ): Promise<void> {
    const productMap = new Map(products.map((p) => [p.id, p]));

    // Build readable items summary e.g. "2x Sourdough Bread, 1x Croissant"
    const itemsSummary = lineItems
      .map((item) => {
        const name = productMap.get(item.productId)?.name ?? item.productId;
        return `${item.quantity}x ${name}`;
      })
      .join(', ');

    // ── Notify SELLER ───────────────────────────────────────────────────────
    await this.whatsapp.notifySellerNewOrder(
      store.seller.phone,
      order.orderNumber,
      order.customerName,
      itemsSummary,
      order.totalAmount,
      'COD',
      {
        sellerId: store.sellerId,
        storeId: store.id,
        orderId: order.id,
      },
    );

    // ── Notify BUYER ────────────────────────────────────────────────────────
    await this.whatsapp.notifyBuyerOrderConfirmed(
      order.customerPhone,
      order.orderNumber,
      store.name,
      order.totalAmount,
      order.deliveryCode ?? '----',
      store.slug, // Pass storeSlug
      { orderId: order.id },
    );
  }
}