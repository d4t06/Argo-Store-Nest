import { InVoiceItemQuantity } from 'src/invoice-item-quantities/entities/invoice-item-quantity.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Product } from 'src/products/entities/product.entity';
export declare class InvoiceItem {
    id: number;
    created_at: Date;
    invoice_item_quantities: InVoiceItemQuantity[];
    invoice_id: number;
    invoice: Invoice;
    product_id: number;
    product: Product;
}
