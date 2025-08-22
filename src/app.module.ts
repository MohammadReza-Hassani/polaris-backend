import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseFactory } from '@infrastructure/database';
import { User } from '@domain/models/Entities';
import { Location } from '@domain/models/Entities';
import { UserModule } from '@interfaces/user/user.module';
import { ConfigMagmentModule } from '@config/config.module';
import {LocationModule} from "@interfaces/Location/location.module";
import {AuthModule} from "./auth.module";


@Module({
  imports: [
    // Dynamically initialize the DB connection via the DatabaseFactory
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        const dbType = 'postgres';  // Default to MySQL if not provided
        const dataSource = DatabaseFactory.createDatabaseConnection(dbType);  // Create DB connection
        return dataSource
      },
    }),
    TypeOrmModule.forFeature([
      User,
      Location
    ]),

    // Module
    ConfigMagmentModule,
    UserModule,
      AuthModule,
    LocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
