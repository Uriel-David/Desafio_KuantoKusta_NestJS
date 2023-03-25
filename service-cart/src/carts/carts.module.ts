import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cart } from 'src/entitys/cart.entity';
import { CartController } from './carts.controller';
import { CartService } from './carts.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Cart])
    ],
    exports: [
        TypeOrmModule
    ],
    controllers: [CartController],
    providers: [CartService]
})
export class CartsModule {}
