import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserCredentialsDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
