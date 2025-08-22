import { User } from "../Models/Entities";
import { IUserRepository } from "src/domain/Interfaces";
import { RegisterRequestModel } from "src/domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/Models/reqeust/updateUser.request";
export declare class UserDomainServices {
    private readonly userRepo;
    constructor(userRepo: IUserRepository);
    RegisterUser(user: User): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    UserLogin(userName: string): Promise<any>;
    registerNewUser(register: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
