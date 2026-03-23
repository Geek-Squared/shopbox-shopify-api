import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface CartItem {
  productId: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  imageUrl?: string;
  variantId?: string;
}

export interface BotContext {
  storeSlug?: string;
  storeId?: string;
  sellerId?: string;
  selectedProductId?: string;
  cart?: CartItem[];
  buyerName?: string;
  deliveryAddress?: string;
  paymentMethod?: string;
  notes?: string;
  activeDeliveryId?: string;
  riderId?: string;
  merchantId?: string;
  shop?: string;
  products?: any[];
  selectedProduct?: any;
  collectionId?: string;
}



@Injectable()
export class BotSessionService {
  constructor(private readonly prisma: PrismaService) {}

  async get(phoneNumber: string): Promise<{ state: string; context: BotContext }> {
    const session = await this.prisma.botSession.findUnique({
      where: { phoneNumber },
    });

    if (!session) {
      return { state: 'IDLE', context: {} };
    }

    return {
      state: session.state,
      context: (session.context as any) || {},
    };
  }

  async set(phoneNumber: string, state: string, context: BotContext) {
    return this.prisma.botSession.upsert({
      where: { phoneNumber },
      update: { state, context: context as any },
      create: { phoneNumber, state, context: context as any },
    });
  }

  async updateContext(phoneNumber: string, state: string, update: Partial<BotContext>) {
    const current = await this.get(phoneNumber);
    return this.set(phoneNumber, state, { ...current.context, ...update });
  }

  async reset(phoneNumber: string) {
    return this.prisma.botSession.delete({ where: { phoneNumber } }).catch(() => {});
  }

  // Helper for cart
  addToCart(cart: CartItem[], item: CartItem): CartItem[] {
    const existing = cart.find((i) => i.productId === item.productId);
    if (existing) {
      existing.quantity += item.quantity;
      return [...cart];
    }
    return [...cart, item];
  }

  cartSubtotal(cart: CartItem[]): number {
    return cart.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);
  }
}
