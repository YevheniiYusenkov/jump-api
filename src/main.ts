import { NestFactory, Reflector } from "@nestjs/core";
import { ClassSerializerInterceptor, Logger } from "@nestjs/common";

import { GatewayConfigService } from '@jump/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const config = app.get<GatewayConfigService>(GatewayConfigService);
  
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));

  await app.listen(config.port);

  Logger.log(
    `🚀 Jump API Application is running on: ${config.protocol}://${config.host}:${config.port}/${config.prefix}`,
  );
}
bootstrap();
