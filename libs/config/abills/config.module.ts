import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AbillsConfigService } from './config.service';
import { AbillsConfig } from './config';

@Global()
@Module({
  imports: [ ConfigModule.forRoot(
    {
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [ AbillsConfig ],
    }),
  ],
  providers: [ AbillsConfigService ],
  exports: [ AbillsConfigService ],
})
export class AbillsConfigModule {}
