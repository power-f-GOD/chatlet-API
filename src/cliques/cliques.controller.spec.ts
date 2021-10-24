import { Test, TestingModule } from '@nestjs/testing';
import { CliquesController } from './cliques.controller';
import { CliquesService } from './cliques.service';

describe('CliquesController', () => {
  let controller: CliquesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CliquesController],
      providers: [CliquesService],
    }).compile();

    controller = module.get<CliquesController>(CliquesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
