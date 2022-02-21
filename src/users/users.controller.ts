import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDTO } from '@jump/interfaces';
import { User } from '@jump/entities';

import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly service: UsersService) {}
  
  @Post()
  public async create(@Body() dto: CreateUserDTO): Promise<User>  {
    return await this.service.create(dto);
  }
  
  @Get('me')
  public async me(): Promise<User> {
    return await this.service.me();
  }
}
