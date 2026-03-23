import * as runtime from '../runtime';
import type { InitiatePaymentDto, PaymentWebhookDto, VerifyPaymentDto } from '../models/index';
export interface PaymentsControllerInitiateRequest {
    initiatePaymentDto: InitiatePaymentDto;
}
export interface PaymentsControllerVerifyRequest {
    verifyPaymentDto: VerifyPaymentDto;
}
export interface PaymentsControllerWebhookRequest {
    paymentWebhookDto: PaymentWebhookDto;
}
export declare class PaymentsApi extends runtime.BaseAPI {
    paymentsControllerInitiateRequestOpts(requestParameters: PaymentsControllerInitiateRequest): Promise<runtime.RequestOpts>;
    paymentsControllerInitiateRaw(requestParameters: PaymentsControllerInitiateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    paymentsControllerInitiate(requestParameters: PaymentsControllerInitiateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    paymentsControllerVerifyRequestOpts(requestParameters: PaymentsControllerVerifyRequest): Promise<runtime.RequestOpts>;
    paymentsControllerVerifyRaw(requestParameters: PaymentsControllerVerifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    paymentsControllerVerify(requestParameters: PaymentsControllerVerifyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    paymentsControllerWebhookRequestOpts(requestParameters: PaymentsControllerWebhookRequest): Promise<runtime.RequestOpts>;
    paymentsControllerWebhookRaw(requestParameters: PaymentsControllerWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    paymentsControllerWebhook(requestParameters: PaymentsControllerWebhookRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
