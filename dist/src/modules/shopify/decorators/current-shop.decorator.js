"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentShop = void 0;
const common_1 = require("@nestjs/common");
exports.CurrentShop = (0, common_1.createParamDecorator)((_data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.merchant?.shop;
});
//# sourceMappingURL=current-shop.decorator.js.map