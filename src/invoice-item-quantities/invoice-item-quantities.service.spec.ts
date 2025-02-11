import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceItemQuantitiesService } from './invoice-item-quantities.service';

describe('InvoiceItemQuantitiesService', () => {
  let service: InvoiceItemQuantitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceItemQuantitiesService],
    }).compile();

    service = module.get<InvoiceItemQuantitiesService>(InvoiceItemQuantitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
