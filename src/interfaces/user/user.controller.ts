import {Controller, Get, Query, NotFoundException, Post, Body, UseGuards} from '@nestjs/common';
import {ApiBearerAuth, ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {UserService} from "@application/services/user.services";
import {LoginRequestModel} from "@domain/Models/reqeust/login.request";
import {RegisterRequestModel} from "@domain/Models/reqeust/register.request";
import {updateUserRequestModel} from "@domain/Models/reqeust/updateUser.request";
import {AuthGuard} from "@nestjs/passport";

@ApiTags('Users') // Optional for Swagger documentation
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: 'Get user by username' }) // Swagger docs
    @ApiQuery({ name: 'username', required: true }) // Swagger docs
    @ApiResponse({ status: 200, description: 'User found' }) // Swagger docs
    @ApiResponse({ status: 404, description: 'User not found' }) // Swagger docs
    async getUserByUsername(@Query('username') username: string) {
        const user = await this.userService.getUserByUsername(username);

        if (!user) {
            throw new NotFoundException(`User with username ${username} not found`);
        }

        return user;
    }

    @Post('login')
    @ApiOperation({ summary: 'Authenticate user' }) // Swagger docs
    @ApiBody({
        type: LoginRequestModel,
        description: 'User credentials',
    })
    @ApiResponse({ status: 200, description: 'Login successful' }) // Swagger docs
    @ApiResponse({ status: 400, description: 'Invalid credentials' }) // Swagger docs
    @ApiResponse({ status: 404, description: 'User not found' }) // Swagger docs
    async userLogin(@Body() credentials: LoginRequestModel):Promise<any> {
        const user = await this.userService.userLogin(credentials.username, credentials.password);

        if (!user) {
            throw new NotFoundException(`Invalid credentials`);
        }

        return user;
    }


    @Post('RegisterNewUser')
    @ApiOperation({ summary: 'Add New User' }) // Swagger docs
    @ApiBody({
        type: RegisterRequestModel,
        description: 'Register New User',
    })
    @ApiResponse({ status: 200, description: 'Adding successful' }) // Swagger docs
    @ApiResponse({ status: 400, description: 'was not able to add successfully' }) // Swagger docs
    async registerNewUser(@Body() user: RegisterRequestModel):Promise<number> {
        const newUserId = await this.userService.registerNewUser(user);

        if (!newUserId) {
            throw new NotFoundException(`failed to add`);
        }

        return newUserId;
    }



    @Post('updateUser')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    @ApiOperation({ summary: 'update User' }) // Swagger docs
    @ApiBody({
        type: updateUserRequestModel,
        description: 'update User',
    })
    @ApiResponse({ status: 200, description: 'updating successful' }) // Swagger docs
    @ApiResponse({ status: 400, description: 'was not able to update successfully' }) // Swagger docs
    async updateUser(@Body() updateUser: updateUserRequestModel):Promise<number> {
        const newUserId = await this.userService.updateUser(updateUser);

        if (!newUserId) {
            throw new NotFoundException(`failed to update`);
        }

        return newUserId;
    }
    
    
    
    
    
}