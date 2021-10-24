import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as argon2 from 'argon2';

import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.usersService.getUserByUsername(username);

    if (user && (await argon2.verify(user.password, password))) {
      delete user.password;
      return user;
    }

    throw new UnauthorizedException(
      undefined,
      user
        ? `Password for '${username}' incorrect.`
        : `We don't have a record for the user: ${username}.`
    );
  }
}
