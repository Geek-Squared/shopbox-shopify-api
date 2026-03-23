import * as runtime from '../runtime';
import type { CreateOrderDto, UpdateOrderDto } from '../models/index';
export interface OrdersControllerCreateRequest {
    createOrderDto: CreateOrderDto;
}
export interface OrdersControllerFindOneRequest {
    id: string;
}
export interface OrdersControllerUpdateRequest {
    id: string;
    updateOrderDto: UpdateOrderDto;
}
export declare class OrdersApi extends runtime.BaseAPI {
    ordersControllerCreateRequestOpts(requestParameters: OrdersControllerCreateRequest): Promise<runtime.RequestOpts>;
    ordersControllerCreateRaw(requestParameters: OrdersControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    ordersControllerCreate(requestParameters: OrdersControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    ordersControllerFindAllRequestOpts(): Promise<runtime.RequestOpts>;
    ordersControllerFindAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    ordersControllerFindAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    ordersControllerFindOneRequestOpts(requestParameters: OrdersControllerFindOneRequest): Promise<runtime.RequestOpts>;
    ordersControllerFindOneRaw(requestParameters: OrdersControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    ordersControllerFindOne(requestParameters: OrdersControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    ordersControllerUpdateRequestOpts(requestParameters: OrdersControllerUpdateRequest): Promise<runtime.RequestOpts>;
    ordersControllerUpdateRaw(requestParameters: OrdersControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    ordersControllerUpdate(requestParameters: OrdersControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
