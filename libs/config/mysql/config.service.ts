import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MysqlConfigService {
  public constructor(private readonly configService: ConfigService) {}
  
  public get host(): string {
    return this.configService.get<string>('mysql.host') || '';
  }
  
  public get port(): number {
    return this.configService.get<number>('mysql.port') || 0;
  }
  
  public get username(): string {
    return this.configService.get<string>('mysql.username') || '';
  }
  
  public get password(): string {
    return this.configService.get<string>('mysql.password') || '';
  }
  
  public get database(): string {
    return this.configService.get<string>('mysql.database') || '';
  }
  
  public get synchronize(): boolean {
    return this.configService.get<boolean>('mysql.synchronize') || true;
  }
  
  public get type(): 'mysql' {
    return this.configService.get<string>('mysql.type') as 'mysql' || 'mysql';
  }
}
