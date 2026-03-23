export interface DeliveryDto {
    orderId: string;
    address?: string;
}
export declare function instanceOfDeliveryDto(value: object): value is DeliveryDto;
export declare function DeliveryDtoFromJSON(json: any): DeliveryDto;
export declare function DeliveryDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeliveryDto;
export declare function DeliveryDtoToJSON(json: any): DeliveryDto;
export declare function DeliveryDtoToJSONTyped(value?: DeliveryDto | null, ignoreDiscriminator?: boolean): any;
