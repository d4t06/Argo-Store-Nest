"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WarehouseEntriesModule = void 0;
const common_1 = require("@nestjs/common");
const warehouse_entries_controller_1 = require("./warehouse-entries.controller");
const warehouse_entries_service_1 = require("./warehouse-entries.service");
const typeorm_1 = require("@nestjs/typeorm");
const warehouse_entry_entity_1 = require("./entities/warehouse-entry.entity");
let WarehouseEntriesModule = class WarehouseEntriesModule {
};
exports.WarehouseEntriesModule = WarehouseEntriesModule;
exports.WarehouseEntriesModule = WarehouseEntriesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([warehouse_entry_entity_1.WarehouseEntry])],
        controllers: [warehouse_entries_controller_1.WarehouseEntriesController],
        providers: [warehouse_entries_service_1.WarehouseEntriesService]
    })
], WarehouseEntriesModule);
//# sourceMappingURL=warehouse-entries.module.js.map