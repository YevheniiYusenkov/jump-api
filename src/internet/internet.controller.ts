import { Controller, Get } from '@nestjs/common';

import { InternetService } from './internet.service';

@Controller('internet')
export class InternetController {
  public constructor(private readonly service: InternetService) {}

  @Get('plans')
  public plans(): string {
    return this.service.abillsHello();
  }
}
