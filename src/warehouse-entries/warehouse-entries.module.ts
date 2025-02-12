import { Module } from '@nestjs/common';
import { WarehouseEntriesController } from './warehouse-entries.controller';
import { WarehouseEntriesService } from './warehouse-entries.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WarehouseEntry } from './entities/warehouse-entry.entity';

@Module({
  imports: [TypeOrmModule.forFeature([WarehouseEntry])],
  controllers: [WarehouseEntriesController],
  providers: [WarehouseEntriesService]
})
export class WarehouseEntriesModule {}
