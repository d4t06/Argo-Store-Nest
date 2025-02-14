import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';
export declare class InVoiceItemQuantity {
    id: number;
    price: number;
    quantity: number;
    unit_name: string;
    invoice_item_id: number;
    invoice_item: InvoiceItem;
}
