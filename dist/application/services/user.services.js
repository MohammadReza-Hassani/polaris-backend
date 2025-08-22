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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_repo_interface_1 = require("../../domain/Interfaces/user.repo.interface");
const services_1 = require("../../domain/services");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcrypt");
const auth_service_1 = require("../../auth.service");
let UserService = class UserService {
    userRepo;
    userDomain;
    jwtService;
    authService;
    constructor(userRepo, userDomain, jwtService, authService) {
        this.userRepo = userRepo;
        this.userDomain = userDomain;
        this.jwtService = jwtService;
        this.authService = authService;
    }
    async getUserByUsername(username) {
        return await this.userDomain.getUserByUsername(username);
    }
    async userLogin(username, password) {
        const user = await this.userDomain.UserLogin(username);
        if (!user) {
            return null;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return null;
        }
        const payload = { username: user.username, sub: user.id };
        const token = await this.authService.generateToken(payload);
        return {
            id: user.id,
            username: user.username,
            access_token: token,
        };
    }
    async registerNewUser(register) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(register.password, saltRounds);
        register.password = hashedPassword;
        const newUserId = await this.userDomain.registerNewUser(register);
        const payload = { username: register.username, sub: newUserId };
        const token = await this.authService.generateToken(payload);
        return {
            id: newUserId,
            username: register.username,
            access_token: token,
        };
    }
    async updateUser(updateUser) {
        return await this.userDomain.updateUser(updateUser);
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_repo_interface_1.user_interface)),
    __metadata("design:paramtypes", [Object, services_1.UserDomainServices,
        jwt_1.JwtService,
        auth_service_1.AuthService])
], UserService);
//# sourceMappingURL=user.services.js.map