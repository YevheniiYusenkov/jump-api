import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AbillsConfigService {
  constructor(private readonly configService: ConfigService) {}
  
  get url(): string {
    return this.configService.get<string>('abills.url');
  }
  
  get key(): string {
    return this.configService.get<string>('abills.key');
  }
}
