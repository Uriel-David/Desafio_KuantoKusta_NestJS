import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from 'src/entitys/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService {
    constructor(@InjectRepository(Cart) private readonly cartsRepository: Repository<Cart>) {}

    async findAll(): Promise<Cart[]> {
        return this.cartsRepository.find();
    }

    async findOne(userId: string): Promise<Cart> {
        return this.cartsRepository.findOneBy({
            userId
        });
    }

    async createCart(cart: Cart): Promise<Cart> {
        return this.cartsRepository.save(this.cartsRepository.create(cart));
    }

    async updateCart(shoppingCartId: string, cart: Cart): Promise<Cart> {
        this.cartsRepository.update(shoppingCartId, cart)
        return this.findOne(cart.userId);
    }
}
