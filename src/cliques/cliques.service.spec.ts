import { Test, TestingModule } from '@nestjs/testing';
import { CliquesService } from './cliques.service';

describe('CliquesService', () => {
  let service: CliquesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CliquesService],
    }).compile();

    service = module.get<CliquesService>(CliquesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
