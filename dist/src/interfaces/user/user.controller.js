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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const user_services_1 = require("../../application/services/user.services");
const login_request_1 = require("../../domain/Models/reqeust/login.request");
const register_request_1 = require("../../domain/Models/reqeust/register.request");
const updateUser_request_1 = require("../../domain/Models/reqeust/updateUser.request");
const passport_1 = require("@nestjs/passport");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async getUserByUsername(username) {
        const user = await this.userService.getUserByUsername(username);
        if (!user) {
            throw new common_1.NotFoundException(`User with username ${username} not found`);
        }
        return user;
    }
    async userLogin(credentials) {
        const user = await this.userService.userLogin(credentials.username, credentials.password);
        if (!user) {
            throw new common_1.NotFoundException(`Invalid credentials`);
        }
        return user;
    }
    async registerNewUser(user) {
        const newUserId = await this.userService.registerNewUser(user);
        if (!newUserId) {
            throw new common_1.NotFoundException(`failed to add`);
        }
        return newUserId;
    }
    async updateUser(updateUser) {
        const newUserId = await this.userService.updateUser(updateUser);
        if (!newUserId) {
            throw new common_1.NotFoundException(`failed to update`);
        }
        return newUserId;
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get user by username' }),
    (0, swagger_1.ApiQuery)({ name: 'username', required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUserByUsername", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, swagger_1.ApiOperation)({ summary: 'Authenticate user' }),
    (0, swagger_1.ApiBody)({
        type: login_request_1.LoginRequestModel,
        description: 'User credentials',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Login successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Invalid credentials' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_request_1.LoginRequestModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userLogin", null);
__decorate([
    (0, common_1.Post)('RegisterNewUser'),
    (0, swagger_1.ApiOperation)({ summary: 'Add New User' }),
    (0, swagger_1.ApiBody)({
        type: register_request_1.RegisterRequestModel,
        description: 'Register New User',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Adding successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'was not able to add successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_request_1.RegisterRequestModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "registerNewUser", null);
__decorate([
    (0, common_1.Post)('updateUser'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'update User' }),
    (0, swagger_1.ApiBody)({
        type: updateUser_request_1.updateUserRequestModel,
        description: 'update User',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'updating successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'was not able to update successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [updateUser_request_1.updateUserRequestModel]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateUser", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_services_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map