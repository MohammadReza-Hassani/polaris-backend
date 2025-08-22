import { Controller, Get, Query, NotFoundException, Post, Body, UseGuards, Request } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LocationService } from "@application/services/location.services";
import { locationRequestModel } from "@domain/Models/reqeust/location.request";
import { updateLocationRequestModel } from "@domain/Models/reqeust/updateLocation.request";
import { AuthGuard } from "@nestjs/passport";

@ApiTags('Locations')
@Controller('locations')
export class LocationController {
    constructor(private readonly locationService: LocationService) {}

    // ------------------ JWT-protected endpoints ------------------
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Get('GetUserLocations')
    @ApiOperation({ summary: 'Get user locations from JWT token' })
    @ApiResponse({ status: 200, description: 'User locations found' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async getUserLocations(@Request() req: any) {
        const userId = req.user.userId || req.user.sub;
        const username = req.user.username;

        const userLocations = await this.locationService.getUserLocationByUsername(username);

        if (!userLocations) {
            throw new NotFoundException(`No location was found for userId ${username}`);
        }

        return userLocations;
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Post('AddNewLocation')
    @ApiOperation({ summary: 'Add New Location for logged-in user' })
    @ApiBody({ type: locationRequestModel, description: 'User location' })
    @ApiResponse({ status: 200, description: 'Adding successful' })
    @ApiResponse({ status: 400, description: 'Was not able to add successfully' })
    async AddNewLocation(@Request() req: any, @Body() location: locationRequestModel) {
        const userId = req.user.userId || req.user.sub;
        const username = req.user.username;

        // Pass both userId and username to the service
        const newLocationId = await this.locationService.AddNewLocation(location);

        if (!newLocationId) {
            throw new NotFoundException(`Failed to add location`);
        }

        return newLocationId;
    }

    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @Post('UpdateLocation')
    @ApiOperation({ summary: 'Update Location for logged-in user' })
    @ApiBody({ type: updateLocationRequestModel, description: 'Update location' })
    @ApiResponse({ status: 200, description: 'Updating successful' })
    @ApiResponse({ status: 400, description: 'Was not able to update successfully' })
    async updateLocation(@Request() req: any, @Body() location: updateLocationRequestModel) {
        const userId = req.user.userId || req.user.sub;
        const username = req.user.username;

        const updatedLocationId = await this.locationService.updateLocation(location);

        if (!updatedLocationId) {
            throw new NotFoundException(`Failed to update location`);
        }

        return updatedLocationId;
    }

    // ------------------ Optional non-JWT endpoints ------------------
    @Get('GetUserLocationsByUsername')
    @ApiOperation({ summary: 'Get user locations by username' })
    @ApiQuery({ name: 'username', required: true })
    @ApiResponse({ status: 200, description: 'User found' })
    @ApiResponse({ status: 404, description: 'User not found' })
    async getUserLocationsByUsername(@Query('username') username: string) {
        const userLocations = await this.locationService.getUserLocationByUsername(username);

        if (!userLocations) {
            throw new NotFoundException(`No location was found for username ${username}`);
        }

        return userLocations;
    }

    
}
