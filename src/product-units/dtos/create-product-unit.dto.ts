import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductUnitDto {
  @IsNotEmpty({ message: 'unit_name is required' })
  unit_name: string;

  // unit_name_ascii: string;

  @IsNotEmpty({ message: 'unit_name_ascii is required' })
  conversion_quantity: number;

  // @IsNotEmpty({ message: 'unit_name_ascii is required' })
  // product_id: number;
}
