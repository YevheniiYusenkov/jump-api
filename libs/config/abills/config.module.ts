import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AbillsConfigService } from './config.service';
import { Config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ Config ],
    }),
  ],
  providers: [
    ConfigService,
    AbillsConfigService,
  ],
  exports: [ AbillsConfigService ],
})
export class AbillsConfigModule {}
