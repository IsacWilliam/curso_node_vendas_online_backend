import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from '../cart.service';
import { CartProductService } from '../../cart-product/cart-product.service';
import { Repository } from 'typeorm';
import { CartEntity } from '../entities/cart.entity';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('CartService', () => {
  let service: CartService;
  let cartRepository: Repository<CartEntity>;
  let cartProductService: CartProductService; // Adicionando o CartProductService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        CartProductService, // Incluindo o CartProductService
        {
          provide: getRepositoryToken(CartEntity),
          useValue: {} // Pode ser um valor falso ou um mock
        }
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    cartProductService = module.get<CartProductService>(CartProductService); // Obtendo a instância do CartProductService
    cartRepository = module.get<Repository<CartEntity>>(getRepositoryToken(CartEntity));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
