import { Module } from '@nestjs/common';
import { CliquesService } from './cliques.service';
import { CliquesController } from './cliques.controller';

@Module({
  controllers: [CliquesController],
  providers: [CliquesService]
})
export class CliquesModule {}
