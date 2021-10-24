import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  JoinColumn
} from 'typeorm';
import { User } from 'src/users/entities/user.entity';

@Entity('cliques')
export class Clique {
  @PrimaryGeneratedColumn({ name: 'clique_id' })
  readonly id: number;

  @Column({ name: 'clique_name' })
  name: string;

  @CreateDateColumn()
  readonly created_at: Date;

  @ManyToMany(() => User, (user) => user.username)
  @JoinTable({
    name: 'cliques_participants',
    joinColumn: {
      name: 'clique_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'username',
      referencedColumnName: 'username'
    }
  })
  participants?: User['username'][];
}
