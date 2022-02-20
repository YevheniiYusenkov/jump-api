import { Injectable } from '@nestjs/common';

import { AbillsUser, CreateUserDTO } from '@jump/interfaces';
import { AbillsService } from '@jump/abills';

@Injectable()
export class UsersService {
  public constructor(private readonly abillsService: AbillsService) {}
  
  public async createUser({ username, password }: CreateUserDTO): Promise<AbillsUser> {
    return await this.abillsService.createUser({
      login: username,
      password: password,
    });
  }
}
