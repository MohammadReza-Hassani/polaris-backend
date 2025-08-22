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
exports.UserDomainServices = void 0;
const common_1 = require("@nestjs/common");
const Entities_1 = require("../Models/Entities");
const user_repo_interface_1 = require("../Interfaces/user.repo.interface");
let UserDomainServices = class UserDomainServices {
    userRepo;
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async RegisterUser(user) {
        const existingUser = await this.userRepo.findUser(user);
        if (existingUser) {
            throw new Error("User name already taken.");
        }
        let newUser = new Entities_1.User();
        Object.assign(newUser, user);
        let result = await this.userRepo.save(newUser);
        return result;
    }
    async getUserByUsername(username) {
        const existingUser = await this.userRepo.getUserByUsername(username);
        if (!existingUser) {
            throw new Error("User Does not exist.");
        }
        return existingUser;
    }
    async UserLogin(userName) {
        const existingUser = await this.userRepo.userLogin(userName);
        if (!existingUser) {
            throw new Error("User Does not exist.");
        }
        return existingUser;
    }
    async registerNewUser(register) {
        return await this.userRepo.registerNewUser(register);
    }
    async updateUser(updateUser) {
        return await this.userRepo.updateUser(updateUser);
    }
};
exports.UserDomainServices = UserDomainServices;
exports.UserDomainServices = UserDomainServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_repo_interface_1.user_interface)),
    __metadata("design:paramtypes", [Object])
], UserDomainServices);
//# sourceMappingURL=userDomain.service.js.map