import { EntityRepository, Repository } from 'typeorm';
import { Pal } from './entities/pal.entity';

@EntityRepository(Pal)
export class PalRepository extends Repository<Pal> {}
