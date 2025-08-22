import {ApiProperty} from '@nestjs/swagger';

export class updateLocationRequestModel {

    @ApiProperty({ example: 80, description: 'location Id' })
    id: number;


    @ApiProperty({ example: 12.345, description: 'X coordinate' })
    x: number;

    @ApiProperty({ example: 56.789, description: 'Y coordinate' })
    y: number;

    @ApiProperty({ example: 1, description: 'User ID' })
    userId: number;

    @ApiProperty({ example: 123, description: 'PLMN ID' })
    plmnId: number;

    @ApiProperty({
        name: 'tac_lac', // Maps to your DB column
        example: 456,
        description: 'TAC-LAC identifier'
    })
    tac_lac: number;

    @ApiProperty({ example: 80, description: 'Signal power (0-100)' })
    power: number;

    @ApiProperty({ example: 90, description: 'Signal quality (0-100)' })
    quality: number;
}