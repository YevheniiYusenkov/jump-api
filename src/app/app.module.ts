import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@jump/config';
import { AbillsModule } from '@jump/abills';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InternetModule } from '../internet/internet.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    ConfigModule,
    InternetModule,
    UsersModule,
    AbillsModule.registerAsync({
      imports: [ ConfigModule ],
      useFactory: (config: ConfigService) => ({
        key: config.key,
        url: config.url,
      }),
      inject: [ ConfigService ],
    }),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
