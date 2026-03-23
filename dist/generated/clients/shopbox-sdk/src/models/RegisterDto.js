"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfRegisterDto = instanceOfRegisterDto;
exports.RegisterDtoFromJSON = RegisterDtoFromJSON;
exports.RegisterDtoFromJSONTyped = RegisterDtoFromJSONTyped;
exports.RegisterDtoToJSON = RegisterDtoToJSON;
exports.RegisterDtoToJSONTyped = RegisterDtoToJSONTyped;
function instanceOfRegisterDto(value) {
    if (!('password' in value) || value['password'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('storeSlug' in value) || value['storeSlug'] === undefined)
        return false;
    if (!('phone' in value) || value['phone'] === undefined)
        return false;
    return true;
}
function RegisterDtoFromJSON(json) {
    return RegisterDtoFromJSONTyped(json, false);
}
function RegisterDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'] == null ? undefined : json['email'],
        'password': json['password'],
        'name': json['name'],
        'storeSlug': json['storeSlug'],
        'phone': json['phone'],
    };
}
function RegisterDtoToJSON(json) {
    return RegisterDtoToJSONTyped(json, false);
}
function RegisterDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'password': value['password'],
        'name': value['name'],
        'storeSlug': value['storeSlug'],
        'phone': value['phone'],
    };
}
//# sourceMappingURL=RegisterDto.js.map