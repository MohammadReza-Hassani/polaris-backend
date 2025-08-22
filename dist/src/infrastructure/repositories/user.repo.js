"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entities_1 = require("../../domain/models/entities");
let UserRepository = class UserRepository {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async findUser(user) {
        return this.userRepo.findOne({
            where: [
                { id: user.id },
                {
                    id: (0, typeorm_2.Not)(user.id),
                    username: user.username,
                    phone: user.phone,
                }
            ]
        });
    }
    async findById(id = 0) {
        return this.userRepo.findOne({ where: { id } });
    }
    async findAll() {
        return this.userRepo.find();
    }
    async save(user) {
        return this.userRepo.save(user);
    }
    async getUserByUsername(username) {
        try {
            const query = `SELECT * FROM GetUserLocationByUserName($1)`;
            const rows = await this.userRepo.query(query, [username]);
            return rows[0] || null;
        }
        catch (error) {
            console.error("Error fetching user by username:", error);
            throw error;
        }
    }
    async userLogin(userName) {
        try {
            const query = `SELECT * FROM UserLogin($1)`;
            const rows = await this.userRepo.query(query, [userName]);
            return rows[0] || null;
        }
        catch (error) {
            console.error("Error logging in user:", error);
            throw error;
        }
    }
    async registerNewUser(registerDto) {
        try {
            const query = `SELECT * FROM RegisterNewUser($1, $2, $3)`;
            const rows = await this.userRepo.query(query, [
                registerDto.username,
                registerDto.password,
                registerDto.phone
            ]);
            return rows[0]?.id;
        }
        catch (error) {
            console.error("Error registering new user:", error);
            throw error;
        }
    }
    async updateUser(updateUser) {
        try {
            const query = `SELECT * FROM UpdateUserInfo($1, $2, $3, $4)`;
            const rows = await this.userRepo.query(query, [
                updateUser.id,
                updateUser.username,
                updateUser.password,
                updateUser.phone
            ]);
            return rows[0]?.affectedrows ?? 0;
        }
        catch (error) {
            console.error("Error updating user:", error);
            throw error;
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserRepository);
//# sourceMappingURL=user.repo.js.map