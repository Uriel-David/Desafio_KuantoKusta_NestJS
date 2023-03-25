import { Body, Controller, Get, Post } from '@nestjs/common';
import { Product } from 'src/schemas/product.schema';
import { ProductDto } from './dtos/product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productsService.findAll();
    }

    @Post()
    async createProduct(@Body() productDto: ProductDto): Promise<Product> {
        return this.productsService.create(productDto);
    }
}
