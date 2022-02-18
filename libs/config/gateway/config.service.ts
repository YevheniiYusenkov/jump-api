import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GatewayConfigService {
  constructor(private readonly configService: ConfigService) {}
  
  get protocol(): string {
    return this.configService.get<string>('gateway.protocol');
  }
  
  get host(): string {
    return this.configService.get<string>('gateway.host');
  }
  
  get port(): string {
    return this.configService.get<string>('gateway.port');
  }
  
  get prefix(): string {
    return this.configService.get<string>('gateway.prefix');
  }
}
