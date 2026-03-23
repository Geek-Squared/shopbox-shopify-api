"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class PluginsApi extends runtime.BaseAPI {
    async pluginsControllerDeliveryRequestOpts(requestParameters) {
        if (requestParameters['deliveryDto'] == null) {
            throw new runtime.RequiredError('deliveryDto', 'Required parameter "deliveryDto" was null or undefined when calling pluginsControllerDelivery().');
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
        let urlPath = `/api/plugins/delivery`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.DeliveryDtoToJSON)(requestParameters['deliveryDto']),
        };
    }
    async pluginsControllerDeliveryRaw(requestParameters, initOverrides) {
        const requestOptions = await this.pluginsControllerDeliveryRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async pluginsControllerDelivery(requestParameters, initOverrides) {
        await this.pluginsControllerDeliveryRaw(requestParameters, initOverrides);
    }
    async pluginsControllerListRequestOpts() {
        const queryParameters = {};
        const headerParameters = {};
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        let urlPath = `/api/plugins`;
        return {
            path: urlPath,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        };
    }
    async pluginsControllerListRaw(initOverrides) {
        const requestOptions = await this.pluginsControllerListRequestOpts();
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async pluginsControllerList(initOverrides) {
        await this.pluginsControllerListRaw(initOverrides);
    }
    async pluginsControllerRidersRequestOpts(requestParameters) {
        if (requestParameters['ridersDto'] == null) {
            throw new runtime.RequiredError('ridersDto', 'Required parameter "ridersDto" was null or undefined when calling pluginsControllerRiders().');
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
        let urlPath = `/api/plugins/delivery/riders`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.RidersDtoToJSON)(requestParameters['ridersDto']),
        };
    }
    async pluginsControllerRidersRaw(requestParameters, initOverrides) {
        const requestOptions = await this.pluginsControllerRidersRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async pluginsControllerRiders(requestParameters, initOverrides) {
        await this.pluginsControllerRidersRaw(requestParameters, initOverrides);
    }
}
exports.PluginsApi = PluginsApi;
//# sourceMappingURL=PluginsApi.js.map