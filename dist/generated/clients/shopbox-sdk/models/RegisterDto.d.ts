export interface RegisterDto {
    email: string;
    password: string;
    name: string;
    storeSlug: string;
    phone?: string;
}
export declare function instanceOfRegisterDto(value: object): value is RegisterDto;
export declare function RegisterDtoFromJSON(json: any): RegisterDto;
export declare function RegisterDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterDto;
export declare function RegisterDtoToJSON(json: any): RegisterDto;
export declare function RegisterDtoToJSONTyped(value?: RegisterDto | null, ignoreDiscriminator?: boolean): any;
