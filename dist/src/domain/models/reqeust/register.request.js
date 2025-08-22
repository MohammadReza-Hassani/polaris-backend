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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterRequestModel = void 0;
const swagger_1 = require("@nestjs/swagger");
class RegisterRequestModel {
    username;
    password;
    phone;
}
exports.RegisterRequestModel = RegisterRequestModel;
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'john_doe',
        description: 'The desired username',
        required: true,
        minLength: 4,
        maxLength: 20
    }),
    __metadata("design:type", String)
], RegisterRequestModel.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 'securePassword123',
        description: 'The account password',
        required: true,
        minLength: 8
    }),
    __metadata("design:type", String)
], RegisterRequestModel.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '+1234567890',
        description: 'Phone number with country code',
        required: true,
        pattern: '^\\+[1-9]\\d{1,14}$'
    }),
    __metadata("design:type", String)
], RegisterRequestModel.prototype, "phone", void 0);
//# sourceMappingURL=register.request.js.map