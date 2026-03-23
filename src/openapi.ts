import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { buildOpenApiConfig } from './swagger';

const OUTPUT_PATH = join(process.cwd(), 'generated', 'openapi.json');

async function generateOpenApi() {
  const app = await NestFactory.create(AppModule, { logger: false });
  app.setGlobalPrefix('api');

  const document = SwaggerModule.createDocument(app, buildOpenApiConfig(), {
    ignoreGlobalPrefix: false,
  });

  mkdirSync(join(process.cwd(), 'generated'), { recursive: true });
  writeFileSync(OUTPUT_PATH, JSON.stringify(document, null, 2));

  await app.close();
  // eslint-disable-next-line no-console
  console.log(`OpenAPI spec written to ${OUTPUT_PATH}`);
}

generateOpenApi();
