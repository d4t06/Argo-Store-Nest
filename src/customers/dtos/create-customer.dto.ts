import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({ message: 'customer_name is required' })
  customer_name: string;

  phone_number: string;
  address: string;
}
