import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseEntriesController } from './warehouse-entries.controller';

describe('WarehouseEntriesController', () => {
  let controller: WarehouseEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarehouseEntriesController],
    }).compile();

    controller = module.get<WarehouseEntriesController>(WarehouseEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
