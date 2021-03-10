import { Body, Controller, Get, Post, Req, UnauthorizedException, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@Controller()
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  public async register(@Body() data: AuthDto) {
    return {
      token: await this.authService.register(data)
    };
  }

  @Post('login')
  public async login(@Body() data: AuthDto) {
    const token = await this.authService.login(data);

    if (!token) throw new UnauthorizedException();

    return {
      token
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('lol')
  public lol(@Req() req) {
    return {
      user: req.user
    };
  }
}
