import { Location } from "@domain/models/entities";
import { ILocationRepository } from "@domain/Interfaces";
import { updateLocationRequestModel } from "@domain/Models/reqeust/updateLocation.request";
import { locationRequestModel } from "@domain/Models/reqeust/location.request";
export declare class LocationDomainServices {
    private readonly locationRepo;
    constructor(locationRepo: ILocationRepository);
    getUserLocationByUserName(userName: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    AddNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
