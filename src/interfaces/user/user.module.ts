import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserController} from "./user.controller";
import {UserService} from "../../application";
import {user_interface} from "../../domain/Interfaces/user.repo.interface";
import {UserDomainServices} from "src/domain/services";
import {UserRepository} from "../../infrastructure/Repositories/user.repo";
import {User} from "../../domain/Models/Entities";
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
