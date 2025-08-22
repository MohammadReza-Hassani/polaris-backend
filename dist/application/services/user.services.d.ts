import { IUserRepository } from "src/domain/Interfaces";
import { User } from '../../domain/Models/Entities';
import { UserDomainServices } from "src/domain/services";
import { RegisterRequestModel } from "src/domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/Models/reqeust/updateUser.request";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "../../auth.service";
export declare class UserService {
    private readonly userRepo;
    private readonly userDomain;
    private readonly jwtService;
    private readonly authService;
    constructor(userRepo: IUserRepository, userDomain: UserDomainServices, jwtService: JwtService, authService: AuthService);
    getUserByUsername(username: string): Promise<User>;
    userLogin(username: string, password: string): Promise<any>;
    registerNewUser(register: RegisterRequestModel): Promise<any>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
