import { Location } from "../Models/Entities";
import { ILocationRepository } from "src/domain/Interfaces";
import { updateLocationRequestModel } from "src/domain/Models/reqeust/updateLocation.request";
import { locationRequestModel } from "src/domain/Models/reqeust/location.request";
export declare class LocationDomainServices {
    private readonly locationRepo;
    constructor(locationRepo: ILocationRepository);
    getUserLocationByUserName(userName: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    AddNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
