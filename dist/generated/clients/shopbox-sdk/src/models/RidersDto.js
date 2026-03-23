"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfRidersDto = instanceOfRidersDto;
exports.RidersDtoFromJSON = RidersDtoFromJSON;
exports.RidersDtoFromJSONTyped = RidersDtoFromJSONTyped;
exports.RidersDtoToJSON = RidersDtoToJSON;
exports.RidersDtoToJSONTyped = RidersDtoToJSONTyped;
function instanceOfRidersDto(value) {
    return true;
}
function RidersDtoFromJSON(json) {
    return RidersDtoFromJSONTyped(json, false);
}
function RidersDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'zone': json['zone'] == null ? undefined : json['zone'],
    };
}
function RidersDtoToJSON(json) {
    return RidersDtoToJSONTyped(json, false);
}
function RidersDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'zone': value['zone'],
    };
}
//# sourceMappingURL=RidersDto.js.map