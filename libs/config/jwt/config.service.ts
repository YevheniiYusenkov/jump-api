import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService {
  public constructor(private readonly configService: ConfigService) {}

  public get secret(): string {
    return this.configService.get<string>('jwt.secret') || '';
  }
  
  public get expiresIn(): string {
    return this.configService.get<string>('jwt.expiresIn') || '';
  }
}
