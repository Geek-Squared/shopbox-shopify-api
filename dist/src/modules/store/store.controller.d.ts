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
            createdAt: Date;
            sellerId: string;
            storeId: string;
            name: string;
            price: number;
            description: string | null;
            currency: string;
            active: boolean;
            updatedAt: Date;
            stockQty: number;
        }[];
    }>;
    updateStore(user: JwtPayload, payload: UpdateStoreDto): Promise<{
        id: string;
        createdAt: Date;
        sellerId: string;
        name: string;
        description: string | null;
        slug: string;
        logoUrl: string | null;
        city: string | null;
        category: string | null;
        updatedAt: Date;
    }>;
}
