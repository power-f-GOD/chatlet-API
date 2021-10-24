import { EntityRepository, Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
