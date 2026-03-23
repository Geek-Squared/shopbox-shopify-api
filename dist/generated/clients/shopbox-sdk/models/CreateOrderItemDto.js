"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateOrderItemDto = instanceOfCreateOrderItemDto;
exports.CreateOrderItemDtoFromJSON = CreateOrderItemDtoFromJSON;
exports.CreateOrderItemDtoFromJSONTyped = CreateOrderItemDtoFromJSONTyped;
exports.CreateOrderItemDtoToJSON = CreateOrderItemDtoToJSON;
exports.CreateOrderItemDtoToJSONTyped = CreateOrderItemDtoToJSONTyped;
function instanceOfCreateOrderItemDto(value) {
    if (!('productId' in value) || value['productId'] === undefined)
        return false;
    if (!('quantity' in value) || value['quantity'] === undefined)
        return false;
    return true;
}
function CreateOrderItemDtoFromJSON(json) {
    return CreateOrderItemDtoFromJSONTyped(json, false);
}
function CreateOrderItemDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'productId': json['productId'],
        'quantity': json['quantity'],
    };
}
function CreateOrderItemDtoToJSON(json) {
    return CreateOrderItemDtoToJSONTyped(json, false);
}
function CreateOrderItemDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'productId': value['productId'],
        'quantity': value['quantity'],
    };
}
//# sourceMappingURL=CreateOrderItemDto.js.map