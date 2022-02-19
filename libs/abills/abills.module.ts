import { DynamicModule, Global, Module, Provider } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { AbillsService } from './abills.service';
import { AbillsOptions, ABILLS_CONFIG } from './interfaces/abills.options.interface';
import { AbillsOptionsAsync } from './interfaces/abills.options.async.interface';
import { AbillsOptionsFactory } from './interfaces/abills.options.factory.interface';

@Global()
@Module({
  providers: [ AbillsService ],
  exports: [ AbillsService ],
})
export class AbillsModule {
  public static register(
    options: AbillsOptions,
  ): DynamicModule {
    return {
      module: AbillsModule,
      imports: [ HttpModule ],
      providers: [
        {
          provide: ABILLS_CONFIG,
          useValue: options,
        },
      ],
      exports: [ AbillsService ],
    };
  }
  
  public static registerAsync(
    options: AbillsOptionsAsync,
  ): DynamicModule {
    return {
      module: AbillsModule,
      imports: [ HttpModule, ...options.imports ],
      providers: [
        AbillsService,
        ...this.createAbillsProviders(options),
      ],
      exports: [ AbillsService ],
    };
  }
  
  public static createAbillsProviders(
    options: AbillsOptionsAsync,
  ): Provider[] {
    if (options.useFactory || options.useExisting) {
      return [ this.createAbillsOptionsProvider(options) ];
    }
    
    if (options.useClass) {
      return [
        {
          provide: options.useClass,
          useClass: options.useClass,
        },
      ];
    }
  }
  
  public static createAbillsOptionsProvider(
    { useFactory, useClass, useExisting, inject }: AbillsOptionsAsync,
  ): Provider {
    if (useFactory) {
      return {
        useFactory,
        inject: inject || [],
        provide: ABILLS_CONFIG,
      };
    }
  
    return {
      useFactory: async (optionsFactory: AbillsOptionsFactory) =>
        await optionsFactory.createAbillsOptions(),
      inject: [ useExisting || useClass ],
      provide: ABILLS_CONFIG,
    };
  }
}
