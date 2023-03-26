import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private readonly productModel: Model<ProductDocument>) {}

    async create(productDto: ProductDto): Promise<Product> {
        try {
            const createdProduct = new this.productModel(productDto);
            return await createdProduct.save();
        } catch(e) {
            throw new ForbiddenException(e.message);
        }
    }

    async findAll(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }
}
