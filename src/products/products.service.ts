import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { convertToEn } from 'src/utils/appHelper';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
import { elementAt } from 'rxjs';

const PAGE_SIZE = +process.env.PAGE_SIZE || 1;

@Injectable()
export class ProductsService {
	constructor(
		@InjectRepository(Product)
		private readonly productRepository: Repository<Product>,
	) {}

	async findAll(page: number, user_id: string) {
		const where: FindOptionsWhere<Product> = {};

		if (user_id && !isNaN(+user_id)) where.user_id = +user_id;
		else throw new BadRequestException();

		const [products, count] = await this.productRepository.findAndCount({
			take: PAGE_SIZE,
			skip: (page - 1) * PAGE_SIZE,
			relations: {
				units: true,
			},
			order: {
				id: 'DESC',
			},
			where,
		});

		return {
			count,
			page,
			page_size: PAGE_SIZE,
			products,
		};
	}

	async findOne(productId: number) {
		const product = await this.productRepository.findOne({
			where: { id: productId },
			relations: {
				units: true,
			},
		});

		if (!product) throw new NotFoundException('Product not found');

		return product;
	}

	async search(q: string, user_id: string) {
		const where: FindOptionsWhere<Product> = {};

		if (user_id && !isNaN(+user_id)) where.user_id = +user_id;
		else throw new BadRequestException();

		where.product_name_ascii = Like(`%${convertToEn(q)}%`);

		const products = await this.productRepository.find({ where });

		if (products.length) return products;
		return [];
	}

	async create(createProductDto: CreateProductDto) {
		const foundedProduct = await this.productRepository.findOne({
			where: { product_name_ascii: createProductDto.product_name_ascii },
		});

		if (foundedProduct) throw new ConflictException('Product name had taken');

		const item = new Product(createProductDto);
		const newProduct = await this.productRepository.save(item);

		return newProduct;
	}

	async update(updateDto: UpdateProductDto, id: number) {
		return await this.productRepository.update(id, updateDto);
	}

	async delete(id: number) {
		const product = await this.productRepository.findOne({
			where: { id },
		});

		if (!product) throw new NotFoundException('product not found');

		return await this.productRepository.delete({ id });
	}
}
