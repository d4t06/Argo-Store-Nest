import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dtos/create-customer.dto';
import { UpdateCustomerDto } from './dtos/update-customer.dto';
export declare class CustomersController {
    private readonly customerService;
    constructor(customerService: CustomersService);
    findAll(page: number, user_id: string): Promise<{
        count: number;
        page: number;
        page_size: number;
        items: import("./entities/customer.entity").Customer[];
    }>;
    search(q: string, userId: string): Promise<import("./entities/customer.entity").Customer[]>;
    findOne(id: number): Promise<import("./entities/customer.entity").Customer>;
    create(dto: CreateCustomerDto): Promise<import("./entities/customer.entity").Customer>;
    update(updateDto: UpdateCustomerDto, id: number): Promise<void>;
    delete(id: number): Promise<void>;
}
