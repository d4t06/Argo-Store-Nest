import { Module } from '@nestjs/common';
import { WarehouseEntryItemsController } from './warehouse-entry-items.controller';
import { WarehouseEntryItemsService } from './warehouse-entry-items.service';
import { WarehouseEntryItem } from './entities/warehouse-entry-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseEntryItem])],
  controllers: [WarehouseEntryItemsController],
  providers: [WarehouseEntryItemsService]
})
export class WarehouseEntryItemsModule {}
