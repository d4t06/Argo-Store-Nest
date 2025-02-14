"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseEntryItem = void 0;
const warehouse_entry_entity_1 = require("../../warehouse-entries/entities/warehouse-entry.entity");
const typeorm_1 = require("typeorm");
let WarehouseEntryItem = class WarehouseEntryItem {
};
exports.WarehouseEntryItem = WarehouseEntryItem;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WarehouseEntryItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseEntryItem.prototype, "warehouse_entry_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => warehouse_entry_entity_1.WarehouseEntry, (entry) => entry.items, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'warehouse_entry_id' }),
    __metadata("design:type", warehouse_entry_entity_1.WarehouseEntry)
], WarehouseEntryItem.prototype, "warehouse_entry", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WarehouseEntryItem.prototype, "created_at", void 0);
exports.WarehouseEntryItem = WarehouseEntryItem = __decorate([
    (0, typeorm_1.Entity)({ name: 'Warehouse_Entry_Items' })
], WarehouseEntryItem);
//# sourceMappingURL=warehouse-entry-item.entity.js.map