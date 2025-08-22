import {Module} from "@nestjs/common";
import {LocationController} from "./location.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Location} from "../../domain/Models/Entities";
import {LocationService} from "../../application";
import {location_interface} from "../../domain/Interfaces/location.repo.interface";
import {LocationDomainServices} from "src/domain/services";
import {LocationRepository} from "../../infrastructure/Repositories/location.repo";


@Module({
    imports: [
        TypeOrmModule.forFeature([LocationRepository, Location]),
    ],
    controllers: [LocationController],
    providers: [
        LocationService,
        LocationRepository,
        {
            provide: location_interface,
            useClass:  LocationRepository
        },
        LocationDomainServices,
    ], // Add UserService here
})
export class LocationModule {}
