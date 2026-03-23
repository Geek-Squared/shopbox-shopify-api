import * as runtime from '../runtime';
import type { SendWhatsappDto, WhatsappWebhookDto } from '../models/index';
export interface WhatsappControllerSendRequest {
    sendWhatsappDto: SendWhatsappDto;
}
export interface WhatsappControllerWebhookRequest {
    whatsappWebhookDto: WhatsappWebhookDto;
}
export declare class WhatsappApi extends runtime.BaseAPI {
    whatsappControllerSendRequestOpts(requestParameters: WhatsappControllerSendRequest): Promise<runtime.RequestOpts>;
    whatsappControllerSendRaw(requestParameters: WhatsappControllerSendRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    whatsappControllerSend(requestParameters: WhatsappControllerSendRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    whatsappControllerWebhookRequestOpts(requestParameters: WhatsappControllerWebhookRequest): Promise<runtime.RequestOpts>;
    whatsappControllerWebhookRaw(requestParameters: WhatsappControllerWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    whatsappControllerWebhook(requestParameters: WhatsappControllerWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
