import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn
} from 'typeorm';

import { Pal } from '../../pals/entities/pal.entity';
import { Clique } from '../../cliques/entities/clique.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Column({ length: 50 })
  first_name: string;

  @Column({ length: 50 })
  last_name: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 50, unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ default: false, type: 'boolean' })
  is_verified?: boolean;

  @CreateDateColumn()
  readonly created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;

  @ManyToMany(() => Pal, (pal) => pal.users)
  @JoinTable()
  pals?: Pal['username'][];

  @ManyToMany(() => Clique, (clique) => clique.id)
  cliques?: Clique['id'][];
}
