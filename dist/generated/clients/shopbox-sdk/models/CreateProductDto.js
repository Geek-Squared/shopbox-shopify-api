"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateProductDto = instanceOfCreateProductDto;
exports.CreateProductDtoFromJSON = CreateProductDtoFromJSON;
exports.CreateProductDtoFromJSONTyped = CreateProductDtoFromJSONTyped;
exports.CreateProductDtoToJSON = CreateProductDtoToJSON;
exports.CreateProductDtoToJSONTyped = CreateProductDtoToJSONTyped;
function instanceOfCreateProductDto(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('price' in value) || value['price'] === undefined)
        return false;
    return true;
}
function CreateProductDtoFromJSON(json) {
    return CreateProductDtoFromJSONTyped(json, false);
}
function CreateProductDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'price': json['price'],
        'currency': json['currency'] == null ? undefined : json['currency'],
    };
}
function CreateProductDtoToJSON(json) {
    return CreateProductDtoToJSONTyped(json, false);
}
function CreateProductDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'price': value['price'],
        'currency': value['currency'],
    };
}
//# sourceMappingURL=CreateProductDto.js.map