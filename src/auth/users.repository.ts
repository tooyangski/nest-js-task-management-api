import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { UserCredentialsDto } from './dto/user-credentials-dto';
import * as ps from 'bcryptjs';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(userCredentials: UserCredentialsDto): Promise<void> {
    const { email, password } = userCredentials;
    const salt = await ps.genSaltSync();
    const hashedPassword = await ps.hashSync(password, salt);
    const timestamp = new Date().toISOString();

    const user = this.create({
      email,
      password: hashedPassword,
      createdAt: timestamp,
      modifiedAt: timestamp,
    });

    await this.save(user);
  }
}
