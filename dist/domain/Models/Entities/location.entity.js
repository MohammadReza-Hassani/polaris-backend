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
exports.Location = void 0;
const typeorm_1 = require("typeorm");
let Location = class Location {
    id;
    x;
    y;
    userId;
    Time;
    PlmnId;
    tacLac;
    power;
    quality;
};
exports.Location = Location;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Location.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Location.prototype, "x", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], Location.prototype, "y", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'userId' }),
    __metadata("design:type", Number)
], Location.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime'),
    __metadata("design:type", Date)
], Location.prototype, "Time", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'PlmnId' }),
    __metadata("design:type", Number)
], Location.prototype, "PlmnId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'tac-lac' }),
    __metadata("design:type", Number)
], Location.prototype, "tacLac", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Location.prototype, "power", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Location.prototype, "quality", void 0);
exports.Location = Location = __decorate([
    (0, typeorm_1.Entity)()
], Location);
//# sourceMappingURL=location.entity.js.map