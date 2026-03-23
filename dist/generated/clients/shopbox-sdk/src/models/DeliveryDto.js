"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfDeliveryDto = instanceOfDeliveryDto;
exports.DeliveryDtoFromJSON = DeliveryDtoFromJSON;
exports.DeliveryDtoFromJSONTyped = DeliveryDtoFromJSONTyped;
exports.DeliveryDtoToJSON = DeliveryDtoToJSON;
exports.DeliveryDtoToJSONTyped = DeliveryDtoToJSONTyped;
function instanceOfDeliveryDto(value) {
    if (!('orderId' in value) || value['orderId'] === undefined)
        return false;
    return true;
}
function DeliveryDtoFromJSON(json) {
    return DeliveryDtoFromJSONTyped(json, false);
}
function DeliveryDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'orderId': json['orderId'],
        'address': json['address'] == null ? undefined : json['address'],
    };
}
function DeliveryDtoToJSON(json) {
    return DeliveryDtoToJSONTyped(json, false);
}
function DeliveryDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'orderId': value['orderId'],
        'address': value['address'],
    };
}
//# sourceMappingURL=DeliveryDto.js.map