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
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';

@Controller('customers')
export class CustomersController {
	constructor(private readonly customerService: CustomersService) {}

	// GET /products
	@Get()
	findAll(@Query('page') page: number = 1, @Query('user_id') user_id: string) {
		return this.customerService.findAll(page, user_id);
	}

	// GET /products
	@Get('search')
	search(@Query('q') q: string, @Query('user_id') userId: string) {
		return this.customerService.search(q, userId);
	}

	//  GET /products/:id
	@Get(':id')
	async findOne(@Param('id', ParseIntPipe) id: number) {
		return await this.customerService.findOne(id);
	}

	// POST /products
	@Post()
	@UseGuards(AuthGuard)
	@UsePipes(ValidationPipe)
	async create(@Body() dto: CreateCustomerDto) {
		return await this.customerService.create(dto);
	}

	// POST /products
	@Put(':id')
	@UseGuards(AuthGuard)
	async update(
		@Body() updateDto: UpdateCustomerDto,
		@Param('id', ParseIntPipe) id: number,
	) {
		await this.customerService.update(updateDto, id);
	}

	// Delete /products
	@Delete(':id')
	@UseGuards(AuthGuard)
	async delete(@Param('id', ParseIntPipe) id: number) {
		await this.customerService.delete(id);
	}
}
