import { Inject, Injectable } from '@nestjs/common';
import axios from 'axios';

import { GetAbillsPlansResponse, GetPlansResponse, Plan } from '@jump/interfaces';

import { AbillsOptions } from './interfaces/abills.options.interface';

@Injectable()
export class AbillsService {
  public constructor(@Inject('ABILLS_CONFIG') private config: AbillsOptions) {}
  
  private async get<T>(location: string): Promise<T> {
    const response = await axios.get<T>(this.config.url + location, {
      headers: {
        KEY: this.config.key,
      },
    });

    return response.data;
  }
  
  public async plans(): Promise<GetPlansResponse> {
    return (await this.get<GetAbillsPlansResponse>('/abon/tariffs')).map((plan): Plan => ({
      id: plan.tpId,
      name: plan.name,
      description: plan.description,
    }));
  }
}
