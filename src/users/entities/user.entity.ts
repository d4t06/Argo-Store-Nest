import { Customer } from 'src/customers/entities/customer.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Product } from 'src/products/entities/product.entity';
import { WarehouseEntry } from 'src/warehouse-entries/entities/warehouse-entry.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  phone_number: string;

  @Column()
  password: string;

  @Column()
  store_name: string;

  @Column({
    default: '',
  })
  refresh_token: string;

  @Column({
    default: 'USER',
  })
  role: string;

  @OneToMany(() => Invoice, (invoice) => invoice.user)
  invoices: Invoice[];

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];

  @OneToMany(() => Customer, (customer) => customer.user)
  customers: Customer[];

  @OneToMany(() => WarehouseEntry, (warehouse) => warehouse.user)
  warehouse_entries: WarehouseEntry[];

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}
