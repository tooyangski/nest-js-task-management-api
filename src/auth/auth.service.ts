import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserCredentialsDto } from './dto/user-credentials-dto';
import * as ps from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'jsonwebtoken';
@Injectable()
export class AuthService {
  constructor(
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async signUp(userCredentialsDto: UserCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(userCredentialsDto);
  }

  async signIn(
    userCredentialsDto: UserCredentialsDto,
  ): Promise<{ accessToken: string }> {
    const { email, password } = userCredentialsDto;

    const user = await this.usersRepository.findOne({
      where: {
        email,
      },
    });

    if (user && (await ps.compare(password, user.password))) {
      const { email, createdAt, modifiedAt } = user;
      const payload: JwtPayload = { email, createdAt, modifiedAt };
      const accessToken: string = await this.jwtService.signAsync(payload);

      return { accessToken };
    } else {
      throw new UnauthorizedException('email or password is incorrect.');
    }
  }
}
