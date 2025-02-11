import { User } from 'src/users/entities/user.entity';
import { WarehouseEntryItem } from 'src/warehouse-entry-items/entities/warehouse-entry-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Warehouse_Entries' })
export class WarehouseEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;
  @ManyToOne(() => User, (user) => user.warehouse_entries, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({name: "user_id"})
  user: User;

  @OneToMany(() => WarehouseEntryItem, (item) => item.warehouse_entry)
  items: WarehouseEntryItem;

  @CreateDateColumn()
  created_at: Date;
}
