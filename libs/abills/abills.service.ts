import { Inject, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

import { AbillsOptions } from './interfaces/abills.options.interface';

@Injectable()
export class AbillsService {
  public constructor(
    @Inject('ABILLS_CONFIG') private config: AbillsOptions,
    private httpService: HttpService,
  ) {}
  
  public getPlans(): string {
    return `API_KEY: ${this.config.key}, URL: ${this.config.url}`;
  }
}
