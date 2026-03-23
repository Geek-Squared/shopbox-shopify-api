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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTriggerController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const comment_trigger_service_1 = require("./comment-trigger.service");
const shopify_auth_guard_1 = require("../shopify/guards/shopify-auth.guard");
const create_trigger_dto_1 = require("./dto/create-trigger.dto");
let CommentTriggerController = class CommentTriggerController {
    constructor(triggerService) {
        this.triggerService = triggerService;
    }
    async list(req) {
        const merchantId = req.merchant.id;
        return this.triggerService.listTriggers(merchantId);
    }
    async create(dto, req) {
        const merchantId = req.merchant.id;
        return this.triggerService.createTrigger(merchantId, dto);
    }
    async update(id, dto, req) {
        const merchantId = req.merchant.id;
        return this.triggerService.updateTrigger(merchantId, id, dto);
    }
    async delete(id, req) {
        const merchantId = req.merchant.id;
        return this.triggerService.deleteTrigger(merchantId, id);
    }
    async stats(req) {
        const merchantId = req.merchant.id;
        return this.triggerService.getTriggerStats(merchantId);
    }
};
exports.CommentTriggerController = CommentTriggerController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'List all triggers' }),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentTriggerController.prototype, "list", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new trigger' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_trigger_dto_1.CreateTriggerDto, Object]),
    __metadata("design:returntype", Promise)
], CommentTriggerController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update a trigger' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], CommentTriggerController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a trigger' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], CommentTriggerController.prototype, "delete", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Get trigger statistics' }),
    (0, common_1.Get)('stats'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CommentTriggerController.prototype, "stats", null);
exports.CommentTriggerController = CommentTriggerController = __decorate([
    (0, swagger_1.ApiTags)('Instagram Triggers'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    (0, common_1.Controller)('meta/triggers'),
    __metadata("design:paramtypes", [comment_trigger_service_1.CommentTriggerService])
], CommentTriggerController);
//# sourceMappingURL=comment-trigger.controller.js.map