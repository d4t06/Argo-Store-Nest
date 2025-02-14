import { Customer } from 'src/customers/entities/customer.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Product } from 'src/products/entities/product.entity';
import { WarehouseEntry } from 'src/warehouse-entries/entities/warehouse-entry.entity';
export declare class User {
    id: number;
    phone_number: string;
    password: string;
    store_name: string;
    refresh_token: string;
    role: string;
    invoices: Invoice[];
    products: Product[];
    customers: Customer[];
    warehouse_entries: WarehouseEntry[];
    constructor(user: Partial<User>);
}
