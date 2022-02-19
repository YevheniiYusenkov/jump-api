import { ModuleMetadata, Type } from '@nestjs/common';

import { AbillsOptionsFactory } from './abills.options.factory.interface';
import { AbillsOptions } from './abills.options.interface';

export interface AbillsOptionsAsync
  extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useExisting?: Type<AbillsOptionsFactory>;
  useClass?: Type<AbillsOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<AbillsOptions> | AbillsOptions;
}
