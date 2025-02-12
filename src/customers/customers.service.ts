import {
	BadRequestException,
	ConflictException,
	Injectable,
	NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity';
import { FindOptionsWhere, Like, Repository } from 'typeorm';
import { convertToEn } from 'src/utils/appHelper';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { CreateCustomerDto } from './dtos/create-customer.dto';

const PAGE_SIZE = +process.env.CUSTOMER_PAGE_SIZE || 10;

@Injectable()
export class CustomersService {
	constructor(
		@InjectRepository(Customer)
		private readonly customerRepository: Repository<Customer>,
	) {}

	async findAll(page: number, user_id: string) {
		const where: FindOptionsWhere<Customer> = {};

		if (user_id && !isNaN(+user_id)) where.user_id = +user_id;
		else throw new BadRequestException();

		const [items, count] = await this.customerRepository.findAndCount({
			take: PAGE_SIZE,
			skip: (page - 1) * PAGE_SIZE,
			order: {
				id: 'DESC',
			},
			where,
		});

		return {
			count,
			page,
			page_size: PAGE_SIZE,
			items,
		};
	}

	async findOne(productId: number) {
		const item = await this.customerRepository.findOne({
			where: { id: productId },
			relations: {
				invoices: true,
			},
		});

		if (!item) throw new NotFoundException('Customer not found');

		return item;
	}

	async search(q: string, user_id: string) {
		const where: FindOptionsWhere<Customer> = {};

		if (user_id && !isNaN(+user_id)) where.user_id = +user_id;
		else throw new BadRequestException();

		where.customer_name_ascii = Like(`%${convertToEn(q)}%`);

		const items = await this.customerRepository.find({ where });

		if (items.length) return items;
		return [];
	}

	async create(dto: CreateCustomerDto) {
		const foundedItem = await this.customerRepository.findOne({
			where: { phone_number: dto.phone_number },
		});

		if (foundedItem) throw new ConflictException('Phone number had taken');

		const item = new Customer(dto);
		const newItem = await this.customerRepository.save(item);

		return newItem;
	}

	async update(updateDto: UpdateCustomerDto, id: number) {
		return await this.customerRepository.update(id, updateDto);
	}

	async delete(id: number) {
		const item = await this.customerRepository.findOne({
			where: { id },
		});

		if (!item) throw new NotFoundException('Customer not found');

		return await this.customerRepository.delete({ id });
	}
}
