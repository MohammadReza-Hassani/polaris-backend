import { UserService } from "@application/services/user.services";
import { LoginRequestModel } from "@domain/Models/reqeust/login.request";
import { RegisterRequestModel } from "@domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "@domain/Models/reqeust/updateUser.request";
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getUserByUsername(username: string): Promise<import("../../domain/models/entities").User>;
    userLogin(credentials: LoginRequestModel): Promise<any>;
    registerNewUser(user: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
