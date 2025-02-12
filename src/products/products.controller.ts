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
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
	constructor(private readonly productService: ProductsService) {}

	// GET /products
	@Get()
	findAll(@Query('page') page: number = 1, @Query('user_id') userId:string) {
		return this.productService.findAll(page, userId);
	}

	// GET /products/search
	@Get('search')
	search(@Query('q') q: string, @Query('user_id') userId:string) {
		return this.productService.search(q, userId);
	}

	//  GET /products/:id
	@Get(':id')
	async findOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
		return await this.productService.findOne(id);
	}

	// POST /products
	@Post()
	@UsePipes(ValidationPipe)
	async create(@Body() product: CreateProductDto) {
		const newProduct = await this.productService.create(product);
		return newProduct;
	}

	// PUT /products
	@Put(':id')
	async update(
		@Body() updateDto: UpdateProductDto,
		@Param('id', ParseIntPipe) id: number,
	) {
		const newProduct = await this.productService.update(updateDto, id);
		return newProduct;
	}

	// Delete /products
	@Delete(':id')
	async delete(@Param('id', ParseIntPipe) id: number) {
		await this.productService.delete(id);
	}
}
