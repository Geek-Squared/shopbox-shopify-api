import type { CreateOrderItemDto } from './CreateOrderItemDto';
export interface CreateOrderDto {
    storeSlug: string;
    customerName: string;
    customerPhone: string;
    customerEmail?: string;
    items: Array<CreateOrderItemDto>;
}
export declare function instanceOfCreateOrderDto(value: object): value is CreateOrderDto;
export declare function CreateOrderDtoFromJSON(json: any): CreateOrderDto;
export declare function CreateOrderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateOrderDto;
export declare function CreateOrderDtoToJSON(json: any): CreateOrderDto;
export declare function CreateOrderDtoToJSONTyped(value?: CreateOrderDto | null, ignoreDiscriminator?: boolean): any;
