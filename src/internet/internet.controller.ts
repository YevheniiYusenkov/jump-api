import { Controller, Get } from '@nestjs/common';

import { InternetService } from './internet.service';

@Controller('internet')
export class InternetController {
  constructor(private readonly service: InternetService) {}

  @Get('plans')
  public async plans(): Promise<string> {
    return this.service.abillsHello();
  }
}
