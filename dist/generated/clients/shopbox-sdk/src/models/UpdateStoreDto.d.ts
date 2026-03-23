export interface UpdateStoreDto {
    name?: string;
    description?: string;
    logoUrl?: string;
    city?: string;
    category?: string;
}
export declare function instanceOfUpdateStoreDto(value: object): value is UpdateStoreDto;
export declare function UpdateStoreDtoFromJSON(json: any): UpdateStoreDto;
export declare function UpdateStoreDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateStoreDto;
export declare function UpdateStoreDtoToJSON(json: any): UpdateStoreDto;
export declare function UpdateStoreDtoToJSONTyped(value?: UpdateStoreDto | null, ignoreDiscriminator?: boolean): any;
