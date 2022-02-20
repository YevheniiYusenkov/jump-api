import { Body, Controller, Get, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}
  
  @Post('token')
  public async setToken(@Body() { value }: { value: string; }): Promise<string> {
    return this.service.setToken(value);
  }
  
  @Get('token')
  public async getToken(): Promise<string> {
    return this.service.getToken();
  }
}
