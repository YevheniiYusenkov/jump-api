import { CacheModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AbillsModule } from '@jump/abills';
import { User } from '@jump/entities';

import {
  AbillsConfigModule,
  AbillsConfigService,
  GatewayConfigModule,
  JwtConfigModule,
  MysqlConfigModule,
  MysqlConfigService,
} from '@jump/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InternetModule } from '../internet/internet.module';
import { UsersModule } from '../users/users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AbillsConfigModule,
    GatewayConfigModule,
    JwtConfigModule,
    MysqlConfigModule,
    AbillsModule,
    InternetModule,
    UsersModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [ MysqlConfigModule ],
      useFactory: async (config: MysqlConfigService) => ({
        type: config.type,
        host: config.host,
        port: config.port,
        username: config.username,
        password: config.password,
        database: config.database,
        synchronize: config.synchronize,
        entities: [ User ],
      }),
      inject: [ MysqlConfigModule ],
    }),
    CacheModule.register({
      isGlobal: true,
    }),
    AbillsModule.registerAsync({
      imports: [ AbillsConfigModule ],
      useFactory: async (config: AbillsConfigService) => ({
        key: config.key,
        url: config.url,
        createBill: config.createBill,
      }),
      inject: [ AbillsConfigService ],
    }),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
