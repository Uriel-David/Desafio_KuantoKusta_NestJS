import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable } from 'rxjs';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  async findAllProducts(): Promise<Observable<ProductDto[]>> {
    return this.http
      .get(`http://localhost:3002/products`)
      .pipe(
        map((res): ProductDto[] => res.data)
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        })
      );
  }

  async createProduct(productDto: ProductDto): Promise<Observable<ProductDto>> {
    return this.http
      .post(`http://localhost:3002/products`, productDto)
      .pipe(
        map((res): ProductDto => res.data)
      );
  }
}
