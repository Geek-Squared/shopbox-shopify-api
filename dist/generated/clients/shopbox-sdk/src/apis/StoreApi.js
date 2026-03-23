"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class StoreApi extends runtime.BaseAPI {
    async storeControllerGetBySlugRequestOpts(requestParameters) {
        if (requestParameters['slug'] == null) {
            throw new runtime.RequiredError('slug', 'Required parameter "slug" was null or undefined when calling storeControllerGetBySlug().');
        }
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/api/store/{slug}`;
        urlPath = urlPath.replace(`{${"slug"}}`, encodeURIComponent(String(requestParameters['slug'])));
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async storeControllerGetBySlugRaw(requestParameters, initOverrides) {
        const requestOptions = await this.storeControllerGetBySlugRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async storeControllerGetBySlug(requestParameters, initOverrides) {
        await this.storeControllerGetBySlugRaw(requestParameters, initOverrides);
    }
    async storeControllerUpdateStoreRequestOpts(requestParameters) {
        if (requestParameters['updateStoreDto'] == null) {
            throw new runtime.RequiredError('updateStoreDto', 'Required parameter "updateStoreDto" was null or undefined when calling storeControllerUpdateStore().');
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
        let urlPath = `/api/store`;
        return {
            path: urlPath,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.UpdateStoreDtoToJSON)(requestParameters['updateStoreDto']),
        };
    }
    async storeControllerUpdateStoreRaw(requestParameters, initOverrides) {
        const requestOptions = await this.storeControllerUpdateStoreRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async storeControllerUpdateStore(requestParameters, initOverrides) {
        await this.storeControllerUpdateStoreRaw(requestParameters, initOverrides);
    }
}
exports.StoreApi = StoreApi;
//# sourceMappingURL=StoreApi.js.map