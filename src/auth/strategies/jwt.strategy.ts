import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';

import { JwtValidatePayload } from '@jump/interfaces';
import { JwtConfigService } from '@jump/config';
import { User } from '@jump/entities';

import { UsersService } from '../../users/users.service';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly jwtConfig: JwtConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConfig.secret,
    });
  }

  public async validate({ id }: JwtValidatePayload): Promise<User> {
    const user = await this.usersService.user({ id });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
