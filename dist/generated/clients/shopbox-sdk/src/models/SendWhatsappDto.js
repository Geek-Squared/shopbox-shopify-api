"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfSendWhatsappDto = instanceOfSendWhatsappDto;
exports.SendWhatsappDtoFromJSON = SendWhatsappDtoFromJSON;
exports.SendWhatsappDtoFromJSONTyped = SendWhatsappDtoFromJSONTyped;
exports.SendWhatsappDtoToJSON = SendWhatsappDtoToJSON;
exports.SendWhatsappDtoToJSONTyped = SendWhatsappDtoToJSONTyped;
function instanceOfSendWhatsappDto(value) {
    if (!('to' in value) || value['to'] === undefined)
        return false;
    return true;
}
function SendWhatsappDtoFromJSON(json) {
    return SendWhatsappDtoFromJSONTyped(json, false);
}
function SendWhatsappDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'to': json['to'],
        'text': json['text'] == null ? undefined : json['text'],
        'template': json['template'] == null ? undefined : json['template'],
        'sellerId': json['sellerId'] == null ? undefined : json['sellerId'],
        'orderId': json['orderId'] == null ? undefined : json['orderId'],
    };
}
function SendWhatsappDtoToJSON(json) {
    return SendWhatsappDtoToJSONTyped(json, false);
}
function SendWhatsappDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'to': value['to'],
        'text': value['text'],
        'template': value['template'],
        'sellerId': value['sellerId'],
        'orderId': value['orderId'],
    };
}
//# sourceMappingURL=SendWhatsappDto.js.map