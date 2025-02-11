import { Module } from '@nestjs/common';
import { InvoiceItemQuantitiesController } from './invoice-item-quantities.controller';
import { InvoiceItemQuantitiesService } from './invoice-item-quantities.service';

@Module({
  controllers: [InvoiceItemQuantitiesController],
  providers: [InvoiceItemQuantitiesService]
})
export class InvoiceItemQuantitiesModule {}
