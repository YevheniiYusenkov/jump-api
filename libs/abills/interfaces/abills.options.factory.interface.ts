import { AbillsOptions } from './abills.options.interface';

export interface AbillsOptionsFactory {
  createAbillsOptions(): Promise<AbillsOptions> | AbillsOptions;
}
