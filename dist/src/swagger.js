"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildOpenApiConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
const buildOpenApiConfig = () => new swagger_1.DocumentBuilder()
    .setTitle('Shopbox API')
    .setDescription('Shopbox API')
    .setVersion(process.env.npm_package_version ?? '0.0.1')
    .addBearerAuth()
    .build();
exports.buildOpenApiConfig = buildOpenApiConfig;
//# sourceMappingURL=swagger.js.map