"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfPaymentWebhookDto = instanceOfPaymentWebhookDto;
exports.PaymentWebhookDtoFromJSON = PaymentWebhookDtoFromJSON;
exports.PaymentWebhookDtoFromJSONTyped = PaymentWebhookDtoFromJSONTyped;
exports.PaymentWebhookDtoToJSON = PaymentWebhookDtoToJSON;
exports.PaymentWebhookDtoToJSONTyped = PaymentWebhookDtoToJSONTyped;
function instanceOfPaymentWebhookDto(value) {
    return true;
}
function PaymentWebhookDtoFromJSON(json) {
    return PaymentWebhookDtoFromJSONTyped(json, false);
}
function PaymentWebhookDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'paymentId': json['paymentId'] == null ? undefined : json['paymentId'],
        'gatewayReference': json['gatewayReference'] == null ? undefined : json['gatewayReference'],
        'payload': json['payload'] == null ? undefined : json['payload'],
    };
}
function PaymentWebhookDtoToJSON(json) {
    return PaymentWebhookDtoToJSONTyped(json, false);
}
function PaymentWebhookDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'paymentId': value['paymentId'],
        'gatewayReference': value['gatewayReference'],
        'payload': value['payload'],
    };
}
//# sourceMappingURL=PaymentWebhookDto.js.map