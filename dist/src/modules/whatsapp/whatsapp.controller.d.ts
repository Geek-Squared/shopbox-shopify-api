import { RawBodyRequest } from '@nestjs/common';
import { Request, Response } from 'express';
import { WhatsappService } from './whatsapp.service';
import { BotEngineService } from './bot-engine.service';
export declare class WhatsappController {
    private readonly whatsappService;
    private readonly botEngine;
    private readonly logger;
    constructor(whatsappService: WhatsappService, botEngine: BotEngineService);
    verifyWebhook(mode: string, token: string, challenge: string, res: Response): Response<any, Record<string, any>>;
    receiveMessage(req: RawBodyRequest<Request>, signature: string, body: any): Promise<{
        status: string;
    }>;
    sendMessage(body: {
        to: string;
        text: string;
    }): Promise<{
        sent: boolean;
    }>;
}
