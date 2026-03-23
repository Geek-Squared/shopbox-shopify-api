import { PrismaService } from '../../prisma/prisma.service';
import { UpdateStoreDto } from './dto/update-store.dto';
import { StoreRepository } from './store.repository';
export declare class StoreService {
    private readonly storeRepository;
    private readonly prisma;
    constructor(storeRepository: StoreRepository, prisma: PrismaService);
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
    updateStore(sellerId: string, payload: UpdateStoreDto): Promise<{
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
