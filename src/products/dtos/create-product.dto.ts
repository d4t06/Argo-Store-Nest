import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty({ message: 'product_name is required' })
  product_name: string;

  @IsNotEmpty({ message: 'product_name_ascii is required' })
  product_name_ascii: string;

  image_url: string;

  image_path: string;

  bar_code: string;

  stock_price: number;
}
