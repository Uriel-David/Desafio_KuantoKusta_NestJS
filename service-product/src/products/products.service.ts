import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from '../schemas/product.schema';
import { ProductDto } from './dtos/product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(productDto: ProductDto): Promise<Product> {
        const createdProduct = new this.productModel(productDto);
        return createdProduct.save();
    }

    async findAll(): Promise<Product[]> {
        return this.productModel.find().exec();
    }
}
