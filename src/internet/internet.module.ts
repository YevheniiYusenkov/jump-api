import { Module } from '@nestjs/common';

import { InternetService } from './internet.service';
import { InternetController } from './internet.controller';

@Module({
  providers: [ InternetService ],
  controllers: [ InternetController ],
})
export class InternetModule {}
