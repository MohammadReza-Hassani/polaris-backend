import { UserService } from "src/application/services/user.services";
import { LoginRequestModel } from "src/domain/models/reqeust/login.request";
import { RegisterRequestModel } from "src/domain/models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/models/reqeust/updateUser.request";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserByUsername(username: string): Promise<import("../../domain/models/entities").User>;
    userLogin(credentials: LoginRequestModel): Promise<any>;
    registerNewUser(user: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
