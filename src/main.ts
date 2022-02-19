import { ClassSerializerInterceptor, Logger } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';

import { ConfigService } from '@jump/config';

import { AppModule } from './app/app.module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);

  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(config.port);

  Logger.log(
    `Jump API Application is running on: ${config.protocol}://${config.host}:${config.port}/${config.prefix}`,
  );
}
bootstrap().then(placeholder => placeholder);
