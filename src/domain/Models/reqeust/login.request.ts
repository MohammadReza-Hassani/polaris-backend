import {ApiProperty} from '@nestjs/swagger';

export class LoginRequestModel {
    @ApiProperty({
        example: 'john_doe',
        description: 'The username for login',
        required: true
    })
    username: string;

    @ApiProperty({
        example: 'securePassword123',
        description: 'The password for login',
        required: true,
        minLength: 8
    })
    password: string;
}