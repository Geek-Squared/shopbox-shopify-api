"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var WhatsappController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const whatsapp_service_1 = require("./whatsapp.service");
const bot_engine_service_1 = require("./bot-engine.service");
let WhatsappController = WhatsappController_1 = class WhatsappController {
    constructor(whatsappService, botEngine) {
        this.whatsappService = whatsappService;
        this.botEngine = botEngine;
        this.logger = new common_1.Logger(WhatsappController_1.name);
    }
    verifyWebhook(mode, token, challenge, res) {
        if (mode === 'subscribe' && token === this.whatsappService.getVerifyToken()) {
            this.logger.log('WhatsApp webhook verified ✅');
            return res.status(200).send(challenge);
        }
        this.logger.warn('WhatsApp webhook verification failed');
        return res.status(403).send('Forbidden');
    }
    async receiveMessage(req, signature, body) {
        try {
            const rawBody = req.rawBody?.toString() ?? JSON.stringify(body);
            const isValid = this.whatsappService.verifyWebhookSignature(rawBody, signature ?? '');
            if (!isValid) {
                this.logger.warn('Invalid webhook signature — ignoring');
                return { status: 'ok' };
            }
            if (this.whatsappService.isStatusUpdate(body)) {
                return { status: 'ok' };
            }
            const message = this.whatsappService.parseIncomingMessage(body);
            if (!message) {
                return { status: 'ok' };
            }
            const { from, type, text, interactiveId } = message;
            this.whatsappService
                .logMessage({
                direction: 'INBOUND',
                fromNumber: from,
                content: text ?? interactiveId ?? '',
                status: 'received',
            })
                .catch(() => { });
            this.botEngine.handle(from, type, text, interactiveId).catch((err) => {
                this.logger.error(`Bot engine error for ${from}: ${err.message}`);
            });
        }
        catch (err) {
            this.logger.error(`Webhook processing error: ${err}`);
        }
        return { status: 'ok' };
    }
    async sendMessage(body) {
        await this.whatsappService.sendText(body.to, body.text);
        return { sent: true };
    }
};
exports.WhatsappController = WhatsappController;
__decorate([
    (0, common_1.Get)('webhook'),
    __param(0, (0, common_1.Query)('hub.mode')),
    __param(1, (0, common_1.Query)('hub.verify_token')),
    __param(2, (0, common_1.Query)('hub.challenge')),
    __param(3, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Object]),
    __metadata("design:returntype", void 0)
], WhatsappController.prototype, "verifyWebhook", null);
__decorate([
    (0, common_1.Post)('webhook'),
    (0, common_1.HttpCode)(200),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Headers)('x-hub-signature-256')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], WhatsappController.prototype, "receiveMessage", null);
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WhatsappController.prototype, "sendMessage", null);
exports.WhatsappController = WhatsappController = WhatsappController_1 = __decorate([
    (0, swagger_1.ApiExcludeController)(),
    (0, common_1.Controller)('whatsapp'),
    __metadata("design:paramtypes", [whatsapp_service_1.WhatsappService,
        bot_engine_service_1.BotEngineService])
], WhatsappController);
//# sourceMappingURL=whatsapp.controller.js.map