export interface CreateProductDto {
    name: string;
    description?: string;
    price: number;
    currency?: string;
}
export declare function instanceOfCreateProductDto(value: object): value is CreateProductDto;
export declare function CreateProductDtoFromJSON(json: any): CreateProductDto;
export declare function CreateProductDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProductDto;
export declare function CreateProductDtoToJSON(json: any): CreateProductDto;
export declare function CreateProductDtoToJSONTyped(value?: CreateProductDto | null, ignoreDiscriminator?: boolean): any;
