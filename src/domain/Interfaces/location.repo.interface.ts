import {Location} from "src/domain//models/entities";
import {updateLocationRequestModel} from "src/domain//Models/reqeust/updateLocation.request";
import {locationRequestModel} from "src/domain//Models/reqeust/location.request";

export const location_interface = 'location_interface'


export interface ILocationRepository {
    getUserLocationById(id: number): Promise<Location[]>;
    
    getUserLocationByUserName(userName: string): Promise<Location[]>;
    
    addNewLocation(location: locationRequestModel): Promise<number>;

    updateLocation(location: updateLocationRequestModel): Promise<number>;
    
}
