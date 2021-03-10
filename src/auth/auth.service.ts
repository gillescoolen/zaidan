import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { AuthDto } from './auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) {}

  public async register(data: AuthDto): Promise<string> {
    const user = await this.usersService.create(data);
    return this.jwtService.sign({ username: user.name });
  }

  public async login(data: AuthDto): Promise<string | null> {
    const user = await this.usersService.findByName(data.name);
    const match = await bcrypt.compare(data.password, user.password);
    return match ? this.jwtService.sign({ username: data.name }) : null;
  }
}
