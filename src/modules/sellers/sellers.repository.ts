import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SellersRepository {
  constructor(private readonly prisma: PrismaService) {}

  findByEmail(email: string) {
    return this.prisma.seller.findUnique({ where: { email } });
  }

  findByPhone(phone: string) {
    return this.prisma.seller.findUnique({ where: { phone } });
  }

  findById(id: string) {
    return this.prisma.seller.findUnique({ where: { id } });
  }

  create(payload: {
    email?: string;
    name: string;
    phone: string;
    passwordHash: string;
  }) {
    return this.prisma.seller.create({ data: payload });
  }

  update(
    id: string,
    payload: {
      name?: string;
      phone?: string;
      isVerified?: boolean;
      otpCode?: string | null;
      otpExpiresAt?: Date | null;
    },
  ) {
    return this.prisma.seller.update({ where: { id }, data: payload });
  }
}
