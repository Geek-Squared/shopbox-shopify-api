import * as runtime from '../runtime';
import type { DeliveryDto, RidersDto } from '../models/index';
export interface PluginsControllerDeliveryRequest {
    deliveryDto: DeliveryDto;
}
export interface PluginsControllerRidersRequest {
    ridersDto: RidersDto;
}
export declare class PluginsApi extends runtime.BaseAPI {
    pluginsControllerDeliveryRequestOpts(requestParameters: PluginsControllerDeliveryRequest): Promise<runtime.RequestOpts>;
    pluginsControllerDeliveryRaw(requestParameters: PluginsControllerDeliveryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    pluginsControllerDelivery(requestParameters: PluginsControllerDeliveryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    pluginsControllerListRequestOpts(): Promise<runtime.RequestOpts>;
    pluginsControllerListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    pluginsControllerList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    pluginsControllerRidersRequestOpts(requestParameters: PluginsControllerRidersRequest): Promise<runtime.RequestOpts>;
    pluginsControllerRidersRaw(requestParameters: PluginsControllerRidersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    pluginsControllerRiders(requestParameters: PluginsControllerRidersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
