import * as runtime from '../runtime';
import type { CreateProductDto, UpdateProductDto } from '../models/index';
export interface ProductsControllerCreateRequest {
    createProductDto: CreateProductDto;
}
export interface ProductsControllerFindOneRequest {
    id: string;
}
export interface ProductsControllerRemoveRequest {
    id: string;
}
export interface ProductsControllerUpdateRequest {
    id: string;
    updateProductDto: UpdateProductDto;
}
export declare class ProductsApi extends runtime.BaseAPI {
    productsControllerCreateRequestOpts(requestParameters: ProductsControllerCreateRequest): Promise<runtime.RequestOpts>;
    productsControllerCreateRaw(requestParameters: ProductsControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    productsControllerCreate(requestParameters: ProductsControllerCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    productsControllerFindAllRequestOpts(): Promise<runtime.RequestOpts>;
    productsControllerFindAllRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    productsControllerFindAll(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    productsControllerFindOneRequestOpts(requestParameters: ProductsControllerFindOneRequest): Promise<runtime.RequestOpts>;
    productsControllerFindOneRaw(requestParameters: ProductsControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    productsControllerFindOne(requestParameters: ProductsControllerFindOneRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    productsControllerRemoveRequestOpts(requestParameters: ProductsControllerRemoveRequest): Promise<runtime.RequestOpts>;
    productsControllerRemoveRaw(requestParameters: ProductsControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    productsControllerRemove(requestParameters: ProductsControllerRemoveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    productsControllerUpdateRequestOpts(requestParameters: ProductsControllerUpdateRequest): Promise<runtime.RequestOpts>;
    productsControllerUpdateRaw(requestParameters: ProductsControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    productsControllerUpdate(requestParameters: ProductsControllerUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
