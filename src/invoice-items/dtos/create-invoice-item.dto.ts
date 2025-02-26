import { IsNotEmpty, isNotEmpty, IsNumber } from 'class-validator';

export class CreateInvoiceItemDto {
	@IsNotEmpty({ message: 'price is require' })
	@IsNumber()
	price: number;

	@IsNotEmpty({ message: 'quantity is require' })
	@IsNumber()
	quantity: number;

	@IsNotEmpty({ message: 'unit_name is require' })
	unit_name: string;

	@IsNotEmpty({ message: 'product_name is require' })
	product_name: string;

	@IsNotEmpty({ message: 'product_id is require' })
	@IsNumber()
	product_id: number;
}
