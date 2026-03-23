import * as runtime from '../runtime';
export interface StoreControllerGetBySlugRequest {
    slug: string;
}
export declare class StoreApi extends runtime.BaseAPI {
    storeControllerGetBySlugRequestOpts(requestParameters: StoreControllerGetBySlugRequest): Promise<runtime.RequestOpts>;
    storeControllerGetBySlugRaw(requestParameters: StoreControllerGetBySlugRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    storeControllerGetBySlug(requestParameters: StoreControllerGetBySlugRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
