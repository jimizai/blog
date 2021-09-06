import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { getEnv } from '../../environments';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: getEnv('jwt').secret,
      signOptions: { expiresIn: getEnv('jwt').expiresIn },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
