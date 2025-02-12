import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';
import { ProductUnit } from 'src/product-units/entities/product-unit.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_name: string;

  @Column()
  product_name_ascii: string;

  @Column()
  image_url: string;

  @Column()
  image_path: string;

  @Column()
  stock_price: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  user_id: number;
  @ManyToOne(() => User, (user) => user.products, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => ProductUnit, (pUnit) => pUnit.product)
  units: ProductUnit[];

  @OneToMany(() => InvoiceItem, (iItem) => iItem.product)
  invoice_items: InvoiceItem[];

  constructor(item: Partial<Product>) {
    Object.assign(this, item);
  }
}
