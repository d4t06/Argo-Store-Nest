import { Customer } from 'src/customers/entities/customer.entity';
import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Invoice {
    id: number;
    customer_id: number;
    customer: Customer;
    created_at: Date;
    user_id: number;
    user: User;
    items: InvoiceItem[];
    constructor(item: Partial<Invoice>);
}
