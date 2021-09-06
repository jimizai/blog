import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() user: AuthLoginDto) {
    const userInstance = await this.authService.verifyUser(
      user.username,
      user.password
    );

    return this.authService.login(userInstance);
  }
}
