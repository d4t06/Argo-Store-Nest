import { InvoiceItem } from 'src/invoice-items/entities/invoice-item.entity';
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

@Entity({ name: 'Invoices' })
export class Invoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: number;

  @CreateDateColumn()
  created_at: Date;

  @Column()
  user_id: number;
  @ManyToOne(() => User, (user) => user.invoices, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => InvoiceItem, (iItem) => iItem.invoice)
  items: InvoiceItem[];
}
