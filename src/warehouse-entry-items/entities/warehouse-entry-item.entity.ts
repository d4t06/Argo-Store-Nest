import { WarehouseEntry } from 'src/warehouse-entries/entities/warehouse-entry.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'Warehouse_Entry_Items' })
export class WarehouseEntryItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  warehouse_entry_id: number;
  @ManyToOne(() => WarehouseEntry, (entry) => entry.items, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'warehouse_entry_id' })
  warehouse_entry: WarehouseEntry;

  @CreateDateColumn()
  created_at: Date;
}
