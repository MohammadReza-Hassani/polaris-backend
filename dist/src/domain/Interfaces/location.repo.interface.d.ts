import { Location } from "src/domain/models/entities";
import { updateLocationRequestModel } from "src/domain/models/reqeust/updateLocation.request";
import { locationRequestModel } from "src/domain/models/reqeust/location.request";
export declare const location_interface = "location_interface";
export interface ILocationRepository {
    getUserLocationById(id: number): Promise<Location[]>;
    getUserLocationByUserName(userName: string): Promise<Location[]>;
    addNewLocation(location: locationRequestModel): Promise<number>;
    updateLocation(location: updateLocationRequestModel): Promise<number>;
}
