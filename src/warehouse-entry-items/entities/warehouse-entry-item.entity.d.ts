import { WarehouseEntry } from 'src/warehouse-entries/entities/warehouse-entry.entity';
export declare class WarehouseEntryItem {
    id: number;
    warehouse_entry_id: number;
    warehouse_entry: WarehouseEntry;
    created_at: Date;
}
