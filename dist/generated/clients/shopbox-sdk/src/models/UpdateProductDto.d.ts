export interface UpdateProductDto {
    name?: string;
    description?: string;
    price?: number;
    currency?: string;
    active?: boolean;
}
export declare function instanceOfUpdateProductDto(value: object): value is UpdateProductDto;
export declare function UpdateProductDtoFromJSON(json: any): UpdateProductDto;
export declare function UpdateProductDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateProductDto;
export declare function UpdateProductDtoToJSON(json: any): UpdateProductDto;
export declare function UpdateProductDtoToJSONTyped(value?: UpdateProductDto | null, ignoreDiscriminator?: boolean): any;
