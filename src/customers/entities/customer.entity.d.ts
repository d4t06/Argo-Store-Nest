import { Invoice } from 'src/invoices/entities/invoice.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Customer {
    id: number;
    customer_name: string;
    customer_name_ascii: string;
    phone_number: string;
    address: string;
    invoices: Invoice[];
    user_id: number;
    user: User;
    constructor(item: Partial<Customer>);
}
