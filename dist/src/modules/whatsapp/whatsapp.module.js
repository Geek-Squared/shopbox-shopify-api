"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WhatsappModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const store_module_1 = require("../store/store.module");
const whatsapp_controller_1 = require("./whatsapp.controller");
const whatsapp_repository_1 = require("./whatsapp.repository");
const whatsapp_service_1 = require("./whatsapp.service");
const bot_engine_service_1 = require("./bot-engine.service");
const bot_session_service_1 = require("./bot-session.service");
let WhatsappModule = class WhatsappModule {
};
exports.WhatsappModule = WhatsappModule;
exports.WhatsappModule = WhatsappModule = __decorate([
    (0, common_1.Module)({
        imports: [config_1.ConfigModule, store_module_1.StoreModule],
        controllers: [whatsapp_controller_1.WhatsappController],
        providers: [
            whatsapp_service_1.WhatsappService,
            whatsapp_repository_1.WhatsappRepository,
            bot_engine_service_1.BotEngineService,
            bot_session_service_1.BotSessionService,
        ],
        exports: [whatsapp_service_1.WhatsappService, whatsapp_repository_1.WhatsappRepository, bot_session_service_1.BotSessionService],
    })
], WhatsappModule);
//# sourceMappingURL=whatsapp.module.js.map