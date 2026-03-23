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
exports.PostMappingController = void 0;
const common_1 = require("@nestjs/common");
const post_mapping_service_1 = require("./post-mapping.service");
const shopify_auth_guard_1 = require("../shopify/guards/shopify-auth.guard");
let PostMappingController = class PostMappingController {
    constructor(postMappingService) {
        this.postMappingService = postMappingService;
    }
    async create(req, body) {
        const merchantId = req.merchant.id;
        return this.postMappingService.createMapping(merchantId, body);
    }
    async list(req) {
        const merchantId = req.merchant.id;
        return this.postMappingService.listMappings(merchantId);
    }
    async update(req, id, body) {
        const merchantId = req.merchant.id;
        return this.postMappingService.updateMapping(merchantId, id, body);
    }
    async remove(req, id) {
        const merchantId = req.merchant.id;
        return this.postMappingService.deleteMapping(merchantId, id);
    }
};
exports.PostMappingController = PostMappingController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PostMappingController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PostMappingController.prototype, "list", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], PostMappingController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PostMappingController.prototype, "remove", null);
exports.PostMappingController = PostMappingController = __decorate([
    (0, common_1.Controller)('meta/post-mappings'),
    (0, common_1.UseGuards)(shopify_auth_guard_1.ShopifyAuthGuard),
    __metadata("design:paramtypes", [post_mapping_service_1.PostMappingService])
], PostMappingController);
//# sourceMappingURL=post-mapping.controller.js.map