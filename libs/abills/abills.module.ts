import { Global, Module } from '@nestjs/common';

import { AbillsService } from './abills.service';

@Global()
@Module({
  providers: [ AbillsService ],
  exports: [ AbillsService ],
})
export class AbillsModule {}
