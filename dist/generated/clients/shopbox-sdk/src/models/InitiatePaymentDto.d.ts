export interface InitiatePaymentDto {
    orderId: string;
    provider: InitiatePaymentDtoProviderEnum;
}
export declare const InitiatePaymentDtoProviderEnum: {
    readonly PAYNOW: "PAYNOW";
    readonly INNBUCKS: "INNBUCKS";
};
export type InitiatePaymentDtoProviderEnum = typeof InitiatePaymentDtoProviderEnum[keyof typeof InitiatePaymentDtoProviderEnum];
export declare function instanceOfInitiatePaymentDto(value: object): value is InitiatePaymentDto;
export declare function InitiatePaymentDtoFromJSON(json: any): InitiatePaymentDto;
export declare function InitiatePaymentDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): InitiatePaymentDto;
export declare function InitiatePaymentDtoToJSON(json: any): InitiatePaymentDto;
export declare function InitiatePaymentDtoToJSONTyped(value?: InitiatePaymentDto | null, ignoreDiscriminator?: boolean): any;
