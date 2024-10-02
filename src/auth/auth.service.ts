import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserCredentialsDto } from './dto/user-credentials-dto';
import * as ps from 'bcryptjs';
@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async signUp(userCredentialsDto: UserCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(userCredentialsDto);
  }

  async signIn(userCredentialsDto: UserCredentialsDto): Promise<string> {
    const { email, password } = userCredentialsDto;

    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });

    if (user && (await ps.compare(password, user.password))) {
      return 'success';
    } else {
      throw new UnauthorizedException('email or password is incorrect.');
    }
  }
}
