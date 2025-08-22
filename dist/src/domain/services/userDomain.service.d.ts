import { User } from "src/domain/models/entities";
import { IUserRepository } from "src/domain/Interfaces";
import { RegisterRequestModel } from "src/domain/models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/models/reqeust/updateUser.request";
export declare class UserDomainServices {
    private readonly userRepo;
    constructor(userRepo: IUserRepository);
    RegisterUser(user: User): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    UserLogin(userName: string): Promise<any>;
    registerNewUser(register: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
