import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { SellersRepository } from '../sellers/sellers.repository';
import { StoreRepository } from '../store/store.repository';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import { OtpDto } from './dto/otp.dto';
import { RegisterDto } from './dto/register.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly sellersRepository: SellersRepository,
    private readonly storeRepository: StoreRepository,
    private readonly jwtService: JwtService,
    private readonly whatsappService: WhatsappService,
    private readonly prisma: PrismaService,
  ) {}

  async register(payload: RegisterDto) {
    const existingSeller = await this.sellersRepository.findByPhone(
      payload.phone,
    );
    if (existingSeller) {
      throw new BadRequestException('Phone number is already registered');
    }

    if (payload.email) {
      const existingEmail = await this.sellersRepository.findByEmail(
        payload.email,
      );
      if (existingEmail) {
        throw new BadRequestException('Email is already registered');
      }
    }

    const existingStore = await this.storeRepository.findBySlug(
      payload.storeSlug,
    );
    if (existingStore) {
      throw new BadRequestException('Store slug is already taken');
    }

    const passwordHash = await bcrypt.hash(payload.password, 10);
    const otpCode = this.generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    const seller = await this.sellersRepository.create({
      email: payload.email,
      name: payload.name,
      phone: payload.phone,
      passwordHash,
    });

    await this.prisma.otpCode.create({
      data: {
        phoneNumber: payload.phone,
        code: otpCode,
        purpose: 'SELLER_REGISTER',
        expiresAt: otpExpiresAt,
      },
    });

    await this.whatsappService.sendText(
      seller.phone,
      `🔐 Welcome to Shopboxx! Your verification code is: *${otpCode}*`,
      { sellerId: seller.id },
    );

    const store = await this.storeRepository.create({
      sellerId: seller.id,
      slug: payload.storeSlug,
      name: `${payload.name}'s Store`,
      description: 'WhatsApp-enabled storefront',
    });

    return {
      message: 'OTP sent successfully',
      sellerId: seller.id,
    };
  }

  async login(payload: LoginDto) {
    const seller = await this.sellersRepository.findByPhone(payload.phone);
    if (!seller) {
      throw new UnauthorizedException('Invalid phone or password');
    }

    if (!seller.isVerified) {
      throw new UnauthorizedException('Please verify your phone number first');
    }

    const passwordMatches = await bcrypt.compare(
      payload.password,
      seller.passwordHash,
    );
    if (!passwordMatches) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const store = await this.storeRepository.findBySellerId(seller.id);
    return this.buildAuthResponse(
      seller.id,
      seller.phone,
      seller.email || null,
      store?.slug ?? null,
    );
  }

  logout(payload: LogoutDto) {
    return {
      action: 'logout',
      revoked: Boolean(payload.refreshToken),
    };
  }

  async requestOtp(payload: OtpDto) {
    if (payload.code) {
      return this.verifyOtp(payload.phone, payload.code);
    }

    const seller = await this.sellersRepository.findByPhone(payload.phone);
    if (!seller) {
      throw new BadRequestException('Phone number not registered');
    }

    const otpCode = this.generateOtp();
    const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await this.prisma.otpCode.create({
      data: {
        phoneNumber: seller.phone,
        code: otpCode,
        purpose: 'SELLER_LOGIN',
        expiresAt: otpExpiresAt,
      },
    });

    await this.whatsappService.sendText(
      seller.phone,
      `🔐 Shopboxx Login Code: *${otpCode}*`,
      { sellerId: seller.id },
    );

    return {
      message: 'OTP sent successfully',
    };
  }

  private async verifyOtp(phone: string, code: string) {
    const seller = await this.sellersRepository.findByPhone(phone);
    if (!seller) {
      throw new BadRequestException('Invalid phone number');
    }

    const otp = await this.prisma.otpCode.findFirst({
      where: {
        phoneNumber: phone,
        code,
        isUsed: false,
        expiresAt: { gt: new Date() },
      },
      orderBy: { createdAt: 'desc' },
    });

    if (!otp) {
      throw new BadRequestException('Invalid or expired OTP');
    }

    await this.prisma.otpCode.update({
      where: { id: otp.id },
      data: { isUsed: true },
    });

    await this.sellersRepository.update(seller.id, {
      isVerified: true,
    });

    const store = await this.storeRepository.findBySellerId(seller.id);
    return this.buildAuthResponse(
      seller.id,
      seller.phone,
      seller.email || null,
      store?.slug ?? null,
    );
  }

  private buildAuthResponse(
    sellerId: string,
    phone: string,
    email: string | null,
    storeSlug: string | null,
  ) {
    const jwtPayload: JwtPayload = { sub: sellerId, phone, email };

    return {
      accessToken: this.jwtService.sign(jwtPayload),
      tokenType: 'Bearer',
      sellerId,
      storeSlug,
    };
  }

  private generateOtp(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
}
