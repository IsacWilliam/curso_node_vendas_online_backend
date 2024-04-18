import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { stringify } from 'querystring';

@Controller('user')
export class UserController {
    
    @Post()
    async createUser(@Body() createUser: CreateUserDto){
        return {
            ...createUser,
            password: undefined
        };
    }

    @Get()
    async getAllUsers(){
        return JSON.stringify({ test: 'abc'});
    }
}
