import { Module } from '@nestjs/common';

import { AbillsModule } from '@jump/abills';
import { GatewayConfigModule } from '@jump/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InternetModule } from '../internet/internet.module';

@Module({
  imports: [
    GatewayConfigModule,
    InternetModule,
    AbillsModule,
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
