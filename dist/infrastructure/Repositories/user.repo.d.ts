import { Repository } from "typeorm";
import { IUserRepository } from "../../domain/Interfaces";
import { User } from "../../domain/Models/Entities";
import { RegisterRequestModel } from "src/domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/Models/reqeust/updateUser.request";
export declare class UserRepository implements IUserRepository {
    private readonly userRepo;
    constructor(userRepo: Repository<User>);
    findUser(user: User): Promise<User | null>;
    findById(id?: number): Promise<User | null>;
    findAll(): Promise<User[]>;
    save(user: User): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    userLogin(userName: string): Promise<User>;
    registerNewUser(registerDto: RegisterRequestModel): Promise<number>;
    updateUser(updateUser: updateUserRequestModel): Promise<number>;
}
