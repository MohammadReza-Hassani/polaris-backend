import {Inject, Injectable} from "@nestjs/common";
import {Location} from "../Models/Entities";
import {ILocationRepository} from "src/domain/Interfaces";
import {location_interface} from "src/domain/Interfaces/location.repo.interface";
import {updateLocationRequestModel} from "src/domain/Models/reqeust/updateLocation.request";
import {locationRequestModel} from "src/domain/Models/reqeust/location.request";

@Injectable()
export class LocationDomainServices {
    constructor(
        @Inject(location_interface)
        private readonly locationRepo: ILocationRepository
    ) {
    }

    async getUserLocationByUserName(userName: string) : Promise<Location[]> {

        const userLocations : Location[] = await this.locationRepo.getUserLocationByUserName(userName)

        if(!userLocations) {
            throw new Error("No Location Exist.")
        }

        return userLocations
    }

    async getUserLocationById(userId: number) : Promise<Location[]> {

        const userLocations : Location[] = await this.locationRepo.getUserLocationById(userId)

        if(!userLocations) {
            throw new Error("No Location Exist.")
        }

        return userLocations
    }

    async AddNewLocation(location: locationRequestModel) : Promise<number> {

        const NewLocationsId  = await this.locationRepo.addNewLocation(location)

        if(!NewLocationsId) {
            throw new Error("No Location Exist.")
        }

        return NewLocationsId
    }


    async updateLocation(location: updateLocationRequestModel) : Promise<number> {

        const NewLocationsId  = await this.locationRepo.updateLocation(location)

        if(!NewLocationsId) {
            throw new Error("No Location Exist.")
        }

        return NewLocationsId
    }
    
}