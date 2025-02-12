import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateInvoiceDto } from './dtos/create-invoive.dto';

const PAGE_SIZE = +process.env.INVOICE_PAGE_SIZE || 10;

@Injectable()
export class InvoicesService {
	constructor(
		@InjectRepository(Invoice)
		private readonly invoiveRepository: Repository<Invoice>,
	) {}

	async findAll(page: number, user_id: number, customer_id: number) {
		const where: FindOptionsWhere<Invoice> = {};

		if (user_id && !isNaN(+user_id)) where.user_id = +user_id;

		if (customer_id && !isNaN(+customer_id)) where.customer_id = +customer_id;

		const [items, count] = await this.invoiveRepository.findAndCount({
			take: PAGE_SIZE,
			skip: (page - 1) * PAGE_SIZE,
			relations: {
				items: true,
				customer: true,
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
			items,
		};
	}

	async create(dto: CreateInvoiceDto) {
		const item = new Invoice(dto);
		const newItem = await this.invoiveRepository.save(item);

		return newItem;
	}
}
