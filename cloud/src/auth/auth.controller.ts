import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AppController {
    @UseGuards(AuthGuard())
    @Post('login')
    async login(@Request() req) {
        return req.user;
    }
}
