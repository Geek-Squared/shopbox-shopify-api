export interface SendWhatsappDto {
    to: string;
    text?: string;
    template?: string;
    sellerId?: string;
    orderId?: string;
}
export declare function instanceOfSendWhatsappDto(value: object): value is SendWhatsappDto;
export declare function SendWhatsappDtoFromJSON(json: any): SendWhatsappDto;
export declare function SendWhatsappDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendWhatsappDto;
export declare function SendWhatsappDtoToJSON(json: any): SendWhatsappDto;
export declare function SendWhatsappDtoToJSONTyped(value?: SendWhatsappDto | null, ignoreDiscriminator?: boolean): any;
