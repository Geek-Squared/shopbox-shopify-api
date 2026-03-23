"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfUpdateStoreDto = instanceOfUpdateStoreDto;
exports.UpdateStoreDtoFromJSON = UpdateStoreDtoFromJSON;
exports.UpdateStoreDtoFromJSONTyped = UpdateStoreDtoFromJSONTyped;
exports.UpdateStoreDtoToJSON = UpdateStoreDtoToJSON;
exports.UpdateStoreDtoToJSONTyped = UpdateStoreDtoToJSONTyped;
function instanceOfUpdateStoreDto(value) {
    return true;
}
function UpdateStoreDtoFromJSON(json) {
    return UpdateStoreDtoFromJSONTyped(json, false);
}
function UpdateStoreDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'] == null ? undefined : json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'logoUrl': json['logoUrl'] == null ? undefined : json['logoUrl'],
        'city': json['city'] == null ? undefined : json['city'],
        'category': json['category'] == null ? undefined : json['category'],
    };
}
function UpdateStoreDtoToJSON(json) {
    return UpdateStoreDtoToJSONTyped(json, false);
}
function UpdateStoreDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'description': value['description'],
        'logoUrl': value['logoUrl'],
        'city': value['city'],
        'category': value['category'],
    };
}
//# sourceMappingURL=UpdateStoreDto.js.map