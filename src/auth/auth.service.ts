import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';
import { AuthDto } from './auth.dto';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService) {}

  register(data: AuthDto) {
    return this.usersService.create(data);
  }

  //todo: implement token stuff
  async login(data: AuthDto) {
    const user = await this.usersService.findByName(data.name);

    const password = await bcrypt.hash(data.password, 16);

    if (password === user.password) return true;

    return false;
  }
}
