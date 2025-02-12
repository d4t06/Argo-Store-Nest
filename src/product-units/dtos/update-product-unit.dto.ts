import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProductUnitDto {
  @IsNotEmpty({ message: 'unit_name is required' })
  unit_name: string;

  @IsNotEmpty({ message: 'unit_name_ascii is required' })
  unit_name_ascii: string;

  image_url: string;
}
