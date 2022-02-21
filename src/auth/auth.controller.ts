import { Controller, Req, Post, UseGuards } from '@nestjs/common';

import { GetUserRequest, LoginResponse } from '@jump/interfaces';

import { LocalAuthGuard } from './guards/local.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}
  
  @Post('login')
  @UseGuards(LocalAuthGuard)
  public async login(@Req() { user }: GetUserRequest): Promise<LoginResponse> {
    return this.service.login(user);
  }
}
