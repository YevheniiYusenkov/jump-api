import { Module } from '@nestjs/common';

import { ConfigModule, ConfigService } from '@jump/config';
import { AbillsModule } from '@jump/abills';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InternetModule } from '../internet/internet.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    ConfigModule,
    InternetModule,
    UsersModule,
    AuthModule,
    AbillsModule.registerAsync({
      imports: [ ConfigModule ],
      useFactory: (config: ConfigService) => ({
        key: config.key,
        url: config.url,
        createBill: config.createBill,
      }),
      inject: [ ConfigService ],
    }),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
