import { Product } from 'src/products/entities/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity({ name: 'Product_Units' })
@Unique('check_unique', ['product_id', 'unit_name_ascii'])
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

  @Column({ nullable: true })
  debt_price: number;

  @Column()
  product_id: number;
  @ManyToOne(() => Product, (p) => p.units, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  constructor(item: Partial<ProductUnit>) {
    Object.assign(this, item);
  }
}
