import { InVoiceItemQuantity } from 'src/invoice-item-quantities/entities/invoice-item-quantity.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Invoice_Items' })
export class InvoiceItem {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => InVoiceItemQuantity, iItemQuantity => iItemQuantity.invoice_item)
  invoice_item_quantities: InVoiceItemQuantity[];

  @Column()
  invoice_id: number;
  @ManyToOne(() => Invoice, (i) => i.items, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'invoice_id' })
  invoice: Invoice;

  @Column()
  product_id: number;
  @ManyToOne(() => Product, (p) => p.invoice_items, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
