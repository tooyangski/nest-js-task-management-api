import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt-strategy';
import { User } from './user.entity';

@Module({
  imports: [
    // Register here para ma reuse sa ibang modules, just call this.
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'JWT_SECRET',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  // Import JwtStrategy here para ma export then pwede na sya tawagin kahit san
  providers: [AuthService, UsersRepository, JwtStrategy],
  controllers: [AuthController],
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
