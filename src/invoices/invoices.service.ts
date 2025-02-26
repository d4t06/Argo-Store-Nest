import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from './entities/invoice.entity';
import { FindOptionsWhere, Repository } from 'typeorm';
import { CreateInvoiceDto } from './dtos/create-invoive.dto';
import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';

const PAGE_SIZE = +process.env.INVOICE_PAGE_SIZE || 30;

@Injectable()
export class InvoicesService {
	constructor(
		@InjectRepository(Invoice)
		private readonly invoiveRepository: Repository<Invoice>,
		@InjectRepository(InvoiceItem)
		private readonly invoiveItemRepository: Repository<InvoiceItem>,
	) {}

	async findAll(page: number, user_id: number, customer_id: string) {
		const where: FindOptionsWhere<Invoice> = {};

		if (user_id && !isNaN(+user_id)) where.user_id = +user_id;
		else throw new BadRequestException();

		if (customer_id && !isNaN(+customer_id)) where.customer_id = +customer_id;

		const [items, count] = await this.invoiveRepository.findAndCount({
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

	async findOne(invoiceId: number) {
		const where: FindOptionsWhere<Invoice> = {};

		where.id = invoiceId;

		const item = await this.invoiveRepository.findOne({
			relations: {
				customer: true,
				items: true,
			},
			where,
		});

		return item;
	}

	async create(dto: CreateInvoiceDto) {
		const { items, ...rest } = dto;

		const invoiceData = new Invoice(rest);
		const newInvoice = await this.invoiveRepository.save(invoiceData);

		const itemsData = items.map(
			(i) => new InvoiceItem({ ...i, invoice_id: newInvoice.id }),
		);
		const newInvoiceItems = await this.invoiveItemRepository.save(itemsData);

		Object.assign(newInvoice, { items: newInvoiceItems });

		return newInvoice;
	}
}
