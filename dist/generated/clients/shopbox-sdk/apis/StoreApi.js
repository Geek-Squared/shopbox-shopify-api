"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreApi = void 0;
const runtime = require("../runtime");
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
}
exports.StoreApi = StoreApi;
//# sourceMappingURL=StoreApi.js.map