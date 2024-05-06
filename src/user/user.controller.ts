import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.entity';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UpdatePasswordDTO } from './dtos/update-password.dto';
import { UserId } from '../decorators/user-id.decorator';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from './enum/user-type.enum';

@Controller('user')
export class UserController {
    
    constructor (private readonly userService: UserService){}

    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<UserEntity>{
        return this.userService.createUser(createUser);
    }

    @Roles(UserType.ADMIN, UserType.USER)
    @Get()
    async getAllUser():Promise<ReturnUserDto[]>{
        return (await this.userService.getAllUser()).map(
            (UserEntity) => new ReturnUserDto(UserEntity)
        );
    }

    @Roles(UserType.ADMIN)
    @Get('/:userId')
    async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
        return new ReturnUserDto(await this.userService.getUserByIdUsingRelations(userId));
    }

    @Roles(UserType.ADMIN, UserType.USER)
    @Patch()
    @UsePipes(ValidationPipe)
    async updatePasswordUser(
            @Body() updatePasswordDTO: UpdatePasswordDTO,
            @UserId() userId: number
        ): Promise<UserEntity> {
        return this.userService.updatePasswordUser(updatePasswordDTO, userId);
    }
}
