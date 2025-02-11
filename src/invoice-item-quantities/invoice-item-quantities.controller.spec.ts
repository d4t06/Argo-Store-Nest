import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceItemQuantitiesController } from './invoice-item-quantities.controller';

describe('InvoiceItemQuantitiesController', () => {
  let controller: InvoiceItemQuantitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoiceItemQuantitiesController],
    }).compile();

    controller = module.get<InvoiceItemQuantitiesController>(InvoiceItemQuantitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
