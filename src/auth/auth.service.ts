import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';

import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}
  
  public async setToken(value: string): Promise<string> {
    return await this.cacheManager.set<string>('token', value, 10);
  }
  
  public async getToken(): Promise<string> {
    return await this.cacheManager.get<string>('token') || '';
  }
}
