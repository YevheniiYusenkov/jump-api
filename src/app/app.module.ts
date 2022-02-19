import { Module } from '@nestjs/common';

import { AbillsModule } from '@jump/abills';
import { AbillsConfigModule, AbillsConfigService, GatewayConfigModule } from '@jump/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { InternetModule } from '../internet/internet.module';

@Module({
  imports: [
    GatewayConfigModule,
    InternetModule,
    
    // AbillsModule.registerAsync({
    //   imports: [ AbillsConfigModule ],
    //   useFactory: (config: AbillsConfigService) => ({
    //     key: config.key,
    //     url: config.url,
    //   }),
    //   inject: [ AbillsConfigService ],
    // }),
    
    AbillsModule.register({
      key: 'asdasd',
      url: 'asdas',
    }),
  ],
  controllers: [ AppController ],
  providers: [ AppService ],
})
export class AppModule {}
