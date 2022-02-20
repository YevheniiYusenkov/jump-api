import { Controller, Get } from '@nestjs/common';

import { Plan } from '@jump/interfaces';

import { InternetService } from './internet.service';

@Controller('internet')
export class InternetController {
  public constructor(private readonly service: InternetService) {}

  @Get('plans')
  public async plans(): Promise<Plan[]> {
    return await this.service.plans();
  }
}
