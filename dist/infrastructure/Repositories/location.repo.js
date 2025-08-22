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
exports.LocationRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Entities_1 = require("../../domain/Models/Entities");
let LocationRepository = class LocationRepository {
    locationRepo;
    constructor(locationRepo) {
        this.locationRepo = locationRepo;
    }
    async getUserLocationByUserName(username) {
        try {
            const query = `SELECT * FROM GetUserLocationByUserName($1)`;
            const rows = await this.locationRepo.query(query, [username]);
            return rows;
        }
        catch (error) {
            console.error("Error fetching location by username:", error);
            throw error;
        }
    }
    async getUserLocationById(userId) {
        try {
            const query = `SELECT * FROM GetUserLocationById($1)`;
            const rows = await this.locationRepo.query(query, [userId]);
            return rows;
        }
        catch (error) {
            console.error("Error fetching location by userId:", error);
            throw error;
        }
    }
    async addNewLocation(location) {
        try {
            const query = `
                SELECT * FROM AddNewUserLocation(
                    $1, $2, $3, $4, $5, $6, $7, $8, $9, $10,
                    $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
                    $21, $22, $23, $24, $25, $26
                )
            `;
            const params = [
                location.username,
                location.lat,
                location.lng,
                location.timeMillis,
                location.radioTech,
                location.generation,
                location.pLMN,
                location.mcc,
                location.mnc,
                location.lac,
                location.rac,
                location.tac,
                location.tacLacRac,
                location.cellId,
                location.arfcn,
                location.uarfcn,
                location.earfcn,
                location.nrarfcn,
                location.band,
                location.downlinkFreqHz,
                location.rSRP,
                location.rSRQ,
                location.rSCP,
                location.ecNo,
                location.rxLev,
                location.sinr,
            ];
            const rows = await this.locationRepo.query(query, params);
            return rows[0]?.newlocationid;
        }
        catch (error) {
            console.error("Error adding new location:", error);
            throw error;
        }
    }
    async updateLocation(location) {
        try {
            const query = `
                SELECT * FROM UpdateLocation($1, $2, $3, $4, $5, $6, $7, $8)
            `;
            const params = [
                location.id,
                location.x,
                location.y,
                location.userId,
                location.plmnId,
                location.tac_lac,
                location.power,
                location.quality
            ];
            const rows = await this.locationRepo.query(query, params);
            return rows[0]?.affectedrows ?? 0;
        }
        catch (error) {
            console.error("Error updating location:", error);
            throw error;
        }
    }
};
exports.LocationRepository = LocationRepository;
exports.LocationRepository = LocationRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Entities_1.Location)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocationRepository);
//# sourceMappingURL=location.repo.js.map