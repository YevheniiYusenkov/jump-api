import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';

import { LoginResponse } from '@jump/interfaces';
import { User } from '@jump/entities';

import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cache: Cache,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  
  async validate(username: string, password: string): Promise<User | undefined> {
    const user = await this.usersService.user({ username });
    
    if (password === user?.password) {
      return user;
    }
  }
  
  public async login(user: User): Promise<LoginResponse> {
    await this.cache.set('sid', '');
    
    return {
      accessToken: this.jwtService.sign({ id: user.id }),
    };
  }
}
