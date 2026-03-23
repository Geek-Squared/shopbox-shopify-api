"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const swagger_2 = require("./swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { rawBody: true });
    app.enableCors({
        origin: process.env.CORS_ORIGIN
            ? process.env.CORS_ORIGIN.split(',')
            : ['http://localhost:4200', 'http://localhost:4201', 'http://localhost:3000',
                'http://localhost:3001',
                'https://shopboxx.africa',
                'https://app.shopboxx.africa',
                'https://start.shopboxx.africa',
                'https://admin.shopboxx.africa',],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        credentials: true,
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: { enableImplicitConversion: true },
    }));
    if (process.env.ENABLE_SWAGGER !== 'false') {
        const document = swagger_1.SwaggerModule.createDocument(app, (0, swagger_2.buildOpenApiConfig)(), { ignoreGlobalPrefix: false });
        swagger_1.SwaggerModule.setup('docs', app, document);
        common_1.Logger.log('Swagger docs available at /docs', 'Bootstrap');
    }
    await app.listen(process.env.PORT ?? 3000);
    common_1.Logger.log(`Shopbox API listening on port ${process.env.PORT ?? 3000}`, 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map