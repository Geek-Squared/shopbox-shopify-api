import { CommentTriggerService } from './comment-trigger.service';
import { CreateTriggerDto } from './dto/create-trigger.dto';
export declare class CommentTriggerController {
    private readonly triggerService;
    constructor(triggerService: CommentTriggerService);
    list(req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }[]>;
    create(dto: CreateTriggerDto, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }>;
    update(id: string, dto: any, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }>;
    delete(id: string, req: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        merchantId: string;
        isActive: boolean;
        keyword: string;
        replyComment: boolean;
        templateMessage: string | null;
        triggerCount: number;
    }>;
    stats(req: any): Promise<{
        totalTriggers: number;
        totalDmsSent: number;
        totalOrdersFromIg: number;
        conversionRate: number;
    }>;
}
