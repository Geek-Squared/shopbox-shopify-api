import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface UpsertMerchantData {
  shop: string;
  accessToken: string;
  scope: string;
  storeName?: string;
  isActive?: boolean;
}

export interface UpdateChannelsData {
  whatsappConnected?: boolean;
  whatsappNumber?: string;
  whatsappPhoneId?: string;
  whatsappToken?: string;
  instagramConnected?: boolean;
  instagramToken?: string;
  instagramAccountId?: string;
  instagramUsername?: string;
  messengerConnected?: boolean;
  messengerToken?: string;
  messengerPageId?: string;
  messengerPageName?: string;
}

@Injectable()
export class ShopifyRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByShop(shop: string) {
    return this.prisma.shopifyMerchant.findUnique({
      where: { shop },
    });
  }

  async findById(id: string) {
    return this.prisma.shopifyMerchant.findUnique({
      where: { id },
    });
  }


  upsertMerchant(data: UpsertMerchantData) {
    return this.prisma.shopifyMerchant.upsert({
      where: { shop: data.shop },
      update: {
        accessToken: data.accessToken,
        scope: data.scope,
        storeName: data.storeName,
        isActive: data.isActive ?? true,
        uninstalledAt: null,
      },
      create: {
        shop: data.shop,
        accessToken: data.accessToken,
        scope: data.scope,
        storeName: data.storeName,
        isActive: data.isActive ?? true,
      },
    });
  }

  partialUpdate(shop: string, data: Partial<UpsertMerchantData>) {
    return this.prisma.shopifyMerchant.update({
      where: { shop },
      data,
    });
  }

  updateChannels(shop: string, data: UpdateChannelsData) {
    return this.prisma.shopifyMerchant.update({
      where: { shop },
      data,
    });
  }

  markUninstalled(shop: string) {
    return this.prisma.shopifyMerchant.update({
      where: { shop },
      data: {
        isActive: false,
        accessToken: '',
        uninstalledAt: new Date(),
      },
    });
  }

  findActive() {
    return this.prisma.shopifyMerchant.findMany({
      where: { isActive: true },
    });
  }
}
