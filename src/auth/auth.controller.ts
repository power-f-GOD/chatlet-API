import {
  Controller,
  UseGuards,
  Post,
  Request,
  Get,
  Body,
  ConflictException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import * as argon2 from 'argon2';

import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService
  ) {}

  @Get()
  index() {
    return 'Auth (index) route!';
  }

  @Post('/signup')
  async signup(@Body() body: CreateUserDto) {
    const { username, email } = body;
    const user = await this.userService.getUserByUsernameOrEmail(
      username || email
    );
    console.log('user: ', user);
    if (user) {
      throw new ConflictException(
        undefined,
        `User with email|username already exists: ${email}|${username}.`
      );
    }

    body.password = await argon2.hash(body.password);
    return this.userService.createUser(body);
  }

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(
    @Body() body: Pick<CreateUserDto, 'email' | 'username' | 'password'>
  ) {
    const { email, username } = body;
    const user = await this.userService.getUserByUsernameOrEmail(
      username || email
    );

    return user;
  }
}
