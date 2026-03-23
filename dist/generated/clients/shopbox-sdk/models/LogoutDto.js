"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfLogoutDto = instanceOfLogoutDto;
exports.LogoutDtoFromJSON = LogoutDtoFromJSON;
exports.LogoutDtoFromJSONTyped = LogoutDtoFromJSONTyped;
exports.LogoutDtoToJSON = LogoutDtoToJSON;
exports.LogoutDtoToJSONTyped = LogoutDtoToJSONTyped;
function instanceOfLogoutDto(value) {
    return true;
}
function LogoutDtoFromJSON(json) {
    return LogoutDtoFromJSONTyped(json, false);
}
function LogoutDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'refreshToken': json['refreshToken'] == null ? undefined : json['refreshToken'],
    };
}
function LogoutDtoToJSON(json) {
    return LogoutDtoToJSONTyped(json, false);
}
function LogoutDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'refreshToken': value['refreshToken'],
    };
}
//# sourceMappingURL=LogoutDto.js.map