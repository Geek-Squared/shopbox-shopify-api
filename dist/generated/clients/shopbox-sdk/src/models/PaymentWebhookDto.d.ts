export interface PaymentWebhookDto {
    paymentId?: string;
    gatewayReference?: string;
    payload?: object;
}
export declare function instanceOfPaymentWebhookDto(value: object): value is PaymentWebhookDto;
export declare function PaymentWebhookDtoFromJSON(json: any): PaymentWebhookDto;
export declare function PaymentWebhookDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentWebhookDto;
export declare function PaymentWebhookDtoToJSON(json: any): PaymentWebhookDto;
export declare function PaymentWebhookDtoToJSONTyped(value?: PaymentWebhookDto | null, ignoreDiscriminator?: boolean): any;
