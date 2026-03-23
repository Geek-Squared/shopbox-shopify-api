export interface UpdateOrderDto {
    status?: UpdateOrderDtoStatusEnum;
    customerName?: string;
    customerPhone?: string;
}
export declare const UpdateOrderDtoStatusEnum: {
    readonly PENDING: "PENDING";
    readonly PAID: "PAID";
    readonly CONFIRMED: "CONFIRMED";
    readonly FULFILLED: "FULFILLED";
    readonly CANCELLED: "CANCELLED";
};
export type UpdateOrderDtoStatusEnum = typeof UpdateOrderDtoStatusEnum[keyof typeof UpdateOrderDtoStatusEnum];
export declare function instanceOfUpdateOrderDto(value: object): value is UpdateOrderDto;
export declare function UpdateOrderDtoFromJSON(json: any): UpdateOrderDto;
export declare function UpdateOrderDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateOrderDto;
export declare function UpdateOrderDtoToJSON(json: any): UpdateOrderDto;
export declare function UpdateOrderDtoToJSONTyped(value?: UpdateOrderDto | null, ignoreDiscriminator?: boolean): any;
