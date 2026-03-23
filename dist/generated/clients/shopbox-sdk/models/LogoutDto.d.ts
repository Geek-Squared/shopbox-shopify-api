export interface LogoutDto {
    refreshToken?: string;
}
export declare function instanceOfLogoutDto(value: object): value is LogoutDto;
export declare function LogoutDtoFromJSON(json: any): LogoutDto;
export declare function LogoutDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): LogoutDto;
export declare function LogoutDtoToJSON(json: any): LogoutDto;
export declare function LogoutDtoToJSONTyped(value?: LogoutDto | null, ignoreDiscriminator?: boolean): any;
