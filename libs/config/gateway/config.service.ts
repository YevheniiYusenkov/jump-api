import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GatewayConfigService {
  public constructor(private readonly configService: ConfigService) {}
  
  public get host(): string {
    return this.configService.get<string>('gateway.host') || '';
  }
  
  public get port(): number {
    return this.configService.get<number>('gateway.port') || 0;
  }
  
  public get protocol(): string {
    return this.configService.get<string>('gateway.protocol') || '';
  }
  
  public get prefix(): string {
    return this.configService.get<string>('gateway.key') || '';
  }
}
