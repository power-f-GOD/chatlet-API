import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, DeleteResult, FindConditions } from 'typeorm';

import { User } from 'src/users/entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { isEmail } from 'class-validator';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: UserRepository) {}

  async createUser(user: CreateUserDto): Promise<User> {
    return await this.userRepo.save(user);
  }

  getUserById(id: number): Promise<User | null> {
    return this.userRepo.findOne(id);
  }

  getUserByUsername(username: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { username } });
  }

  getUserByEmail(email: string): Promise<User | null> {
    return this.userRepo.findOne({ where: { email } });
  }

  getUserByUsernameOrEmail(usernameOrEmail?: string): Promise<User | null> {
    return this.userRepo.findOne({
      where: isEmail(usernameOrEmail)
        ? { email: usernameOrEmail }
        : { username: usernameOrEmail }
    });
  }

  getAllUsers(): Promise<User[]> {
    return this.userRepo.find();
  }

  async deleteUser(idOrUsername: number | string): Promise<any> {
    return await this.userRepo.remove([
      {
        username: idOrUsername
      } as any
    ]);
  }
}
