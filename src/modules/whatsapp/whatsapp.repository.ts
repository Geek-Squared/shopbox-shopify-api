import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class WhatsappRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: {
    sellerId?: string;
    storeId?: string;
    orderId?: string;
    direction: 'INBOUND' | 'OUTBOUND';
    toNumber?: string;
    fromNumber?: string;
    content: string;
    status?: string;
  }) {
    return this.prisma.whatsappMessage.create({ data: payload });
  }
}
