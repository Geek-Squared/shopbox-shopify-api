export interface WhatsappWebhookDto {
    from?: string;
    message?: string;
    payload?: object;
}
export declare function instanceOfWhatsappWebhookDto(value: object): value is WhatsappWebhookDto;
export declare function WhatsappWebhookDtoFromJSON(json: any): WhatsappWebhookDto;
export declare function WhatsappWebhookDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): WhatsappWebhookDto;
export declare function WhatsappWebhookDtoToJSON(json: any): WhatsappWebhookDto;
export declare function WhatsappWebhookDtoToJSONTyped(value?: WhatsappWebhookDto | null, ignoreDiscriminator?: boolean): any;
