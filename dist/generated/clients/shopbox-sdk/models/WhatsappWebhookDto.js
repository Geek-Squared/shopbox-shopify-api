"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfWhatsappWebhookDto = instanceOfWhatsappWebhookDto;
exports.WhatsappWebhookDtoFromJSON = WhatsappWebhookDtoFromJSON;
exports.WhatsappWebhookDtoFromJSONTyped = WhatsappWebhookDtoFromJSONTyped;
exports.WhatsappWebhookDtoToJSON = WhatsappWebhookDtoToJSON;
exports.WhatsappWebhookDtoToJSONTyped = WhatsappWebhookDtoToJSONTyped;
function instanceOfWhatsappWebhookDto(value) {
    return true;
}
function WhatsappWebhookDtoFromJSON(json) {
    return WhatsappWebhookDtoFromJSONTyped(json, false);
}
function WhatsappWebhookDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'from': json['from'] == null ? undefined : json['from'],
        'message': json['message'] == null ? undefined : json['message'],
        'payload': json['payload'] == null ? undefined : json['payload'],
    };
}
function WhatsappWebhookDtoToJSON(json) {
    return WhatsappWebhookDtoToJSONTyped(json, false);
}
function WhatsappWebhookDtoToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'from': value['from'],
        'message': value['message'],
        'payload': value['payload'],
    };
}
//# sourceMappingURL=WhatsappWebhookDto.js.map