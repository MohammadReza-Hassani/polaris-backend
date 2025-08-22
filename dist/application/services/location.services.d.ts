import { ILocationRepository } from "src/domain/Interfaces";
import { Location } from '../../domain/Models/Entities';
import { LocationDomainServices } from "src/domain/services";
import { updateLocationRequestModel } from "src/domain/Models/reqeust/updateLocation.request";
import { locationRequestModel } from "src/domain/Models/reqeust/location.request";
export declare class LocationService {
    private readonly locationRepo;
    private readonly locationDomain;
    constructor(locationRepo: ILocationRepository, locationDomain: LocationDomainServices);
    getUserLocationByUsername(username: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    AddNewLocation(NewLocation: locationRequestModel): Promise<number>;
    updateLocation(NewLocation: updateLocationRequestModel): Promise<number>;
}
