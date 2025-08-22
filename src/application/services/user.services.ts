import {Inject, Injectable} from "@nestjs/common";
import {IUserRepository} from "@domain/Interfaces";
import {user_interface} from "@domain/Interfaces/user.repo.interface";
import {User} from '@domain/models/entities';
import {UserDomainServices} from "@domain/services";
import {RegisterRequestModel} from "@domain/models/reqeust/register.request";
import {updateUserRequestModel} from "@domain/models/reqeust/updateUser.request";
import {JwtService} from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import {AuthService} from "../../auth.service";

@Injectable()
export class UserService {
    constructor(
        @Inject(user_interface)
        private readonly userRepo: IUserRepository,
        private readonly userDomain: UserDomainServices,
        private readonly jwtService: JwtService,
        private readonly authService: AuthService,
    ){}
    //
    // async getUserById(id: number = 0): Promise<UserResponseModel | null> {
    //
    //     let result: UserResponseModel = new UserResponseModel()
    //     let user:User | null = await this.userRepo.findById(id)
    //
    //     if(user) {
    //         let userValueObject: UserValueObject = plainToInstance(UserValueObject, user)
    //         result = plainToInstance(UserResponseModel, userValueObject)
    //     }
    //
    //     return result
    // }
    //
    // async getUserByUser(request: UserRequestModel) : Promise<UserResponseModel> {
    //     let result : UserResponseModel = new UserResponseModel()
    //     let user: User | null = plainToInstance(UserValueObject, request, {
    //         excludeExtraneousValues: true
    //     })
    //     user = await this.userRepo.findUser(user)
    //
    //     if(user) {
    //         result = plainToInstance(UserResponseModel, user)
    //     }
    //
    //     return result
    // }
    //
    // async createUser(reqeust: UserRequestModel): Promise<UserResponseModel> {
    //
    //     let result: UserResponseModel = new UserResponseModel()
    //
    //     let newUser:User = plainToInstance(User, reqeust, {
    //         excludeExtraneousValues: true
    //     })
    //
    //     await this.userDomain.RegisterUser(newUser)
    //
    //     result = plainToInstance(UserResponseModel, newUser)
    //
    //     return result
    // }

    // async getAllUsers(): Promise<UsersResponseModel> {
    //
    //     let result: UsersResponseModel = new UsersResponseModel()
    //     let users: User[] = await this.userDomain.findAll()        
    //
    //     if(users && users.length > 0) {
    //         result.data = plainToInstance(UserResponseModel, users)
    //     }
    //
    //     return result
    // }
    
    async getUserByUsername(username:string): Promise<User>{
        return await this.userDomain.getUserByUsername(username)
    }

    async userLogin(username: string, password: string): Promise<any> {
        const user = await this.userDomain.UserLogin(username);

        if (!user) {
            return null;
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return null;
        }

        // create JWT payload
        const payload = { username: user.username, sub: user.id };

        // await the token generation
        const token = await this.authService.generateToken(payload);

        return {
            id: user.id,
            username: user.username,
            access_token: token, // now this will be the actual token string
        };
    }

    async registerNewUser(register: RegisterRequestModel): Promise<any> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(register.password, saltRounds);
        register.password = hashedPassword;

        const newUserId = await this.userDomain.registerNewUser(register);

        // auto-generate token for new user
        const payload = { username: register.username, sub: newUserId };
        const token = await this.authService.generateToken(payload);

        return {
            id: newUserId,
            username: register.username,
            access_token: token,
        };
    }



    async updateUser(updateUser:updateUserRequestModel) : Promise<number> {

        return await this.userDomain.updateUser(updateUser)
    }
}