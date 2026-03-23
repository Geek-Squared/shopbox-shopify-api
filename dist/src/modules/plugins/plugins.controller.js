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
exports.PluginsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const delivery_dto_1 = require("./dto/delivery.dto");
const riders_dto_1 = require("./dto/riders.dto");
const plugins_service_1 = require("./plugins.service");
let PluginsController = class PluginsController {
    constructor(pluginsService) {
        this.pluginsService = pluginsService;
    }
    list() {
        return this.pluginsService.list();
    }
    delivery(payload) {
        return this.pluginsService.delivery(payload);
    }
    riders(payload) {
        return this.pluginsService.riders(payload);
    }
};
exports.PluginsController = PluginsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PluginsController.prototype, "list", null);
__decorate([
    (0, common_1.Post)('delivery'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delivery_dto_1.DeliveryDto]),
    __metadata("design:returntype", void 0)
], PluginsController.prototype, "delivery", null);
__decorate([
    (0, common_1.Post)('delivery/riders'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [riders_dto_1.RidersDto]),
    __metadata("design:returntype", void 0)
], PluginsController.prototype, "riders", null);
exports.PluginsController = PluginsController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('plugins'),
    (0, common_1.Controller)('plugins'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [plugins_service_1.PluginsService])
], PluginsController);
//# sourceMappingURL=plugins.controller.js.map