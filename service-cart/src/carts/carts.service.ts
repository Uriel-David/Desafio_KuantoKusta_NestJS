import { ForbiddenException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cart } from '../entitys/cart.entity';
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

    async addOrUpdateProductCart(cartOrUserId: string, cart: Cart): Promise<Cart> {
        try {
            const userCart = isNaN(Number(cartOrUserId))
                ? await this.cartsRepository.findOneBy({ shoppingCartId: cartOrUserId })
                : await this.cartsRepository.findOneBy({ userId: cartOrUserId });

            if (userCart.shoppingCartId === null) {
                return await this.cartsRepository.save(this.cartsRepository.create(cart));
            }

            return await this.updateCart(userCart.shoppingCartId, cart);
        } catch(e) {
            throw new ForbiddenException(e.message);
        }
    }

    private async updateCart(cartOrUserId: string, cart: Cart): Promise<Cart> {
        try {
            await this.cartsRepository.update(cartOrUserId, cart)
            return await this.findOne(cart.userId);
        } catch(e) {
            throw new ForbiddenException(e.message);
        }
    }
}
