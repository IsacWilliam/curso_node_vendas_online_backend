import { Controller, Get, Post, UsePipes, ValidationPipe, Body, Delete, Param, Put} from '@nestjs/common';
import { Roles } from '../decorators/roles.decorator';
import { UserType } from '../user/enum/user-type.enum';
import { ReturnProduct } from './dtos/return-product.dto';
import { ProductService } from './product.service';
import { ProductEntity } from './entities/product.entity';
import { CreateProductDTO } from './dtos/create-product.dto';
import { DeleteResult } from 'typeorm';
import { UpdateProductDTO } from './dtos/update-product.dto';

@Roles(UserType.ADMIN, UserType.USER)
@Controller('product')
export class ProductController {
    constructor(private readonly productService: ProductService) {}
    
    @Get()
    async findAll(): Promise<ReturnProduct[]> {
        return (await this.productService.findAll()).map(
            (product) => new ReturnProduct(product)
        )
    }

    @Roles(UserType.ADMIN)
    @UsePipes(ValidationPipe)
    @Post()
    async createProduct(@Body() createProduct: CreateProductDTO): Promise<ProductEntity> {
        return this.productService.createProduct(createProduct);
    }

    @Roles(UserType.ADMIN)
    @Delete()
    async deleteProduct(@Param('productId') productId: number): Promise<DeleteResult> {
        return this.productService.deleteProduct(productId);
    }

    @Roles(UserType.ADMIN)
    @UsePipes(ValidationPipe)
    @Put(':/productId')
    async updateProduct(
        @Body() updateProduct: UpdateProductDTO,
        @Param('productId') productId: number
    ): Promise<ProductEntity> {
        return this.productService.updateProduct(updateProduct, productId);
    }
}