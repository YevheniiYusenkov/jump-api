import { Inject, Injectable } from '@nestjs/common';

import axios from 'axios';

import { AbillsPlan, Plan, AbillsUser, CreateAbillsUserPayload } from '@jump/interfaces';

import { AbillsOptions } from './interfaces/abills.options.interface';

@Injectable()
export class AbillsService {
  public constructor(@Inject('ABILLS_CONFIG') private config: AbillsOptions) {}
  
  private async get<ResponseType>(location: string): Promise<ResponseType> {
    const response = await axios.get<ResponseType>(this.config.url + location, {
      headers: {
        KEY: this.config.key,
      },
    });

    return response.data;
  }
  
  private async post<ResponseType, PayloadType>(location: string, body?: PayloadType): Promise<ResponseType> {
    const response = await axios.post<ResponseType>(this.config.url + location, body, {
      headers: {
        KEY: this.config.key,
      },
    });
  
    return response.data;
  }
  
  public async plans(): Promise<Plan[]> {
    return (await this.get<AbillsPlan[]>('/abon/tariffs')).map((plan): Plan => ({
      id: plan.tpId,
      name: plan.name,
      description: plan.description,
    }));
  }
  
  public async createUser(payload: CreateAbillsUserPayload): Promise<AbillsUser> {
    if (payload.createBill === undefined || payload.createBill === null) {
      payload.createBill = this.config.createBill;
    }

    return await this.post<AbillsUser, CreateAbillsUserPayload>('/users', payload);
  }
}
