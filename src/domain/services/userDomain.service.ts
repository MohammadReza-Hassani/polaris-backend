import {Inject, Injectable} from "@nestjs/common";
import {User} from "@domain/models/Entities";
import {IUserRepository} from "@domain/Interfaces";
import {user_interface} from "@domain/Interfaces/user.repo.interface";
import {RegisterRequestModel} from "@domain/Models/reqeust/register.request";
import {updateUserRequestModel} from "@domain/Models/reqeust/updateUser.request";

@Injectable()
export class UserDomainServices {
    constructor(
        @Inject(user_interface)
        private readonly userRepo: IUserRepository
    ){}

    async RegisterUser(user: User) : Promise<User> {

        const existingUser : User | null = await this.userRepo.findUser(user)
        
        if(existingUser) {
            throw new Error("User name already taken.")
        }

        let newUser : User = new User()
        Object.assign(newUser, user)

        let result: User = await this.userRepo.save(newUser)

        return result
    }
    async getUserByUsername(username: string) : Promise<User> {

        const existingUser : User = await this.userRepo.getUserByUsername(username)

        if(!existingUser) {
            throw new Error("User Does not exist.")
        }
        
        return existingUser
    }

    async UserLogin(userName: string) : Promise<any> {

        const existingUser : User = await this.userRepo.userLogin(userName)

        if(!existingUser) {
            throw new Error("User Does not exist.")
        }

        return existingUser
    }
    
    //
    // async LoginUser(user: User) : Promise<User | null> {
    //     return await this.userRepo.loginUser(user)
    // }


    async registerNewUser(register:RegisterRequestModel) : Promise<number> {

        return await this.userRepo.registerNewUser(register)
    }


    async updateUser(updateUser:updateUserRequestModel) : Promise<number> {

        return await this.userRepo.updateUser(updateUser)
    }
    
}