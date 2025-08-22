import {ApiProperty} from '@nestjs/swagger';

export class updateUserRequestModel {
    @ApiProperty({
        example: '1',
        description: 'id',
        required: true,
        minLength: 4,
        maxLength: 20
    })
    id: number;
    
    @ApiProperty({
        example: 'john_doe',
        description: 'The desired username',
        required: true,
        minLength: 4,
        maxLength: 20
    })
    username: string;

    @ApiProperty({
        example: 'securePassword123',
        description: 'The account password',
        required: true,
        minLength: 8
    })
    password: string;

    @ApiProperty({
        example: '+1234567890',
        description: 'Phone number with country code',
        required: true,
        pattern: '^\\+[1-9]\\d{1,14}$' // E.164 format
    })
    phone: string;
}