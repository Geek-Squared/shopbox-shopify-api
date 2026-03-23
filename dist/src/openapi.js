"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const swagger_2 = require("./swagger");
const OUTPUT_PATH = (0, path_1.join)(process.cwd(), 'generated', 'openapi.json');
async function generateOpenApi() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { logger: false });
    app.setGlobalPrefix('api');
    const document = swagger_1.SwaggerModule.createDocument(app, (0, swagger_2.buildOpenApiConfig)(), {
        ignoreGlobalPrefix: false,
    });
    (0, fs_1.mkdirSync)((0, path_1.join)(process.cwd(), 'generated'), { recursive: true });
    (0, fs_1.writeFileSync)(OUTPUT_PATH, JSON.stringify(document, null, 2));
    await app.close();
    console.log(`OpenAPI spec written to ${OUTPUT_PATH}`);
}
generateOpenApi();
//# sourceMappingURL=openapi.js.map