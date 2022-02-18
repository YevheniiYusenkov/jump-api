import { Injectable } from '@nestjs/common';

import { AbillsService } from '@jump/abills';

@Injectable()
export class InternetService {
  constructor(private readonly abillsService: AbillsService) {}

  public abillsHello() {
    return this.abillsService.hello();
  }
}
