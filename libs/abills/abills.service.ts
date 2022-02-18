import { Injectable } from '@nestjs/common';

@Injectable()
export class AbillsService {
  public async getPlans() {
    return 'Hello from Abills Service';
  }
}
