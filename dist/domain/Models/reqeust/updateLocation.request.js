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
exports.updateLocationRequestModel = void 0;
const swagger_1 = require("@nestjs/swagger");
class updateLocationRequestModel {
    id;
    x;
    y;
    userId;
    plmnId;
    tac_lac;
    power;
    quality;
}
exports.updateLocationRequestModel = updateLocationRequestModel;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 80, description: 'location Id' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12.345, description: 'X coordinate' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "x", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 56.789, description: 'Y coordinate' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "y", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'User ID' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123, description: 'PLMN ID' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "plmnId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'tac_lac',
        example: 456,
        description: 'TAC-LAC identifier'
    }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "tac_lac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 80, description: 'Signal power (0-100)' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "power", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 90, description: 'Signal quality (0-100)' }),
    __metadata("design:type", Number)
], updateLocationRequestModel.prototype, "quality", void 0);
//# sourceMappingURL=updateLocation.request.js.map