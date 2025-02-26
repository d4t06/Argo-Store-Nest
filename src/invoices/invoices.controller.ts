import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	ParseIntPipe,
	Post,
	Put,
	Query,
} from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { CreateInvoiceDto } from './dtos/create-invoive.dto';

@Controller('invoices')
export class InvoicesController {
	constructor(private readonly invoiceService: InvoicesService) {}

	// GET /products
	@Get()
	findAll(
		@Query('page') page: number = 1,
		@Query('user_id', ParseIntPipe) user_id: number,
		@Query('customer_id') customer_id: string,
	) {
		return this.invoiceService.findAll(page, user_id, customer_id);
	}

	//  GET /products/:id
	@Get(':id')
	async findOne(@Param('id', ParseIntPipe) id: number) {
		return await this.invoiceService.findOne(id);
	}

	// POST /products
	@Post()
	async create(@Body() dto: CreateInvoiceDto) {
		return await this.invoiceService.create(dto);
	}
}
