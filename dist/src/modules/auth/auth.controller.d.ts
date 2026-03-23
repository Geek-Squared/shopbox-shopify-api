import { LoginDto } from './dto/login.dto';
import { LogoutDto } from './dto/logout.dto';
import { OtpDto } from './dto/otp.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    otp(payload: OtpDto): Promise<{
        accessToken: string;
        tokenType: string;
        sellerId: string;
        storeSlug: string;
    } | {
        message: string;
    }>;
}
