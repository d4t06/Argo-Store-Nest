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
  name: string;

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
}
