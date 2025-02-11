import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseEntryItemsService } from './warehouse-entry-items.service';

describe('WarehouseEntryItemsService', () => {
  let service: WarehouseEntryItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseEntryItemsService],
    }).compile();

    service = module.get<WarehouseEntryItemsService>(WarehouseEntryItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
