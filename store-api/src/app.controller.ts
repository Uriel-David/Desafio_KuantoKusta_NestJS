import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { JwtGuard } from './auth/auth/jwt.guard';
import { ProductDto } from './dtos/product.dto';

@Controller('store')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  @UseGuards(JwtGuard)
  async findAllProducts(): Promise<Observable<ProductDto[]>> {
    return this.appService.findAllProducts();
  }

  @Post('products')
  @UseGuards(JwtGuard)
  async createProduct(@Body() productDto: ProductDto): Promise<Observable<ProductDto>> {
    return this.appService.createProduct(productDto);
  }
}
