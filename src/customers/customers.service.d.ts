import { Customer } from './entities/customer.entity';
import { Repository } from 'typeorm';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
import { CreateCustomerDto } from './dtos/create-customer.dto';
export declare class CustomersService {
    private readonly customerRepository;
    constructor(customerRepository: Repository<Customer>);
    findAll(page: number, user_id: string): Promise<{
        count: number;
        page: number;
        page_size: number;
        items: Customer[];
    }>;
    findOne(productId: number): Promise<Customer>;
    search(q: string, user_id: string): Promise<Customer[]>;
    create(dto: CreateCustomerDto): Promise<Customer>;
    update(updateDto: UpdateCustomerDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
