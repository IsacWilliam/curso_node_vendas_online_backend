import { Controller, Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { ReturnCategory } from './dtos/return-category.dto';
import { CategoryService } from './category.service';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { CreateCategory } from './dtos/create-category.dto';
import { CategoryEntity } from './entities/category.entity';

@Roles(UserType.ADMIN, UserType.USER)
@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService){}

    @Get()
    async findAllCategories(): Promise<ReturnCategory[]> {
        return this.categoryService.findAllCategories();
    }

    //@Roles(UserType.ADMIN)
    @UsePipes(ValidationPipe)
    @Post()
    async createCategory(
        @Body() createCategory: CreateCategory
    ): Promise<CategoryEntity> {
        return this.categoryService.createCategory(createCategory);
    }
}
