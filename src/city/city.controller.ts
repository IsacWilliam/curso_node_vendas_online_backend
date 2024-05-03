import { Controller, Get, Param } from '@nestjs/common';
import { CityService } from './city.service';
import { CityEntity } from './entities/city.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';

@Roles(UserType.ADMIN, UserType.USER)
@Controller('city')
export class CityController {
    constructor(private readonly cityService: CityService){}

    @Get('/:stateId')
    async getAllCitiesByStateId(
        @Param('stateId') stateId: number,
    ): Promise<CityEntity[]>{
        return this.cityService.getAllCitiesByStateId(stateId);
    }
}
