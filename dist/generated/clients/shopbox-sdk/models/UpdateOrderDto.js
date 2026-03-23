"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDtoStatusEnum = void 0;
exports.instanceOfUpdateOrderDto = instanceOfUpdateOrderDto;
exports.UpdateOrderDtoFromJSON = UpdateOrderDtoFromJSON;
exports.UpdateOrderDtoFromJSONTyped = UpdateOrderDtoFromJSONTyped;
exports.UpdateOrderDtoToJSON = UpdateOrderDtoToJSON;
exports.UpdateOrderDtoToJSONTyped = UpdateOrderDtoToJSONTyped;
exports.UpdateOrderDtoStatusEnum = {
    PENDING: 'PENDING',
    PAID: 'PAID',
    CONFIRMED: 'CONFIRMED',
    FULFILLED: 'FULFILLED',
    CANCELLED: 'CANCELLED'
};
function instanceOfUpdateOrderDto(value) {
    return true;
}
function UpdateOrderDtoFromJSON(json) {
    return UpdateOrderDtoFromJSONTyped(json, false);
}
function UpdateOrderDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'] == null ? undefined : json['status'],
        'customerName': json['customerName'] == null ? undefined : json['customerName'],
        'customerPhone': json['customerPhone'] == null ? undefined : json['customerPhone'],
    };
}
function UpdateOrderDtoToJSON(json) {
    return UpdateOrderDtoToJSONTyped(json, false);
}
function UpdateOrderDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
        'customerName': value['customerName'],
        'customerPhone': value['customerPhone'],
    };
}
//# sourceMappingURL=UpdateOrderDto.js.map