"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfUpdateProductDto = instanceOfUpdateProductDto;
exports.UpdateProductDtoFromJSON = UpdateProductDtoFromJSON;
exports.UpdateProductDtoFromJSONTyped = UpdateProductDtoFromJSONTyped;
exports.UpdateProductDtoToJSON = UpdateProductDtoToJSON;
exports.UpdateProductDtoToJSONTyped = UpdateProductDtoToJSONTyped;
function instanceOfUpdateProductDto(value) {
    return true;
}
function UpdateProductDtoFromJSON(json) {
    return UpdateProductDtoFromJSONTyped(json, false);
}
function UpdateProductDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'price': json['price'] == null ? undefined : json['price'],
        'currency': json['currency'] == null ? undefined : json['currency'],
        'active': json['active'] == null ? undefined : json['active'],
    };
}
function UpdateProductDtoToJSON(json) {
    return UpdateProductDtoToJSONTyped(json, false);
}
function UpdateProductDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'price': value['price'],
        'currency': value['currency'],
        'active': value['active'],
    };
}
//# sourceMappingURL=UpdateProductDto.js.map