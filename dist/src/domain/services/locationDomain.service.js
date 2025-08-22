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
exports.LocationDomainServices = void 0;
const common_1 = require("@nestjs/common");
const location_repo_interface_1 = require("../Interfaces/location.repo.interface");
let LocationDomainServices = class LocationDomainServices {
    locationRepo;
    constructor(locationRepo) {
        this.locationRepo = locationRepo;
    }
    async getUserLocationByUserName(userName) {
        const userLocations = await this.locationRepo.getUserLocationByUserName(userName);
        if (!userLocations) {
            throw new Error("No Location Exist.");
        }
        return userLocations;
    }
    async getUserLocationById(userId) {
        const userLocations = await this.locationRepo.getUserLocationById(userId);
        if (!userLocations) {
            throw new Error("No Location Exist.");
        }
        return userLocations;
    }
    async AddNewLocation(location) {
        const NewLocationsId = await this.locationRepo.addNewLocation(location);
        if (!NewLocationsId) {
            throw new Error("No Location Exist.");
        }
        return NewLocationsId;
    }
    async updateLocation(location) {
        const NewLocationsId = await this.locationRepo.updateLocation(location);
        if (!NewLocationsId) {
            throw new Error("No Location Exist.");
        }
        return NewLocationsId;
    }
};
exports.LocationDomainServices = LocationDomainServices;
exports.LocationDomainServices = LocationDomainServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(location_repo_interface_1.location_interface)),
    __metadata("design:paramtypes", [Object])
], LocationDomainServices);
//# sourceMappingURL=locationDomain.service.js.map