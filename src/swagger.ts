import { DocumentBuilder } from '@nestjs/swagger';

export const buildOpenApiConfig = () =>
  new DocumentBuilder()
    .setTitle('Shopbox API')
    .setDescription('Shopbox API')
    .setVersion(process.env.npm_package_version ?? '0.0.1')
    .addBearerAuth()
    .build();
