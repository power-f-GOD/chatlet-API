import {
  IsEmail,
  IsAlpha,
  IsAlphanumeric,
  IsNotEmpty,
  Matches
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Matches(/^[a-z-]+$/i, { message: 'First name should contain letters only.' })
  first_name: string;

  @IsNotEmpty()
  @Matches(/^[a-z-]+$/i, { message: 'Last name should contain letters only.' })
  last_name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @Matches(/^[a-z0-9_]+$/i, {
    message:
      'Username should contain either of alpha, numeric, alphanumeric or underscores'
  })
  username: string;

  @IsNotEmpty()
  password: string;
}
