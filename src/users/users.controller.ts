import { Body, Controller, Post } from '@nestjs/common';

import { AbillsUser, CreateUserDTO } from '@jump/interfaces';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  
  @Post()
  public async createUser(@Body() dto: CreateUserDTO): Promise<AbillsUser>  {
    return await this.service.createUser(dto);
  }
}
