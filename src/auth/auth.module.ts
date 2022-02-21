import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { JwtConfigModule, JwtConfigService } from '@jump/config';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtConfigModule,
    JwtModule.registerAsync({
      imports: [ JwtConfigModule ],
      useFactory: async (config: JwtConfigService) => ({
        secret: config.secret,
        signOptions: {
          expiresIn: config.expiresIn,
        },
      }),
      inject: [ JwtConfigService ],
    }),
  ],
  providers: [
    AuthService,
    LocalStrategy,
    JwtStrategy,
  ],
  controllers: [ AuthController ],
})
export class AuthModule {}
