import * as runtime from '../runtime';
import type { UpdateSellerDto } from '../models/index';
export interface SellersControllerGetByIdRequest {
    id: string;
}
export interface SellersControllerUpdateProfileRequest {
    updateSellerDto: UpdateSellerDto;
}
export declare class SellersApi extends runtime.BaseAPI {
    sellersControllerGetByIdRequestOpts(requestParameters: SellersControllerGetByIdRequest): Promise<runtime.RequestOpts>;
    sellersControllerGetByIdRaw(requestParameters: SellersControllerGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    sellersControllerGetById(requestParameters: SellersControllerGetByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    sellersControllerGetProfileRequestOpts(): Promise<runtime.RequestOpts>;
    sellersControllerGetProfileRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    sellersControllerGetProfile(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    sellersControllerUpdateProfileRequestOpts(requestParameters: SellersControllerUpdateProfileRequest): Promise<runtime.RequestOpts>;
    sellersControllerUpdateProfileRaw(requestParameters: SellersControllerUpdateProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    sellersControllerUpdateProfile(requestParameters: SellersControllerUpdateProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
