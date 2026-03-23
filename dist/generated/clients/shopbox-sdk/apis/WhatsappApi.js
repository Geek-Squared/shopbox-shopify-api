"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class WhatsappApi extends runtime.BaseAPI {
    async whatsappControllerSendRequestOpts(requestParameters) {
        if (requestParameters['sendWhatsappDto'] == null) {
            throw new runtime.RequiredError('sendWhatsappDto', 'Required parameter "sendWhatsappDto" was null or undefined when calling whatsappControllerSend().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/whatsapp/send`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.SendWhatsappDtoToJSON)(requestParameters['sendWhatsappDto']),
        };
    }
    async whatsappControllerSendRaw(requestParameters, initOverrides) {
        const requestOptions = await this.whatsappControllerSendRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async whatsappControllerSend(requestParameters, initOverrides) {
        await this.whatsappControllerSendRaw(requestParameters, initOverrides);
    }
    async whatsappControllerWebhookRequestOpts(requestParameters) {
        if (requestParameters['whatsappWebhookDto'] == null) {
            throw new runtime.RequiredError('whatsappWebhookDto', 'Required parameter "whatsappWebhookDto" was null or undefined when calling whatsappControllerWebhook().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/whatsapp/webhook`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.WhatsappWebhookDtoToJSON)(requestParameters['whatsappWebhookDto']),
        };
    }
    async whatsappControllerWebhookRaw(requestParameters, initOverrides) {
        const requestOptions = await this.whatsappControllerWebhookRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async whatsappControllerWebhook(requestParameters, initOverrides) {
        await this.whatsappControllerWebhookRaw(requestParameters, initOverrides);
    }
}
exports.WhatsappApi = WhatsappApi;
//# sourceMappingURL=WhatsappApi.js.map