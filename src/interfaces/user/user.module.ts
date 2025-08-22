import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { JwtModule } from "@nestjs/jwt";
import { UserController } from "./user.controller";
import { UserService } from "@application/index";
import { user_interface } from "@domain/interfaces/user.repo.interface";
import { UserDomainServices } from "@domain/services";
import { UserRepository } from "@infrastructure/repositories/user.repo";
import { User } from "@domain/models/entities";
import {AuthModule} from "../../auth.module";


@Module({
  imports: [
    TypeOrmModule.forFeature([UserRepository, User]),
    AuthModule, // <-- now AuthService will be available
  ],
  controllers: [UserController],
  providers: [
    UserService,
    UserDomainServices,
    UserRepository,
    {
      provide: user_interface,
      useClass: UserRepository
    },
  ],
  exports: [UserService],
})
export class UserModule {}
