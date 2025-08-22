import { Location } from "src/domain/models/entities";
import { ILocationRepository } from "src/domain/Interfaces";
import { updateLocationRequestModel } from "src/domain/models/reqeust/updateLocation.request";
import { locationRequestModel } from "src/domain/models/reqeust/location.request";
export declare class LocationDomainServices {
    private readonly locationRepo;
    constructor(locationRepo: ILocationRepository);
    getUserLocationByUserName(userName: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    AddNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
