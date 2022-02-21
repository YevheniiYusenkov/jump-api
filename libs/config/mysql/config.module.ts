import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { MysqlConfigService } from './config.service';
import { MysqlConfig } from './config';

@Global()
@Module({
  imports: [ ConfigModule.forRoot(
    {
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [ MysqlConfig ],
    }),
  ],
  providers: [ MysqlConfigService ],
  exports: [ MysqlConfigService ],
})
export class MysqlConfigModule {}
