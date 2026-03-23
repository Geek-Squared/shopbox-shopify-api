"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitiatePaymentDtoProviderEnum = void 0;
exports.instanceOfInitiatePaymentDto = instanceOfInitiatePaymentDto;
exports.InitiatePaymentDtoFromJSON = InitiatePaymentDtoFromJSON;
exports.InitiatePaymentDtoFromJSONTyped = InitiatePaymentDtoFromJSONTyped;
exports.InitiatePaymentDtoToJSON = InitiatePaymentDtoToJSON;
exports.InitiatePaymentDtoToJSONTyped = InitiatePaymentDtoToJSONTyped;
exports.InitiatePaymentDtoProviderEnum = {
    PAYNOW: 'PAYNOW',
    INNBUCKS: 'INNBUCKS'
};
function instanceOfInitiatePaymentDto(value) {
    if (!('orderId' in value) || value['orderId'] === undefined)
        return false;
    if (!('provider' in value) || value['provider'] === undefined)
        return false;
    return true;
}
function InitiatePaymentDtoFromJSON(json) {
    return InitiatePaymentDtoFromJSONTyped(json, false);
}
function InitiatePaymentDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'orderId': json['orderId'],
        'provider': json['provider'],
    };
}
function InitiatePaymentDtoToJSON(json) {
    return InitiatePaymentDtoToJSONTyped(json, false);
}
function InitiatePaymentDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'orderId': value['orderId'],
        'provider': value['provider'],
    };
}
//# sourceMappingURL=InitiatePaymentDto.js.map