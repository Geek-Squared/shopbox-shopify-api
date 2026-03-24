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
    updateStore(sellerId: string, payload: UpdateStoreDto): Promise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        sellerId: string;
        slug: string;
        description: string | null;
        category: string | null;
        city: string | null;
        logoUrl: string | null;
    }>;
}
