export interface RidersDto {
    zone?: string;
}
export declare function instanceOfRidersDto(value: object): value is RidersDto;
export declare function RidersDtoFromJSON(json: any): RidersDto;
export declare function RidersDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RidersDto;
export declare function RidersDtoToJSON(json: any): RidersDto;
export declare function RidersDtoToJSONTyped(value?: RidersDto | null, ignoreDiscriminator?: boolean): any;
