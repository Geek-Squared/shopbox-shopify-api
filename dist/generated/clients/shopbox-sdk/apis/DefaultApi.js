"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultApi = void 0;
const runtime = require("../runtime");
class DefaultApi extends runtime.BaseAPI {
    async appControllerGetStatusRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        let urlPath = `/api`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async appControllerGetStatusRaw(initOverrides) {
        const requestOptions = await this.appControllerGetStatusRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async appControllerGetStatus(initOverrides) {
        await this.appControllerGetStatusRaw(initOverrides);
    }
}
exports.DefaultApi = DefaultApi;
//# sourceMappingURL=DefaultApi.js.map