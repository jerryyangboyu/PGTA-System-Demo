import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { RespCredentials } from './auth.service';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    public constructor(private authService: AuthService) {

    }

    @Post('signup')
    public signup(@Body() authDto: AuthDto): Promise<RespCredentials> {
        return this.authService.signup(authDto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    public login(@Body() authDto: AuthDto): Promise<RespCredentials> {
        return this.authService.login(authDto);
    }
}
