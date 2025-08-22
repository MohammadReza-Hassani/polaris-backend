import { Repository } from "typeorm";
import { IUserRepository } from "src/domain/interfaces";
import { User } from "src/domain/models/entities";
import { RegisterRequestModel } from "src/domain/models/reqeust/register.request";
import { updateUserRequestModel } from "src/domain/models/reqeust/updateUser.request";
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
