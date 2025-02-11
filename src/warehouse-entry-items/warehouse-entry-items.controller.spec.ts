import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseEntryItemsController } from './warehouse-entry-items.controller';

describe('WarehouseEntryItemsController', () => {
  let controller: WarehouseEntryItemsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseEntryItemsController],
    }).compile();

    controller = module.get<WarehouseEntryItemsController>(WarehouseEntryItemsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
