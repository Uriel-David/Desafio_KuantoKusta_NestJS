import { Body, Controller, Get, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { JwtGuard } from './auth/auth/jwt.guard';
import { CartDto } from './dtos/cart.dto';
import { ProductDto } from './dtos/product.dto';

@Controller('store')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('products')
  @UseGuards(JwtGuard)
  async findAllProducts(): Promise<Observable<ProductDto[]>> {
    return await this.appService.findAllProducts();
  }

  @Post('products')
  @UseGuards(JwtGuard)
  async createProduct(@Body() productDto: ProductDto): Promise<Observable<ProductDto>> {
    return await this.appService.createProduct(productDto);
  }

  @Get('carts')
  @UseGuards(JwtGuard)
  async findAllCarts(): Promise<Observable<CartDto[]>> {
    return await this.appService.findAllCarts();
  }

  @Get('carts/:id')
  @UseGuards(JwtGuard)
  async findCart(@Param() params: any): Promise<Observable<CartDto>> {
    return await this.appService.findCart(params.id);
  }

  @Post('carts')
  @UseGuards(JwtGuard)
  async createProductAndCart(@Req() request: any, @Body() body: CartDto): Promise<Observable<CartDto>> {
    body.userId = request.user.sub;
    return await this.appService.createProductAndCart(body); 
  }

  @Put('carts/:id')
  @UseGuards(JwtGuard)
  async updateProductCart(@Req() request: any, @Body() body: CartDto, @Param() params: any): Promise<Observable<CartDto>> {
    body.shoppingCartId = params.id;
    body.userId = request.user.sub;
    return await this.appService.updateProductCart(params.id, body);
  }
}
