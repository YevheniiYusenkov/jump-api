import { Injectable } from '@nestjs/common';

import { Plan } from '@jump/interfaces';
import { AbillsService } from '@jump/abills';

@Injectable()
export class InternetService {
  public constructor(private readonly abillsService: AbillsService) {}

  public async plans(): Promise<Plan[]> {
    return await this.abillsService.plans();
  }
}
