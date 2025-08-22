import { Repository } from "typeorm";
import { ILocationRepository } from "@domain/interfaces";
import { Location } from "@domain/models/entities";
import { locationRequestModel } from "@domain/models/reqeust/location.request";
import { updateLocationRequestModel } from "@domain/models/reqeust/updateLocation.request";
export declare class LocationRepository implements ILocationRepository {
    private readonly locationRepo;
    constructor(locationRepo: Repository<Location>);
    getUserLocationByUserName(username: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    addNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
