import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserCredentialsDto } from './dto/user-credentials-dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() userCredentialsDto: UserCredentialsDto): Promise<void> {
    console.log('went into the controller...');
    return this.authService.signUp(userCredentialsDto);
  }
}
