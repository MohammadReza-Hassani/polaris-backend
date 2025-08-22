import {Inject, Injectable} from "@nestjs/common";
import {ILocationRepository} from "@domain/Interfaces";
import {location_interface} from "@domain/Interfaces/location.repo.interface";
import {Location} from '@domain/models/entities';
import {LocationDomainServices} from "@domain/services";
import {updateLocationRequestModel} from "@domain/Models/reqeust/updateLocation.request";
import {locationRequestModel} from "@domain/Models/reqeust/location.request";


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