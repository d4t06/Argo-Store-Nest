import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'product_name is required' })
  product_name: string;

  @IsNotEmpty({ message: 'user_id is required' })
  @IsNumber()
  user_id: number;
}
