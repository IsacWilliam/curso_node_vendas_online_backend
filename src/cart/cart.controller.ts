import { Body, Controller, Delete, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { InsertCartDTO } from './dtos/insert-cart.dto';
import { CartService } from './cart.service';
import { UserId } from 'src/decorators/user-id.decorator';
import { ReturnCartDTO } from './dtos/return-cart.dto';
import { DeleteResult } from 'typeorm';

@Roles(UserType.ADMIN, UserType.USER)
@Controller('cart')
export class CartController {
    constructor(private readonly cartService: CartService){}

    @UsePipes(ValidationPipe)
    @Post()
    async createCart(
        @Body() inserCart: InsertCartDTO,
        @UserId() userId: number
    ): Promise<ReturnCartDTO>{
        return new ReturnCartDTO (await this.cartService.insertProductInCart(inserCart,userId));
    }

    @Get()
    async findCartByUserId(@UserId() userId: number): Promise<ReturnCartDTO> {
        return new ReturnCartDTO(await this.cartService.findCartByUserId(userId, true));
    }

    @Delete()
    async clearCart(@UserId() UserId: number): Promise<DeleteResult> {
        return this.cartService.clearCart(UserId);
    }
}
