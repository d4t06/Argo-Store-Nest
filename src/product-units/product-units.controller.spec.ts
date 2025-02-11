import { Test, TestingModule } from '@nestjs/testing';
import { ProductUnitsController } from './product-units.controller';

describe('ProductUnitsController', () => {
  let controller: ProductUnitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductUnitsController],
    }).compile();

    controller = module.get<ProductUnitsController>(ProductUnitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
