import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { validate } from './util/env.validation';

@Module({
  imports: [ConfigModule.forRoot({ validate }), DatabaseModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
