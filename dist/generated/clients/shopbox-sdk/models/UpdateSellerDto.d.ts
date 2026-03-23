export interface UpdateSellerDto {
    name?: string;
    phone?: string;
}
export declare function instanceOfUpdateSellerDto(value: object): value is UpdateSellerDto;
export declare function UpdateSellerDtoFromJSON(json: any): UpdateSellerDto;
export declare function UpdateSellerDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSellerDto;
export declare function UpdateSellerDtoToJSON(json: any): UpdateSellerDto;
export declare function UpdateSellerDtoToJSONTyped(value?: UpdateSellerDto | null, ignoreDiscriminator?: boolean): any;
