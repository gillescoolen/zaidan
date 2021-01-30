import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get('DB_URL'),
        user: configService.get('DB_USER'),
        pass: configService.get('DB_PASSWORD'),
        ssl: false,
        retryAttempts: 1
      })
    })
  ]
})
export class DatabaseModule {}