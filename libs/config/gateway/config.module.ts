import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { GatewayConfigService } from './config.service';
import { GatewayConfig } from './config';

@Global()
@Module({
  imports: [ ConfigModule.forRoot(
    {
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [ GatewayConfig ],
    }),
  ],
  providers: [ GatewayConfigService ],
  exports: [ GatewayConfigService ],
})
export class GatewayConfigModule {}
