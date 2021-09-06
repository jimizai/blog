import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersEntity } from '../user/user.entity';
import { UsersService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async verifyUser(username: string, password: string): Promise<UsersEntity> {
    const user = await this.usersService.findOne({ username });
    if (!user || this.encriptPassword(password) !== user.password) {
      throw new UnauthorizedException();
    }
    return user;
  }

  login(user: UsersEntity): string {
    const payload = { username: user.username, sub: user.id };
    return this.jwtService.sign(payload);
  }

  private encriptPassword(password: string): string {
    return password;
  }
}
