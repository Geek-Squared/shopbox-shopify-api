"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfLoginDto = instanceOfLoginDto;
exports.LoginDtoFromJSON = LoginDtoFromJSON;
exports.LoginDtoFromJSONTyped = LoginDtoFromJSONTyped;
exports.LoginDtoToJSON = LoginDtoToJSON;
exports.LoginDtoToJSONTyped = LoginDtoToJSONTyped;
function instanceOfLoginDto(value) {
    if (!('phone' in value) || value['phone'] === undefined)
        return false;
    if (!('password' in value) || value['password'] === undefined)
        return false;
    return true;
}
function LoginDtoFromJSON(json) {
    return LoginDtoFromJSONTyped(json, false);
}
function LoginDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'phone': json['phone'],
        'password': json['password'],
    };
}
function LoginDtoToJSON(json) {
    return LoginDtoToJSONTyped(json, false);
}
function LoginDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'phone': value['phone'],
        'password': value['password'],
    };
}
//# sourceMappingURL=LoginDto.js.map