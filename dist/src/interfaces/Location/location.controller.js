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
exports.LocationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const location_services_1 = require("../../application/services/location.services");
const location_request_1 = require("../../domain/models/reqeust/location.request");
const updateLocation_request_1 = require("../../domain/models/reqeust/updateLocation.request");
const passport_1 = require("@nestjs/passport");
let LocationController = class LocationController {
    locationService;
    constructor(locationService) {
        this.locationService = locationService;
    }
    async getUserLocations(req) {
        const userId = req.user.userId || req.user.sub;
        const username = req.user.username;
        const userLocations = await this.locationService.getUserLocationByUsername(username);
        if (!userLocations) {
            throw new common_1.NotFoundException(`No location was found for userId ${username}`);
        }
        return userLocations;
    }
    async AddNewLocation(req, location) {
        const userId = req.user.userId || req.user.sub;
        const username = req.user.username;
        const newLocationId = await this.locationService.AddNewLocation(location);
        if (!newLocationId) {
            throw new common_1.NotFoundException(`Failed to add location`);
        }
        return newLocationId;
    }
    async updateLocation(req, location) {
        const userId = req.user.userId || req.user.sub;
        const username = req.user.username;
        const updatedLocationId = await this.locationService.updateLocation(location);
        if (!updatedLocationId) {
            throw new common_1.NotFoundException(`Failed to update location`);
        }
        return updatedLocationId;
    }
    async getUserLocationsByUsername(username) {
        const userLocations = await this.locationService.getUserLocationByUsername(username);
        if (!userLocations) {
            throw new common_1.NotFoundException(`No location was found for username ${username}`);
        }
        return userLocations;
    }
};
exports.LocationController = LocationController;
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Get)('GetUserLocations'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user locations from JWT token' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User locations found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getUserLocations", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('AddNewLocation'),
    (0, swagger_1.ApiOperation)({ summary: 'Add New Location for logged-in user' }),
    (0, swagger_1.ApiBody)({ type: location_request_1.locationRequestModel, description: 'User location' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Adding successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Was not able to add successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, location_request_1.locationRequestModel]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "AddNewLocation", null);
__decorate([
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Post)('UpdateLocation'),
    (0, swagger_1.ApiOperation)({ summary: 'Update Location for logged-in user' }),
    (0, swagger_1.ApiBody)({ type: updateLocation_request_1.updateLocationRequestModel, description: 'Update location' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Updating successful' }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Was not able to update successfully' }),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, updateLocation_request_1.updateLocationRequestModel]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "updateLocation", null);
__decorate([
    (0, common_1.Get)('GetUserLocationsByUsername'),
    (0, swagger_1.ApiOperation)({ summary: 'Get user locations by username' }),
    (0, swagger_1.ApiQuery)({ name: 'username', required: true }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User found' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LocationController.prototype, "getUserLocationsByUsername", null);
exports.LocationController = LocationController = __decorate([
    (0, swagger_1.ApiTags)('Locations'),
    (0, common_1.Controller)('locations'),
    __metadata("design:paramtypes", [location_services_1.LocationService])
], LocationController);
//# sourceMappingURL=location.controller.js.map