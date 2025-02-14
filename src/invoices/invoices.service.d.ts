import { Invoice } from './entities/invoice.entity';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dtos/create-invoive.dto';
export declare class InvoicesService {
    private readonly invoiveRepository;
    constructor(invoiveRepository: Repository<Invoice>);
    findAll(page: number, user_id: number, customer_id: number): Promise<{
        count: number;
        page: number;
        page_size: number;
        items: Invoice[];
    }>;
    create(dto: CreateInvoiceDto): Promise<Invoice>;
}
