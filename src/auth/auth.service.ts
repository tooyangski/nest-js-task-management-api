import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UserCredentialsDto } from './dto/user-credentials-dto';

@Injectable()
export class AuthService {
  constructor(private usersRepository: UsersRepository) {}

  async signUp(userCredentialsDto: UserCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(userCredentialsDto);
  }
}
