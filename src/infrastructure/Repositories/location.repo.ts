import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ILocationRepository } from "@domain/interfaces";
import { Location } from "@domain/models/entities";
import { locationRequestModel } from "@domain/Models/reqeust/location.request";
import { updateLocationRequestModel } from "@domain/Models/reqeust/updateLocation.request";

@Injectable()
export class LocationRepository implements ILocationRepository {
    constructor(
        @InjectRepository(Location)
        private readonly locationRepo: Repository<Location>,
    ) {}

    async getUserLocationByUserName(username: string): Promise<Location[]> {
        try {
            const query = `SELECT * FROM GetUserLocationByUserName($1)`;
            const rows = await this.locationRepo.query(query, [username]);
            return rows;
        } catch (error) {
            console.error("Error fetching location by username:", error);
            throw error;
        }
    }

    async getUserLocationById(userId: number): Promise<Location[]> {
        try {
            const query = `SELECT * FROM GetUserLocationById($1)`;
            const rows = await this.locationRepo.query(query, [userId]);
            return rows;
        } catch (error) {
            console.error("Error fetching location by userId:", error);
            throw error;
        }
    }

    async addNewLocation(location: locationRequestModel): Promise<number> {
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
            return rows[0]?.newlocationid; // PostgreSQL lowercases returned field names
        } catch (error) {
            console.error("Error adding new location:", error);
            throw error;
        }
    }

    async updateLocation(location: updateLocationRequestModel): Promise<number> {
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
        } catch (error) {
            console.error("Error updating location:", error);
            throw error;
        }
    }
}
