import { Module } from '@nestjs/common';
import { ProductUnitsService } from './product-units.service';
import { ProductUnitsController } from './product-units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductUnit } from './entities/product-unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductUnit])],
  providers: [ProductUnitsService],
  controllers: [ProductUnitsController]
})
export class ProductUnitsModule {}
