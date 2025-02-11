import { Module } from '@nestjs/common';
import { WarehouseEntryItemsController } from './warehouse-entry-items.controller';
import { WarehouseEntryItemsService } from './warehouse-entry-items.service';

@Module({
  controllers: [WarehouseEntryItemsController],
  providers: [WarehouseEntryItemsService]
})
export class WarehouseEntryItemsModule {}
