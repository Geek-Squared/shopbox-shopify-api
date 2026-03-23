"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsApi = void 0;
const runtime = require("../runtime");
const index_1 = require("../models/index");
class PaymentsApi extends runtime.BaseAPI {
    async paymentsControllerInitiateRequestOpts(requestParameters) {
        if (requestParameters['initiatePaymentDto'] == null) {
            throw new runtime.RequiredError('initiatePaymentDto', 'Required parameter "initiatePaymentDto" was null or undefined when calling paymentsControllerInitiate().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/payments/initiate`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.InitiatePaymentDtoToJSON)(requestParameters['initiatePaymentDto']),
        };
    }
    async paymentsControllerInitiateRaw(requestParameters, initOverrides) {
        const requestOptions = await this.paymentsControllerInitiateRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async paymentsControllerInitiate(requestParameters, initOverrides) {
        await this.paymentsControllerInitiateRaw(requestParameters, initOverrides);
    }
    async paymentsControllerVerifyRequestOpts(requestParameters) {
        if (requestParameters['verifyPaymentDto'] == null) {
            throw new runtime.RequiredError('verifyPaymentDto', 'Required parameter "verifyPaymentDto" was null or undefined when calling paymentsControllerVerify().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/payments/verify`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.VerifyPaymentDtoToJSON)(requestParameters['verifyPaymentDto']),
        };
    }
    async paymentsControllerVerifyRaw(requestParameters, initOverrides) {
        const requestOptions = await this.paymentsControllerVerifyRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async paymentsControllerVerify(requestParameters, initOverrides) {
        await this.paymentsControllerVerifyRaw(requestParameters, initOverrides);
    }
    async paymentsControllerWebhookRequestOpts(requestParameters) {
        if (requestParameters['paymentWebhookDto'] == null) {
            throw new runtime.RequiredError('paymentWebhookDto', 'Required parameter "paymentWebhookDto" was null or undefined when calling paymentsControllerWebhook().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        let urlPath = `/api/payments/webhook`;
        return {
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.PaymentWebhookDtoToJSON)(requestParameters['paymentWebhookDto']),
        };
    }
    async paymentsControllerWebhookRaw(requestParameters, initOverrides) {
        const requestOptions = await this.paymentsControllerWebhookRequestOpts(requestParameters);
        const response = await this.request(requestOptions, initOverrides);
        return new runtime.VoidApiResponse(response);
    }
    async paymentsControllerWebhook(requestParameters, initOverrides) {
        await this.paymentsControllerWebhookRaw(requestParameters, initOverrides);
    }
}
exports.PaymentsApi = PaymentsApi;
//# sourceMappingURL=PaymentsApi.js.map