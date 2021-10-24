import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'src/users/entities/user.entity';
import { Pal } from 'src/pals/entities/pal.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserSubscriber } from 'src/users/subscribers/user.subscriber';
import { UserRepository } from './user.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Pal])],
  providers: [UsersService, UserRepository, UserSubscriber],
  controllers: [UsersController],
  exports: [UsersService]
})
export class UsersModule {}
