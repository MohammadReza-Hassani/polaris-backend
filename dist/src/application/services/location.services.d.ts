import { ILocationRepository } from "@domain/Interfaces";
import { Location } from '@domain/models/entities';
import { LocationDomainServices } from "@domain/services";
import { updateLocationRequestModel } from "@domain/models/reqeust/updateLocation.request";
import { locationRequestModel } from "@domain/models/reqeust/location.request";
export declare class LocationService {
    private readonly locationRepo;
    private readonly locationDomain;
    constructor(locationRepo: ILocationRepository, locationDomain: LocationDomainServices);
    getUserLocationByUsername(username: string): Promise<Location[]>;
    getUserLocationById(userId: number): Promise<Location[]>;
    AddNewLocation(NewLocation: locationRequestModel): Promise<number>;
    updateLocation(NewLocation: updateLocationRequestModel): Promise<number>;
}
