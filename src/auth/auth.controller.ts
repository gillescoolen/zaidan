import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthDto } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';

@Controller()
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() data: AuthDto) {
    await this.authService.register(data);
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Body() data: AuthDto) {
    await this.authService.login(data);
  }
}
