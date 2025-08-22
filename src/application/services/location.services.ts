import {Inject, Injectable} from "@nestjs/common";
import {ILocationRepository} from "src/domain/Interfaces";
import {location_interface} from "src/domain/Interfaces/location.repo.interface";
import {Location} from '../../domain/Models/Entities';
import {LocationDomainServices} from "src/domain/services";
import {updateLocationRequestModel} from "src/domain/Models/reqeust/updateLocation.request";
import {locationRequestModel} from "src/domain/Models/reqeust/location.request";


@Injectable()
export class LocationService {
    constructor(
        @Inject(location_interface)
        private readonly locationRepo: ILocationRepository,
        private readonly locationDomain: LocationDomainServices,
    ){}
    

    async getUserLocationByUsername(username:string): Promise<Location[]>{
        return await this.locationDomain.getUserLocationByUserName(username)
    }

    async getUserLocationById(userId:number): Promise<Location[]>{
        return await this.locationDomain.getUserLocationById(userId)
    }


    async AddNewLocation(NewLocation:locationRequestModel): Promise<number>{
        return await this.locationDomain.AddNewLocation(NewLocation)
    }

    async updateLocation(NewLocation:updateLocationRequestModel): Promise<number>{
        return await this.locationDomain.updateLocation(NewLocation)
    }
    
}