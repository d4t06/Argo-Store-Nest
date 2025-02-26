import { Type } from 'class-transformer';
import {
  IsAlpha,
  IsArray,
  IsNotEmpty,
  IsNumber,
  ValidateNested,
} from 'class-validator';
import { CreateInvoiceItemDto } from 'src/invoice-items/dtos/create-invoice-item.dto';

export class CreateInvoiceDto {
  @IsNotEmpty({ message: 'customer_id is required' })
  customer_id: number;

  @IsNotEmpty({ message: 'customer_id is required' })
  user_id: number;

  @IsArray({ message: 'item is required' })
  @ValidateNested()
  @Type(() => CreateInvoiceItemDto)
  items: CreateInvoiceItemDto[];
}
