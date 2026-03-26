import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { buildOpenApiConfig } from './swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { rawBody: true });
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:4200',
        'http://localhost:4201',
        'http://localhost:3000',
        'http://localhost:3001',
        'https://shopboxx.africa',
        'https://app.shopboxx.africa',
        'https://start.shopboxx.africa',
        'https://admin.shopboxx.africa',
        'https://shopbox-fe.vercel.app',
        'https://admin.shopify.com',
        ...(process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : []),
      ];

      const allowedPatterns = [/\.myshopify\.com$/];

      // Allow requests with no origin (webhooks, server-to-server, Postman)
      if (!origin) return callback(null, true);

      const isAllowed =
        allowedOrigins.includes(origin) ||
        allowedPatterns.some((pattern) => pattern.test(origin));

      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error(`CORS blocked: ${origin}`));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // 👈 add this
    credentials: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  if (process.env.ENABLE_SWAGGER !== 'false') {
    const document = SwaggerModule.createDocument(app, buildOpenApiConfig(), {
      ignoreGlobalPrefix: false,
    });
    SwaggerModule.setup('docs', app, document);
    Logger.log('Swagger docs available at /docs', 'Bootstrap');
  }

  await app.listen(process.env.PORT ?? 3000);
  Logger.log(
    `Shopbox API listening on port ${process.env.PORT ?? 3000}`,
    'Bootstrap',
  );
}
bootstrap();
