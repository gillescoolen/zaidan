import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { validate } from './util/env.validation';
import { JwtStrategy } from './auth/strategies/jwt.strategy';

@Module({
  imports: [ConfigModule.forRoot({ validate }), DatabaseModule, UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy]
})
export class AppModule {}
