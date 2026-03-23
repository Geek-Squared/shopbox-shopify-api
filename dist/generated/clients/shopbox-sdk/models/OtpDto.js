"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfOtpDto = instanceOfOtpDto;
exports.OtpDtoFromJSON = OtpDtoFromJSON;
exports.OtpDtoFromJSONTyped = OtpDtoFromJSONTyped;
exports.OtpDtoToJSON = OtpDtoToJSON;
exports.OtpDtoToJSONTyped = OtpDtoToJSONTyped;
function instanceOfOtpDto(value) {
    if (!('phone' in value) || value['phone'] === undefined)
        return false;
    return true;
}
function OtpDtoFromJSON(json) {
    return OtpDtoFromJSONTyped(json, false);
}
function OtpDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'phone': json['phone'],
        'code': json['code'] == null ? undefined : json['code'],
    };
}
function OtpDtoToJSON(json) {
    return OtpDtoToJSONTyped(json, false);
}
function OtpDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'phone': value['phone'],
        'code': value['code'],
    };
}
//# sourceMappingURL=OtpDto.js.map