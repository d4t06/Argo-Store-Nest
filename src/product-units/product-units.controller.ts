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
import { ProductUnitsService } from './product-units.service';
import { CreateProductUnitDto } from './dtos/create-product-unit.dto';
import { UpdateProductUnitDto } from './dtos/update-product-unit.dto';

@Controller('product-units')
export class ProductUnitsController {
	constructor(private readonly productUnitService: ProductUnitsService) {}

	// POST /products
	@Post()
	@UsePipes(ValidationPipe)
	async create(@Body() dto: CreateProductUnitDto) {
		return await this.productUnitService.create(dto);
	}

	// PUT /products
	@Put(':id')
	async update(
		@Body() updateDto: UpdateProductUnitDto,
		@Param('id', ParseIntPipe) id: number,
	) {
		return await this.productUnitService.update(updateDto, id);
	}

	// Delete /products
	@Delete(':id')
	async delete(@Param('id', ParseIntPipe) id: number) {
		await this.productUnitService.delete(id);
	}
}
