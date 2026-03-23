"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfVerifyPaymentDto = instanceOfVerifyPaymentDto;
exports.VerifyPaymentDtoFromJSON = VerifyPaymentDtoFromJSON;
exports.VerifyPaymentDtoFromJSONTyped = VerifyPaymentDtoFromJSONTyped;
exports.VerifyPaymentDtoToJSON = VerifyPaymentDtoToJSON;
exports.VerifyPaymentDtoToJSONTyped = VerifyPaymentDtoToJSONTyped;
function instanceOfVerifyPaymentDto(value) {
    if (!('paymentId' in value) || value['paymentId'] === undefined)
        return false;
    if (!('gatewayReference' in value) || value['gatewayReference'] === undefined)
        return false;
    return true;
}
function VerifyPaymentDtoFromJSON(json) {
    return VerifyPaymentDtoFromJSONTyped(json, false);
}
function VerifyPaymentDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'paymentId': json['paymentId'],
        'gatewayReference': json['gatewayReference'],
    };
}
function VerifyPaymentDtoToJSON(json) {
    return VerifyPaymentDtoToJSONTyped(json, false);
}
function VerifyPaymentDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'paymentId': value['paymentId'],
        'gatewayReference': value['gatewayReference'],
    };
}
//# sourceMappingURL=VerifyPaymentDto.js.map