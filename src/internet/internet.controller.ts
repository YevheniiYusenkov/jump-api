import { Controller, Get } from '@nestjs/common';

import { GetPlansResponse } from '@jump/interfaces';

import { InternetService } from './internet.service';

@Controller('internet')
export class InternetController {
  public constructor(private readonly service: InternetService) {}

  @Get('plans')
  public async plans(): Promise<GetPlansResponse> {
    return await this.service.plans();
  }
}
