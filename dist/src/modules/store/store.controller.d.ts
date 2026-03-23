import { JwtPayload } from '../auth/interfaces/jwt-payload.interface';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreService } from './store.service';
export declare class StoreController {
    private readonly storeService;
    constructor(storeService: StoreService);
    getBySlug(slug: string): Promise<{
        id: string;
        slug: string;
        name: string;
        description: string;
        products: {
            id: string;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            sellerId: string;
            description: string | null;
            storeId: string;
            price: number;
            currency: string;
            active: boolean;
            stockQty: number;
        }[];
    }>;
    updateStore(user: JwtPayload, payload: UpdateStoreDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        slug: string;
        description: string | null;
        logoUrl: string | null;
        city: string | null;
        category: string | null;
    }>;
}
