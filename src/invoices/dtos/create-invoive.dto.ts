import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateInvoiceDto {
  @IsNotEmpty({ message: 'customer_id is required' })
  customer_id: number;

  @IsNotEmpty({ message: 'customer_id is required' })
  user_id: number;
}
