import { Module } from '@nestjs/common';
import { WarehouseEntriesController } from './warehouse-entries.controller';
import { WarehouseEntriesService } from './warehouse-entries.service';

@Module({
  controllers: [WarehouseEntriesController],
  providers: [WarehouseEntriesService]
})
export class WarehouseEntriesModule {}
