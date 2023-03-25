import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Cart } from 'src/entitys/cart.entity';
import { CartService } from './carts.service';

@Controller('store')
export class CartController {
    constructor(private readonly cartsService: CartService) {}

    @Get('carts')
    async findAll(): Promise<Cart[]> {
        return this.cartsService.findAll();
    }

    @Get('carts/:id')
    async find(@Param() params: any): Promise<Cart> {
        return this.cartsService.findOne(params.id);
    }

    @Post('carts')
    async createCart(@Body() body: Cart): Promise<Cart> {
        return this.cartsService.createCart(body);
    }

    @Put('carts/:id')
    async updateCart(@Body() body: Cart, @Param() params: any): Promise<Cart> {
        return this.cartsService.updateCart(params.id, body);
    }
}

