import { Test, TestingModule } from '@nestjs/testing';
import { WarehouseEntriesService } from './warehouse-entries.service';

describe('WarehouseEntriesService', () => {
  let service: WarehouseEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarehouseEntriesService],
    }).compile();

    service = module.get<WarehouseEntriesService>(WarehouseEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
