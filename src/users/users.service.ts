import { Injectable } from '@nestjs/common';

import { AbillsService } from '@jump/abills';
import { AbillsUser, CreateUserPayload } from '@jump/interfaces';

@Injectable()
export class UsersService {
  public constructor(private readonly abillsService: AbillsService) {}
  
  public async createUser(payload: CreateUserPayload): Promise<AbillsUser> {
    return await this.abillsService.createUser({
      login: payload.username,
      password: payload.password,
    });
  }
}
