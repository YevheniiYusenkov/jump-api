import { Test, TestingModule } from '@nestjs/testing';
import { AbillsService } from './abills.service';

describe('AbillsService', () => {
  let service: AbillsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ AbillsService ],
    }).compile();

    service = module.get<AbillsService>(AbillsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
