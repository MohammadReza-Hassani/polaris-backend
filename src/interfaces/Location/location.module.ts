import {Module} from "@nestjs/common";
import {LocationController} from "./location.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Location} from "src/domain/models/entities";
import {LocationService} from "src/application/index";
import {location_interface} from "src/domain/interfaces/location.repo.interface";
import {LocationDomainServices} from "src/domain/services";
import {LocationRepository} from "src/infrastructure/repositories/location.repo";


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
