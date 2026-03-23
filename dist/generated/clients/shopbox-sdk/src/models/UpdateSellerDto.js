"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfUpdateSellerDto = instanceOfUpdateSellerDto;
exports.UpdateSellerDtoFromJSON = UpdateSellerDtoFromJSON;
exports.UpdateSellerDtoFromJSONTyped = UpdateSellerDtoFromJSONTyped;
exports.UpdateSellerDtoToJSON = UpdateSellerDtoToJSON;
exports.UpdateSellerDtoToJSONTyped = UpdateSellerDtoToJSONTyped;
function instanceOfUpdateSellerDto(value) {
    return true;
}
function UpdateSellerDtoFromJSON(json) {
    return UpdateSellerDtoFromJSONTyped(json, false);
}
function UpdateSellerDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'phone': json['phone'] == null ? undefined : json['phone'],
    };
}
function UpdateSellerDtoToJSON(json) {
    return UpdateSellerDtoToJSONTyped(json, false);
}
function UpdateSellerDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'phone': value['phone'],
    };
}
//# sourceMappingURL=UpdateSellerDto.js.map