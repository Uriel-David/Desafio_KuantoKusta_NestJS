import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { JwtGuard } from './jwt.guard';

import { AuthService } from './auth.service';
import { User } from './users'

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() body: User): { token: string } {
        return { token: this.authService.login(body.username, body.password) };
    }
}
