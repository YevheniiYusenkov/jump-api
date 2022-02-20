import { Injectable } from '@nestjs/common';
import { ConfigService as NestConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  public constructor(private readonly configService: NestConfigService) {}

  public get url(): string {
    return (this.configService.get<string | undefined>('abills.url') as string);
  }

  public get key(): string {
    return (this.configService.get<string | undefined>('abills.key') as string);
  }
  
  public get createBill(): number {
    return (this.configService.get<number | undefined>('abills.createBill') as number);
  }

  public get protocol(): string {
    return (this.configService.get<string | undefined>('gateway.protocol') as string);
  }

  public get host(): string {
    return (this.configService.get<string | undefined>('gateway.host') as string);
  }

  public get port(): number {
    return (this.configService.get<number | undefined>('gateway.port') as number);
  }

  public get prefix(): string {
    return (this.configService.get<string | undefined>('gateway.prefix') as string);
  }

  public get secret(): string {
    return (this.configService.get<string | undefined>('jwt.secret') as string);
  }

  public get expiresIn(): string {
    return (this.configService.get<string | undefined>('jwt.expiresIn') as string);
  }
}
