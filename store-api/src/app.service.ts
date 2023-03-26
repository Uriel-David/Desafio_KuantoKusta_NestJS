import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable } from 'rxjs';
import { ProductDto } from './dtos/product.dto';
import { CartDto } from './dtos/cart.dto';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async findAllProducts(): Promise<Observable<ProductDto[]>> {
    return this.http
      .get(`http://localhost:3002/store/products`)
      .pipe(
        map((res): ProductDto[] => res.data)
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available', e.message);
        })
      );
  }

  async createProduct(productDto: ProductDto): Promise<Observable<ProductDto>> {
    return this.http
      .post(`http://localhost:3002/store/products`, productDto)
      .pipe(
        map((res): ProductDto => res.data)
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available', e.message);
        })
      );
  }
  
  async findAllCarts(): Promise<Observable<CartDto[]>> {
    return this.http
      .get(`http://localhost:3003/store/carts`)
      .pipe(
        map((res): CartDto[] => res.data)
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available', e.message);
        })
      );
  }

  async findCart(cartOrUserId: string): Promise<Observable<CartDto>> {
    return this.http
      .get(`http://localhost:3003/store/carts/${cartOrUserId}`)
      .pipe(
        map((res): CartDto => res.data)
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available', e.message);
        })
      );
  }

  async createProductAndCart(cartDto: CartDto): Promise<Observable<CartDto>> {
    return this.http
      .post(`http://localhost:3003/store/carts`, cartDto)
      .pipe(
        map((res): CartDto => res.data)
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available', e.message);
        })
      );
  }

  async updateProductCart(cartOrUserId: string, cartDto: CartDto): Promise<Observable<CartDto>> {
    return this.http
      .put(`http://localhost:3003/store/carts/${cartOrUserId}`, cartDto)
      .pipe(
        map((res): CartDto => res.data)
      )
      .pipe(
        catchError((e) => {
          throw new ForbiddenException('API not available', e.message);
        })
      );
  }
}
