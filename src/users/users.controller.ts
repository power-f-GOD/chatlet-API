import {
  Controller,
  Post,
  Param,
  Delete,
  NotFoundException,
  Get
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll() {
    return await this.usersService.getAllUsers();
  }

  @Delete('/:username')
  async delete(@Param('username') username: string) {
    const user = await this.usersService.getUserByUsername(username);

    if (!user) {
      throw new NotFoundException(
        undefined,
        `User with username, ${username}, does not exist.`
      );
    }

    return await this.usersService.deleteUser(username);
  }
}
