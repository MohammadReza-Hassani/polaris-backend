import { LocationService } from "src/application/services/location.services";
import { locationRequestModel } from "src/domain/Models/reqeust/location.request";
import { updateLocationRequestModel } from "src/domain/Models/reqeust/updateLocation.request";
export declare class LocationController {
    private readonly locationService;
    constructor(locationService: LocationService);
    getUserLocations(req: any): Promise<import("../../domain/Models/Entities").Location[]>;
    AddNewLocation(req: any, location: locationRequestModel): Promise<number>;
    updateLocation(req: any, location: updateLocationRequestModel): Promise<number>;
    getUserLocationsByUsername(username: string): Promise<import("../../domain/Models/Entities").Location[]>;
}
