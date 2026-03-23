import { UpdateSellerDto } from './dto/update-seller.dto';
import { SellersRepository } from './sellers.repository';
export declare class SellersService {
    private readonly sellersRepository;
    constructor(sellersRepository: SellersRepository);
    getProfile(sellerId: string): Promise<{
        id: string;
        email: string;
        name: string;
        phone: string;
        createdAt: Date;
    }>;
    updateProfile(sellerId: string, payload: UpdateSellerDto): Promise<{
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
