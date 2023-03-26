import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Cart } from '../entitys/cart.entity';
import { CartService } from './carts.service';

@Controller('store')
export class CartController {
    constructor(private readonly cartsService: CartService) {}

    @Get('carts')
    async findAll(): Promise<Cart[]> {
        return await this.cartsService.findAll();
    }

    @Get('carts/:id')
    async find(@Param() params: any): Promise<Cart> {
        return await this.cartsService.findOne(params.id);
    }

    @Post('carts')
    async createProductAndCart(@Body() body: Cart): Promise<Cart> {
        return await this.cartsService.addOrUpdateProductCart(body.userId, body);
    }

    @Put('carts/:id')
    async updateProductCart(@Body() body: Cart, @Param() params: any): Promise<Cart> {
        return await this.cartsService.addOrUpdateProductCart(params.id, body);
    }
}

