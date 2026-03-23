import { JwtService } from '@nestjs/jwt';
import { SellersRepository } from '../sellers/sellers.repository';
import { StoreRepository } from '../store/store.repository';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { PrismaService } from '../../prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import { OtpDto } from './dto/otp.dto';
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly sellersRepository;
    private readonly storeRepository;
    private readonly jwtService;
    private readonly whatsappService;
    private readonly prisma;
    constructor(sellersRepository: SellersRepository, storeRepository: StoreRepository, jwtService: JwtService, whatsappService: WhatsappService, prisma: PrismaService);
    register(payload: RegisterDto): Promise<{
        message: string;
        sellerId: string;
    }>;
    login(payload: LoginDto): Promise<{
        accessToken: string;
        tokenType: string;
        sellerId: string;
        storeSlug: string;
    }>;
    logout(payload: LogoutDto): {
        action: string;
        revoked: boolean;
    };
    requestOtp(payload: OtpDto): Promise<{
        accessToken: string;
        tokenType: string;
        sellerId: string;
        storeSlug: string;
    } | {
        message: string;
    }>;
    private verifyOtp;
    private buildAuthResponse;
    private generateOtp;
}
