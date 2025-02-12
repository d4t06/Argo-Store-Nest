import { Module } from '@nestjs/common';
import { InvoiceItemsService } from './invoice-items.service';
import { InvoiceItemsController } from './invoice-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceItem } from './entities/invoice-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([InvoiceItem])],
  providers: [InvoiceItemsService],
  controllers: [InvoiceItemsController]
})
export class InvoiceItemsModule {}
