import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { JwtConfigService } from './config.service';
import { Config } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ Config ],
    }),
  ],
  providers: [
    ConfigService,
    JwtConfigService,
  ],
  exports: [ JwtConfigService ],
})
export class JwtConfigModule {}
