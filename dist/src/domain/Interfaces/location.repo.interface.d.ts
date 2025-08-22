import { Location } from "@domain/models/entities";
import { updateLocationRequestModel } from "@domain/models/reqeust/updateLocation.request";
import { locationRequestModel } from "@domain/models/reqeust/location.request";
export declare const location_interface = "location_interface";
export interface ILocationRepository {
    getUserLocationById(id: number): Promise<Location[]>;
    getUserLocationByUserName(userName: string): Promise<Location[]>;
    addNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
