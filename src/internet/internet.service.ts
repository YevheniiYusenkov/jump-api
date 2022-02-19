import { Injectable } from '@nestjs/common';

import { AbillsService } from '@jump/abills';

@Injectable()
export class InternetService {
  public constructor(private readonly abillsService: AbillsService) {}

  public abillsHello(): string {
    return this.abillsService.getPlans();
  }
}
