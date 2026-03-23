export interface OtpDto {
    phone: string;
    code?: string;
}
export declare function instanceOfOtpDto(value: object): value is OtpDto;
export declare function OtpDtoFromJSON(json: any): OtpDto;
export declare function OtpDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): OtpDto;
export declare function OtpDtoToJSON(json: any): OtpDto;
export declare function OtpDtoToJSONTyped(value?: OtpDto | null, ignoreDiscriminator?: boolean): any;
