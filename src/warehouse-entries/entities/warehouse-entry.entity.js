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
exports.WarehouseEntry = void 0;
const user_entity_1 = require("../../users/entities/user.entity");
const warehouse_entry_item_entity_1 = require("../../warehouse-entry-items/entities/warehouse-entry-item.entity");
const typeorm_1 = require("typeorm");
let WarehouseEntry = class WarehouseEntry {
};
exports.WarehouseEntry = WarehouseEntry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], WarehouseEntry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], WarehouseEntry.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.warehouse_entries, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", user_entity_1.User)
], WarehouseEntry.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => warehouse_entry_item_entity_1.WarehouseEntryItem, (item) => item.warehouse_entry),
    __metadata("design:type", warehouse_entry_item_entity_1.WarehouseEntryItem)
], WarehouseEntry.prototype, "items", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], WarehouseEntry.prototype, "created_at", void 0);
exports.WarehouseEntry = WarehouseEntry = __decorate([
    (0, typeorm_1.Entity)({ name: 'Warehouse_Entries' })
], WarehouseEntry);
//# sourceMappingURL=warehouse-entry.entity.js.map