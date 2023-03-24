import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { Payload } from '../auth/users';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: String(process.env.SECRET_JWT),
        });
    }

    async validate(payload: Payload): Promise<Payload> {
        return payload;
    }
}
