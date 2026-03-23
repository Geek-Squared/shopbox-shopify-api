"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class ProductsApi extends runtime.BaseAPI {
    async productsControllerCreateRequestOpts(requestParameters) {
        if (requestParameters['createProductDto'] == null) {
            throw new runtime.RequiredError('createProductDto', 'Required parameter "createProductDto" was null or undefined when calling productsControllerCreate().');
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
        let urlPath = `/api/products`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.CreateProductDtoToJSON)(requestParameters['createProductDto']),
        };
    }
    async productsControllerCreateRaw(requestParameters, initOverrides) {
        const requestOptions = await this.productsControllerCreateRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async productsControllerCreate(requestParameters, initOverrides) {
        await this.productsControllerCreateRaw(requestParameters, initOverrides);
    }
    async productsControllerFindAllRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        let urlPath = `/api/products`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async productsControllerFindAllRaw(initOverrides) {
        const requestOptions = await this.productsControllerFindAllRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async productsControllerFindAll(initOverrides) {
        await this.productsControllerFindAllRaw(initOverrides);
    }
    async productsControllerFindOneRequestOpts(requestParameters) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling productsControllerFindOne().');
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
        let urlPath = `/api/products/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async productsControllerFindOneRaw(requestParameters, initOverrides) {
        const requestOptions = await this.productsControllerFindOneRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async productsControllerFindOne(requestParameters, initOverrides) {
        await this.productsControllerFindOneRaw(requestParameters, initOverrides);
    }
    async productsControllerRemoveRequestOpts(requestParameters) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling productsControllerRemove().');
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
        let urlPath = `/api/products/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));
        return {
            path: urlPath,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async productsControllerRemoveRaw(requestParameters, initOverrides) {
        const requestOptions = await this.productsControllerRemoveRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async productsControllerRemove(requestParameters, initOverrides) {
        await this.productsControllerRemoveRaw(requestParameters, initOverrides);
    }
    async productsControllerUpdateRequestOpts(requestParameters) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling productsControllerUpdate().');
        }
        if (requestParameters['updateProductDto'] == null) {
            throw new runtime.RequiredError('updateProductDto', 'Required parameter "updateProductDto" was null or undefined when calling productsControllerUpdate().');
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
        let urlPath = `/api/products/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));
        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.UpdateProductDtoToJSON)(requestParameters['updateProductDto']),
        };
    }
    async productsControllerUpdateRaw(requestParameters, initOverrides) {
        const requestOptions = await this.productsControllerUpdateRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async productsControllerUpdate(requestParameters, initOverrides) {
        await this.productsControllerUpdateRaw(requestParameters, initOverrides);
    }
}
exports.ProductsApi = ProductsApi;
//# sourceMappingURL=ProductsApi.js.map