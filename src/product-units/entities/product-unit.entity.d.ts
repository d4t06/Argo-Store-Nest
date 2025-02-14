import { Product } from 'src/products/entities/product.entity';
export declare class ProductUnit {
    id: number;
    unit_name: string;
    unit_name_ascii: string;
    conversion_quantity: number;
    price: number;
    debt_price: number;
    product_id: number;
    product: Product;
    constructor(item: Partial<ProductUnit>);
}
