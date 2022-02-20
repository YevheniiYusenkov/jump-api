import { Controller, Post } from '@nestjs/common';

import { AbillsUser, CreateUserPayload } from '@jump/interfaces';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  
  @Post()
  public async createUser(payload: CreateUserPayload): Promise<AbillsUser>  {
    return await this.service.createUser(payload);
  }
}
