import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { SellersService } from './sellers.service';
export declare class SellersController {
    private readonly sellersService;
    constructor(sellersService: SellersService);
    getProfile(user: JwtPayload): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
    }>;
    updateProfile(user: JwtPayload, payload: UpdateSellerDto): Promise<{
        id: string;
        name: string;
        phone: string;
        updatedAt: Date;
    }>;
    getById(id: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string;
    }>;
}
