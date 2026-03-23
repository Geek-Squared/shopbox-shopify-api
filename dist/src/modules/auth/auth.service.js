"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const sellers_repository_1 = require("../sellers/sellers.repository");
const store_repository_1 = require("../store/store.repository");
const whatsapp_service_1 = require("../whatsapp/whatsapp.service");
const prisma_service_1 = require("../../prisma/prisma.service");
let AuthService = class AuthService {
    constructor(sellersRepository, storeRepository, jwtService, whatsappService, prisma) {
        this.sellersRepository = sellersRepository;
        this.storeRepository = storeRepository;
        this.jwtService = jwtService;
        this.whatsappService = whatsappService;
        this.prisma = prisma;
    }
    async register(payload) {
        const existingSeller = await this.sellersRepository.findByPhone(payload.phone);
        if (existingSeller) {
            throw new common_1.BadRequestException('Phone number is already registered');
        }
        if (payload.email) {
            const existingEmail = await this.sellersRepository.findByEmail(payload.email);
            if (existingEmail) {
                throw new common_1.BadRequestException('Email is already registered');
            }
        }
        const existingStore = await this.storeRepository.findBySlug(payload.storeSlug);
        if (existingStore) {
            throw new common_1.BadRequestException('Store slug is already taken');
        }
        const passwordHash = await bcrypt.hash(payload.password, 10);
        const otpCode = this.generateOtp();
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
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
        await this.whatsappService.sendText(seller.phone, `🔐 Welcome to Shopboxx! Your verification code is: *${otpCode}*`, { sellerId: seller.id });
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
    async login(payload) {
        const seller = await this.sellersRepository.findByPhone(payload.phone);
        if (!seller) {
            throw new common_1.UnauthorizedException('Invalid phone or password');
        }
        if (!seller.isVerified) {
            throw new common_1.UnauthorizedException('Please verify your phone number first');
        }
        const passwordMatches = await bcrypt.compare(payload.password, seller.passwordHash);
        if (!passwordMatches) {
            throw new common_1.UnauthorizedException('Invalid email or password');
        }
        const store = await this.storeRepository.findBySellerId(seller.id);
        return this.buildAuthResponse(seller.id, seller.phone, seller.email || null, store?.slug ?? null);
    }
    logout(payload) {
        return {
            action: 'logout',
            revoked: Boolean(payload.refreshToken),
        };
    }
    async requestOtp(payload) {
        if (payload.code) {
            return this.verifyOtp(payload.phone, payload.code);
        }
        const seller = await this.sellersRepository.findByPhone(payload.phone);
        if (!seller) {
            throw new common_1.BadRequestException('Phone number not registered');
        }
        const otpCode = this.generateOtp();
        const otpExpiresAt = new Date(Date.now() + 10 * 60 * 1000);
        await this.prisma.otpCode.create({
            data: {
                phoneNumber: seller.phone,
                code: otpCode,
                purpose: 'SELLER_LOGIN',
                expiresAt: otpExpiresAt,
            },
        });
        await this.whatsappService.sendText(seller.phone, `🔐 Shopboxx Login Code: *${otpCode}*`, { sellerId: seller.id });
        return {
            message: 'OTP sent successfully',
        };
    }
    async verifyOtp(phone, code) {
        const seller = await this.sellersRepository.findByPhone(phone);
        if (!seller) {
            throw new common_1.BadRequestException('Invalid phone number');
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
            throw new common_1.BadRequestException('Invalid or expired OTP');
        }
        await this.prisma.otpCode.update({
            where: { id: otp.id },
            data: { isUsed: true },
        });
        await this.sellersRepository.update(seller.id, {
            isVerified: true,
        });
        const store = await this.storeRepository.findBySellerId(seller.id);
        return this.buildAuthResponse(seller.id, seller.phone, seller.email || null, store?.slug ?? null);
    }
    buildAuthResponse(sellerId, phone, email, storeSlug) {
        const jwtPayload = { sub: sellerId, phone, email };
        return {
            accessToken: this.jwtService.sign(jwtPayload),
            tokenType: 'Bearer',
            sellerId,
            storeSlug,
        };
    }
    generateOtp() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [sellers_repository_1.SellersRepository,
        store_repository_1.StoreRepository,
        jwt_1.JwtService,
        whatsapp_service_1.WhatsappService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map