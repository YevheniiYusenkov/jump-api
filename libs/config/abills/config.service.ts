import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AbillsConfigService {
  public constructor(private readonly configService: ConfigService) {}

  public get url(): string {
    return this.configService.get<string>('abills.url') || '';
  }

  public get key(): string {
    return this.configService.get<string>('abills.key') || '';
  }
  
  public get createBill(): number {
    return this.configService.get<number>('abills.createBill') || 0;
  }
}
