import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get<ConfigService>(ConfigService);
  const port = configService.get<number>('PORT', 3000);
  const appUrl = configService.get<string>(
    'APP_URL',
    `http://localhost:${port}`,
  );

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Freight Risk Assessment Engine')
    .setDescription('Motor de Avaliação de Risco para Transporte de Carga')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig);
  app.use('/docs', apiReference({ spec: { content: document } }));

  await app.listen(port);

  console.log(`API rodando em:           ${appUrl}/api/v1`);
  console.log(`Docs no Scalar em:        ${appUrl}/docs`);
}

void bootstrap();
