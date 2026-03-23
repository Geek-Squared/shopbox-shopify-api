import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PaymentsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(payload: {
    orderId: string;
    provider: string;
    amount: number;
    currency: string;
    gatewayReference: string;
    status: 'PENDING' | 'SUCCESS' | 'FAILED';
  }) {
    return this.prisma.payment.create({ data: payload });
  }

  findById(id: string) {
    return this.prisma.payment.findUnique({ where: { id } });
  }

  update(
    id: string,
    payload: {
      status: 'PENDING' | 'SUCCESS' | 'FAILED';
      gatewayReference?: string;
    },
  ) {
    return this.prisma.payment.update({ where: { id }, data: payload });
  }
}
