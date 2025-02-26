import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductUnitDto {
  @IsNotEmpty({ message: 'unit_name is required' })
  unit_name: string;

  @IsNotEmpty({ message: 'conversion_quantity is required' })
  @IsNumber()
  conversion_quantity: number;

  @IsNotEmpty({ message: 'price is required' })
  @IsNumber()
  price: number;
}
