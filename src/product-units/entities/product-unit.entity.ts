import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Product_Units' })
export class ProductUnit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  unit_name: string;

  @Column()
  unit_name_ascii: string;

  @Column()
  conversion_quantity: number;

  @Column()
  price: number;

  @Column()
  debt_price: number;

  @Column()
  product_id: number;
  @ManyToOne(() => Product, (p) => p.units, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  constructor(item: Partial<Product>) {
    Object.assign(this, item);
  }
}
