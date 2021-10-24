import { EntityRepository, Repository } from 'typeorm';
import { Clique } from './entities/clique.entity';

@EntityRepository(Clique)
export class CliqueRepository extends Repository<Clique> {}
