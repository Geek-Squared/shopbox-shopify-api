"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SellersApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class SellersApi extends runtime.BaseAPI {
    async sellersControllerGetByIdRequestOpts(requestParameters) {
        if (requestParameters['id'] == null) {
            throw new runtime.RequiredError('id', 'Required parameter "id" was null or undefined when calling sellersControllerGetById().');
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
        let urlPath = `/api/sellers/{id}`;
        urlPath = urlPath.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters['id'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async sellersControllerGetByIdRaw(requestParameters, initOverrides) {
        const requestOptions = await this.sellersControllerGetByIdRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async sellersControllerGetById(requestParameters, initOverrides) {
        await this.sellersControllerGetByIdRaw(requestParameters, initOverrides);
    }
    async sellersControllerGetProfileRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        let urlPath = `/api/sellers`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async sellersControllerGetProfileRaw(initOverrides) {
        const requestOptions = await this.sellersControllerGetProfileRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async sellersControllerGetProfile(initOverrides) {
        await this.sellersControllerGetProfileRaw(initOverrides);
    }
    async sellersControllerUpdateProfileRequestOpts(requestParameters) {
        if (requestParameters['updateSellerDto'] == null) {
            throw new runtime.RequiredError('updateSellerDto', 'Required parameter "updateSellerDto" was null or undefined when calling sellersControllerUpdateProfile().');
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
        let urlPath = `/api/sellers`;
        return {
            path: urlPath,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.UpdateSellerDtoToJSON)(requestParameters['updateSellerDto']),
        };
    }
    async sellersControllerUpdateProfileRaw(requestParameters, initOverrides) {
        const requestOptions = await this.sellersControllerUpdateProfileRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async sellersControllerUpdateProfile(requestParameters, initOverrides) {
        await this.sellersControllerUpdateProfileRaw(requestParameters, initOverrides);
    }
}
exports.SellersApi = SellersApi;
//# sourceMappingURL=SellersApi.js.map