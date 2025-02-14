import { User } from 'src/users/entities/user.entity';
import { WarehouseEntryItem } from 'src/warehouse-entry-items/entities/warehouse-entry-item.entity';
export declare class WarehouseEntry {
    id: number;
    user_id: number;
    user: User;
    items: WarehouseEntryItem;
    created_at: Date;
}
