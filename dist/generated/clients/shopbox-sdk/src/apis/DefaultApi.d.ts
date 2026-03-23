import * as runtime from '../runtime';
export declare class DefaultApi extends runtime.BaseAPI {
    appControllerGetStatusRequestOpts(): Promise<runtime.RequestOpts>;
    appControllerGetStatusRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    appControllerGetStatus(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
