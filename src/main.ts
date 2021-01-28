import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as rateLimit from 'express-rate-limit';
import * as helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('Documentation for this API.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.use(helmet());

  app.enableCors({
    origin: process.env.HOST
  });

  app.use(
    rateLimit({
      windowMs: 1 * 60 * 1000,
      max: 10,
    }),
  );

  await app.listen(process.env.PORT);

  console.log(`\nApplication running on ${process.env.HOST}:${process.env.PORT}`);
}

bootstrap();
