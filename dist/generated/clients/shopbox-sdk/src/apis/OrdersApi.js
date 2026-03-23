"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class OrdersApi extends runtime.BaseAPI {
    async ordersControllerCreateRequestOpts(requestParameters) {
        if (requestParameters['createOrderDto'] == null) {
            throw new runtime.RequiredError('createOrderDto', 'Required parameter "createOrderDto" was null or undefined when calling ordersControllerCreate().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/orders`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.CreateOrderDtoToJSON)(requestParameters['createOrderDto']),
        };
    }
    async ordersControllerCreateRaw(requestParameters, initOverrides) {
        const requestOptions = await this.ordersControllerCreateRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async ordersControllerCreate(requestParameters, initOverrides) {
        await this.ordersControllerCreateRaw(requestParameters, initOverrides);
    }
    async ordersControllerFindAllRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        let urlPath = `/api/orders`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async ordersControllerFindAllRaw(initOverrides) {
        const requestOptions = await this.ordersControllerFindAllRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async ordersControllerFindAll(initOverrides) {
        await this.ordersControllerFindAllRaw(initOverrides);
    }
    async ordersControllerFindOneRequestOpts(requestParameters) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling ordersControllerFindOne().');
        }
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        let urlPath = `/api/orders/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async ordersControllerFindOneRaw(requestParameters, initOverrides) {
        const requestOptions = await this.ordersControllerFindOneRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async ordersControllerFindOne(requestParameters, initOverrides) {
        await this.ordersControllerFindOneRaw(requestParameters, initOverrides);
    }
    async ordersControllerUpdateRequestOpts(requestParameters) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling ordersControllerUpdate().');
        }
        if (requestParameters['updateOrderDto'] == null) {
            throw new runtime.RequiredError('updateOrderDto', 'Required parameter "updateOrderDto" was null or undefined when calling ordersControllerUpdate().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        let urlPath = `/api/orders/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));
        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.UpdateOrderDtoToJSON)(requestParameters['updateOrderDto']),
        };
    }
    async ordersControllerUpdateRaw(requestParameters, initOverrides) {
        const requestOptions = await this.ordersControllerUpdateRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async ordersControllerUpdate(requestParameters, initOverrides) {
        await this.ordersControllerUpdateRaw(requestParameters, initOverrides);
    }
}
exports.OrdersApi = OrdersApi;
//# sourceMappingURL=OrdersApi.js.map