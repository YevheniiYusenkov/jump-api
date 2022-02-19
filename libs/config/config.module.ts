import { Global, Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';

import { ConfigService } from './config.service';

import { JwtConfig } from './jwt';
import { AbillsConfig } from './abills';
import { GatewayConfig } from './gateway';

@Global()
@Module({
  imports: [ NestConfigModule.forRoot(
    {
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [
          GatewayConfig,
          AbillsConfig,
          JwtConfig,
        ],
    }),
  ],
  providers: [ ConfigService ],
  exports: [ ConfigService ],
})
export class ConfigModule {}
