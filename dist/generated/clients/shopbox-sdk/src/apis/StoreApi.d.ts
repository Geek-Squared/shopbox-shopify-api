import * as runtime from '../runtime';
import type { UpdateStoreDto } from '../models/index';
export interface StoreControllerGetBySlugRequest {
    slug: string;
}
export interface StoreControllerUpdateStoreRequest {
    updateStoreDto: UpdateStoreDto;
}
export declare class StoreApi extends runtime.BaseAPI {
    storeControllerGetBySlugRequestOpts(requestParameters: StoreControllerGetBySlugRequest): Promise<runtime.RequestOpts>;
    storeControllerGetBySlugRaw(requestParameters: StoreControllerGetBySlugRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    storeControllerGetBySlug(requestParameters: StoreControllerGetBySlugRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    storeControllerUpdateStoreRequestOpts(requestParameters: StoreControllerUpdateStoreRequest): Promise<runtime.RequestOpts>;
    storeControllerUpdateStoreRaw(requestParameters: StoreControllerUpdateStoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    storeControllerUpdateStore(requestParameters: StoreControllerUpdateStoreRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
