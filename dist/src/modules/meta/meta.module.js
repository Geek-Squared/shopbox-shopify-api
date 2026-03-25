"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetaModule = void 0;
const common_1 = require("@nestjs/common");
const meta_oauth_controller_1 = require("./meta-oauth.controller");
const meta_oauth_service_1 = require("./meta-oauth.service");
const meta_sender_service_1 = require("./meta-sender.service");
const meta_webhook_controller_1 = require("./meta-webhook.controller");
const instagram_bot_service_1 = require("./instagram-bot.service");
const messenger_bot_service_1 = require("./messenger-bot.service");
const comment_trigger_service_1 = require("./comment-trigger.service");
const comment_trigger_controller_1 = require("./comment-trigger.controller");
const post_mapping_service_1 = require("./post-mapping.service");
const post_mapping_controller_1 = require("./post-mapping.controller");
const shopify_module_1 = require("../shopify/shopify.module");
const prisma_module_1 = require("../../prisma/prisma.module");
const whatsapp_module_1 = require("../whatsapp/whatsapp.module");
let MetaModule = class MetaModule {
};
exports.MetaModule = MetaModule;
exports.MetaModule = MetaModule = __decorate([
    (0, common_1.Module)({
        imports: [shopify_module_1.ShopifyModule, prisma_module_1.PrismaModule, whatsapp_module_1.WhatsappModule],
        controllers: [
            meta_oauth_controller_1.MetaOauthController,
            meta_webhook_controller_1.MetaWebhookController,
            comment_trigger_controller_1.CommentTriggerController,
            post_mapping_controller_1.PostMappingController,
        ],
        providers: [
            meta_oauth_service_1.MetaOauthService,
            meta_sender_service_1.MetaSenderService,
            instagram_bot_service_1.InstagramBotService,
            messenger_bot_service_1.MessengerBotService,
            comment_trigger_service_1.CommentTriggerService,
            post_mapping_service_1.PostMappingService,
        ],
        exports: [
            meta_oauth_service_1.MetaOauthService,
            meta_sender_service_1.MetaSenderService,
            comment_trigger_service_1.CommentTriggerService,
            post_mapping_service_1.PostMappingService,
        ],
    })
], MetaModule);
//# sourceMappingURL=meta.module.js.map