import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { Roles } from './common/decorators/roles.decorator';
import { Role } from './common/enums/role.enum';

@Controller()
@ApiTags('App')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Hello!',
    type: String
  })
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/bye')
  @ApiResponse({
    status: 200,
    description: 'Hello!',
    type: String
  })
  @Roles(Role.Admin)
  getBye(): string {
    return this.appService.getHello();
  }
}
