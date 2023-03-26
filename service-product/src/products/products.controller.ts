import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { ProductDto } from './dtos/product.dto';
import { ProductsService } from './products.service';

@Controller('store')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get('products')
    async findAll(): Promise<Product[]> {
        return await this.productsService.findAll();
    }

    @Post('products')
    async createProduct(@Body() productDto: ProductDto): Promise<Product> {
        return await this.productsService.create(productDto);
    }
}
