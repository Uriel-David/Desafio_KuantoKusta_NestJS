import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Cart } from '../entitys/cart.entity';
import { CartController } from './carts.controller';
import { CartService } from './carts.service';

describe('Service', () => {
  let service: CartService;
  let controller: CartController;
  let repository: Repository<Cart>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CartController],
      providers: [
        CartService,
        {
          provide: getRepositoryToken(Cart),
          useValue: {},
        }
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    controller = module.get<CartController>(CartController);
    repository = module.get<Repository<Cart>>(getRepositoryToken(Cart));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(controller).toBeDefined();
    expect(repository).toBeDefined();
  });
});
