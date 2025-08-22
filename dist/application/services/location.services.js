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
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const location_repo_interface_1 = require("../../domain/Interfaces/location.repo.interface");
const services_1 = require("../../domain/services");
let LocationService = class LocationService {
    locationRepo;
    locationDomain;
    constructor(locationRepo, locationDomain) {
        this.locationRepo = locationRepo;
        this.locationDomain = locationDomain;
    }
    async getUserLocationByUsername(username) {
        return await this.locationDomain.getUserLocationByUserName(username);
    }
    async getUserLocationById(userId) {
        return await this.locationDomain.getUserLocationById(userId);
    }
    async AddNewLocation(NewLocation) {
        return await this.locationDomain.AddNewLocation(NewLocation);
    }
    async updateLocation(NewLocation) {
        return await this.locationDomain.updateLocation(NewLocation);
    }
};
exports.LocationService = LocationService;
exports.LocationService = LocationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(location_repo_interface_1.location_interface)),
    __metadata("design:paramtypes", [Object, services_1.LocationDomainServices])
], LocationService);
//# sourceMappingURL=location.services.js.map