"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateOrderDto = instanceOfCreateOrderDto;
exports.CreateOrderDtoFromJSON = CreateOrderDtoFromJSON;
exports.CreateOrderDtoFromJSONTyped = CreateOrderDtoFromJSONTyped;
exports.CreateOrderDtoToJSON = CreateOrderDtoToJSON;
exports.CreateOrderDtoToJSONTyped = CreateOrderDtoToJSONTyped;
const CreateOrderItemDto_1 = require("./CreateOrderItemDto");
function instanceOfCreateOrderDto(value) {
    if (!('storeSlug' in value) || value['storeSlug'] === undefined)
        return false;
    if (!('customerName' in value) || value['customerName'] === undefined)
        return false;
    if (!('customerPhone' in value) || value['customerPhone'] === undefined)
        return false;
    if (!('items' in value) || value['items'] === undefined)
        return false;
    return true;
}
function CreateOrderDtoFromJSON(json) {
    return CreateOrderDtoFromJSONTyped(json, false);
}
function CreateOrderDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'storeSlug': json['storeSlug'],
        'customerName': json['customerName'],
        'customerPhone': json['customerPhone'],
        'customerEmail': json['customerEmail'] == null ? undefined : json['customerEmail'],
        'items': (json['items'].map(CreateOrderItemDto_1.CreateOrderItemDtoFromJSON)),
    };
}
function CreateOrderDtoToJSON(json) {
    return CreateOrderDtoToJSONTyped(json, false);
}
function CreateOrderDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'storeSlug': value['storeSlug'],
        'customerName': value['customerName'],
        'customerPhone': value['customerPhone'],
        'customerEmail': value['customerEmail'],
        'items': (value['items'].map(CreateOrderItemDto_1.CreateOrderItemDtoToJSON)),
    };
}
//# sourceMappingURL=CreateOrderDto.js.map