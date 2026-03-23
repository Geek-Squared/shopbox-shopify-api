export interface LoginDto {
    email: string;
    password: string;
}
export declare function instanceOfLoginDto(value: object): value is LoginDto;
export declare function LoginDtoFromJSON(json: any): LoginDto;
export declare function LoginDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginDto;
export declare function LoginDtoToJSON(json: any): LoginDto;
export declare function LoginDtoToJSONTyped(value?: LoginDto | null, ignoreDiscriminator?: boolean): any;
