import { Module } from '@nestjs/common';
import { InvoiceItemQuantitiesController } from './invoice-item-quantities.controller';
import { InvoiceItemQuantitiesService } from './invoice-item-quantities.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InVoiceItemQuantity } from './entities/invoice-item-quantity.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InVoiceItemQuantity])],
  controllers: [InvoiceItemQuantitiesController],
  providers: [InvoiceItemQuantitiesService]
})
export class InvoiceItemQuantitiesModule {}
