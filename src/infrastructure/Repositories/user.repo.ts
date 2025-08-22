import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Not, Repository } from "typeorm";
import { IUserRepository } from "@domain/interfaces";
import { User } from "@domain/models/entities";
import { RegisterRequestModel } from "@domain/Models/reqeust/register.request";
import { updateUserRequestModel } from "@domain/Models/reqeust/updateUser.request";

@Injectable()
export class UserRepository implements IUserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
    ) {}

    async findUser(user: User): Promise<User | null> {
        return this.userRepo.findOne({
            where: [
                { id: user.id },
                {
                    id: Not(user.id),
                    username: user.username,
                    phone: user.phone,
                }
            ]
        });
    }

    async findById(id: number = 0): Promise<User | null> {
        return this.userRepo.findOne({ where: { id } });
    }

    async findAll(): Promise<User[]> {
        return this.userRepo.find();
    }

    async save(user: User): Promise<User> {
        return this.userRepo.save(user);
    }

    async getUserByUsername(username: string): Promise<User> {
        try {
            const query = `SELECT * FROM GetUserLocationByUserName($1)`;
            const rows = await this.userRepo.query(query, [username]);
            return rows[0] || null;
        } catch (error) {
            console.error("Error fetching user by username:", error);
            throw error;
        }
    }

    async userLogin(userName: string): Promise<User> {
        try {
            const query = `SELECT * FROM UserLogin($1)`;
            const rows = await this.userRepo.query(query, [userName]);
            return rows[0] || null;
        } catch (error) {
            console.error("Error logging in user:", error);
            throw error;
        }
    }

    async registerNewUser(registerDto: RegisterRequestModel): Promise<number> {
        try {
            const query = `SELECT * FROM RegisterNewUser($1, $2, $3)`;
            const rows = await this.userRepo.query(query, [
                registerDto.username,
                registerDto.password,
                registerDto.phone
            ]);
            return rows[0]?.id;  // Postgres RETURNING ensures we always get id
        } catch (error) {
            console.error("Error registering new user:", error);
            throw error;
        }
    }

    async updateUser(updateUser: updateUserRequestModel): Promise<number> {
        try {
            const query = `SELECT * FROM UpdateUserInfo($1, $2, $3, $4)`;
            const rows = await this.userRepo.query(query, [
                updateUser.id,
                updateUser.username,
                updateUser.password,
                updateUser.phone
            ]);
            return rows[0]?.affectedrows ?? 0;
        } catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }
}
