import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { JwtConfigService } from './config.service';
import { JwtConfig } from './config';

@Global()
@Module({
  imports: [ ConfigModule.forRoot(
    {
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [ JwtConfig ],
    }),
  ],
  providers: [ JwtConfigService ],
  exports: [ JwtConfigService ],
})
export class JwtConfigModule {}
