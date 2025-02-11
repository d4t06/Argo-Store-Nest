import { Module } from '@nestjs/common';
import { ProductUnitsService } from './product-units.service';
import { ProductUnitsController } from './product-units.controller';

@Module({
  providers: [ProductUnitsService],
  controllers: [ProductUnitsController]
})
export class ProductUnitsModule {}
