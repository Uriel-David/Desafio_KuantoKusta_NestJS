import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { users, User, Payload } from './users';

@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) {}

    login(username: string, password: string): string {
        const user: User = this.validateCredentials(username, password);
        
        const payload: Payload = {
            sub: user.id,
            username: user.username,
        };

        return this.jwtService.sign(payload);
    }

    validateCredentials(username: string, password: string): User {
        const user: User = users.find((user: User): boolean =>
            user.username === username && bcrypt.compareSync(password, user.password)
        );

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    }
}
