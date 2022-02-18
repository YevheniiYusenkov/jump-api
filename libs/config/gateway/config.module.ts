import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { GatewayConfigService } from './config.service';
import { Config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ Config ],
    }),
  ],
  providers: [ ConfigService, GatewayConfigService ],
  exports: [ GatewayConfigService ],
})
export class GatewayConfigModule {}
