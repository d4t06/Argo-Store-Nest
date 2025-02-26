import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';
import {
  Column,
  JoinColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

// @Entity({ name: 'Invoice_Item_Quantities' })
export class InVoiceItemQuantity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  unit_name: string;

  // @Column()
  // invoice_item_id: number;
  // @ManyToOne(() => InvoiceItem, (iItem) => iItem.invoice_item_quantities, {
  //   cascade: true,
  //   onDelete: 'CASCADE',
  // })
  @JoinColumn({ name: 'invoice_item_id' })
  invoice_item: InvoiceItem;
}
