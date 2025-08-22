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
exports.locationRequestModel = void 0;
const swagger_1 = require("@nestjs/swagger");
class locationRequestModel {
    username;
    lat;
    lng;
    timeMillis;
    radioTech;
    generation;
    pLMN;
    mcc;
    mnc;
    lac;
    rac;
    tac;
    tacLacRac;
    cellId;
    arfcn;
    uarfcn;
    earfcn;
    nrarfcn;
    band;
    downlinkFreqHz;
    rSRP;
    rSRQ;
    rSCP;
    ecNo;
    rxLev;
    sinr;
}
exports.locationRequestModel = locationRequestModel;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john_doe', description: 'Username of the user' }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12.345, description: 'Latitude' }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "lat", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 56.789, description: 'Longitude' }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "lng", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1692625200000, description: 'Epoch time in milliseconds' }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "timeMillis", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'LTE', description: 'Radio technology (e.g., LTE, NR)' }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "radioTech", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '4G', description: 'Network generation (e.g., 2G, 3G, 4G, 5G)', required: false }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "generation", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '310260', description: 'PLMN (Public Land Mobile Network)', required: false }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "pLMN", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '310', description: 'Mobile Country Code (MCC)', required: false }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "mcc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '260', description: 'Mobile Network Code (MNC)', required: false }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "mnc", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 12345, description: 'Location Area Code (LAC)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "lac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 10, description: 'Routing Area Code (RAC)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "rac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 6789, description: 'Tracking Area Code (TAC)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "tac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '123-456-789', description: 'Combined TAC/LAC/RAC identifier', required: false }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "tacLacRac", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 987654321, description: 'Cell ID', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "cellId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123, description: 'ARFCN (Absolute Radio Frequency Channel Number)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "arfcn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 456, description: 'UARFCN (UMTS channel number)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "uarfcn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 789, description: 'EARFCN (LTE channel number)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "earfcn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 123456, description: 'NRARFCN (5G channel number)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "nrarfcn", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'B3', description: 'Frequency band', required: false }),
    __metadata("design:type", String)
], locationRequestModel.prototype, "band", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1805000000, description: 'Downlink frequency in Hz', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "downlinkFreqHz", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -95, description: 'RSRP (Reference Signal Received Power)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "rSRP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -10, description: 'RSRQ (Reference Signal Received Quality)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "rSRQ", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -85, description: 'RSCP (Received Signal Code Power)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "rSCP", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -5, description: 'Ec/No (UMTS signal quality)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "ecNo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: -70, description: 'RxLev (Received Level)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "rxLev", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, description: 'SINR (Signal-to-Interference-plus-Noise Ratio)', required: false }),
    __metadata("design:type", Number)
], locationRequestModel.prototype, "sinr", void 0);
//# sourceMappingURL=location.request.js.map