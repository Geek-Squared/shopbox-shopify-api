export interface CreateOrderItemDto {
    productId: string;
    quantity: number;
}
export declare function instanceOfCreateOrderItemDto(value: object): value is CreateOrderItemDto;
export declare function CreateOrderItemDtoFromJSON(json: any): CreateOrderItemDto;
export declare function CreateOrderItemDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrderItemDto;
export declare function CreateOrderItemDtoToJSON(json: any): CreateOrderItemDto;
export declare function CreateOrderItemDtoToJSONTyped(value?: CreateOrderItemDto | null, ignoreDiscriminator?: boolean): any;
