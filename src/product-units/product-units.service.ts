import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductUnit } from './entities/product-unit.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateProductUnitDto } from './dtos/create-product-unit.dto';
import { UpdateProductUnitDto } from './dtos/update-product-unit.dto';

@Injectable()
export class ProductUnitsService {

	constructor(
		@InjectRepository(ProductUnit)
		private readonly productUnitRepository: Repository<ProductUnit>,
	) {}

	

	async create(createProductDto: CreateProductUnitDto) {
		const foundedProduct = await this.productUnitRepository.findOne({
			where: { unit_name_ascii: createProductDto.unit_name_ascii },
		});

		if (foundedProduct) throw new ConflictException('Product name had taken');

		const item = new ProductUnit(createProductDto);
		const newProduct = await this.productUnitRepository.save(item);

		return newProduct;
	}

	async update(updateDto: UpdateProductUnitDto, id: number) {
		return await this.productUnitRepository.update(id, updateDto);
	}

	async delete(id: number) {
		const product = await this.productUnitRepository.findOne({
			where: { id },
		});

		if (!product) throw new NotFoundException('product not found');

		return await this.productUnitRepository.delete({ id });
	}

}
