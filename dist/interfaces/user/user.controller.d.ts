import { UserService } from "src/application/services/user.services";
import { LoginRequestModel } from "src/domain/Models/reqeust/login.request";
import { RegisterRequestModel } from "src/domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/Models/reqeust/updateUser.request";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserByUsername(username: string): Promise<import("../../domain/Models/Entities").User>;
    userLogin(credentials: LoginRequestModel): Promise<any>;
    registerNewUser(user: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
