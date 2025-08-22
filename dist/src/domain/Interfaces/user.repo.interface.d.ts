import { User } from "@domain/models/entities";
import { RegisterRequestModel } from "@domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "@domain/Models/reqeust/updateUser.request";
export declare const user_interface = "user_interface";
export interface IUserRepository {
    findById(id: number): Promise<User | null>;
    findUser(user: User): Promise<User | null>;
    findAll(): Promise<User[]>;
    getUserByUsername(username: string): Promise<User>;
    save(user: User): Promise<User>;
    userLogin(userName: string): Promise<User>;
    registerNewUser(register: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
