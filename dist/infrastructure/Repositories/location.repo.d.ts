import { Repository } from "typeorm";
import { ILocationRepository } from "../../domain/Interfaces";
import { Location } from "../../domain/Models/Entities";
import { locationRequestModel } from "src/domain/Models/reqeust/location.request";
import { updateLocationRequestModel } from "src/domain/Models/reqeust/updateLocation.request";
export declare class LocationRepository implements ILocationRepository {
    private readonly locationRepo;
    constructor(locationRepo: Repository<Location>);
    getUserLocationByUserName(username: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    addNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
