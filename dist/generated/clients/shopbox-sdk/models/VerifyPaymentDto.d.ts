export interface VerifyPaymentDto {
    paymentId: string;
    gatewayReference: string;
}
export declare function instanceOfVerifyPaymentDto(value: object): value is VerifyPaymentDto;
export declare function VerifyPaymentDtoFromJSON(json: any): VerifyPaymentDto;
export declare function VerifyPaymentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerifyPaymentDto;
export declare function VerifyPaymentDtoToJSON(json: any): VerifyPaymentDto;
export declare function VerifyPaymentDtoToJSONTyped(value?: VerifyPaymentDto | null, ignoreDiscriminator?: boolean): any;
