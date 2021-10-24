import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  BaseEntity,
  JoinTable
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('pals')
export class Pal {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ unique: true })
  username: string;

  @ManyToMany(() => User, (user) => user.username)
  @JoinTable({
    name: 'pal_users',
    joinColumn: {
      name: 'pal_username',
      referencedColumnName: 'username'
    },
    inverseJoinColumn: {
      name: 'user_username',
      referencedColumnName: 'username'
    }
  })
  users: User['username'][];
}
