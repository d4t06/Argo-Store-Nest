import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';
import { ProductUnit } from 'src/product-units/entities/product-unit.entity';
import { User } from 'src/users/entities/user.entity';
export declare class Product {
    id: number;
    product_name: string;
    product_name_ascii: string;
    image_url: string;
    image_path: string;
    stock_price: number;
    stock: number;
    created_at: Date;
    user_id: number;
    user: User;
    units: ProductUnit[];
    invoice_items: InvoiceItem[];
    constructor(item: Partial<Product>);
}
