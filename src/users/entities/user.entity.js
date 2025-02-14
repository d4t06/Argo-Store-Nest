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
exports.User = void 0;
const customer_entity_1 = require("../../customers/entities/customer.entity");
const invoice_entity_1 = require("../../invoices/entities/invoice.entity");
const product_entity_1 = require("../../products/entities/product.entity");
const warehouse_entry_entity_1 = require("../../warehouse-entries/entities/warehouse-entry.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    constructor(user) {
        Object.assign(this, user);
    }
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "store_name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: '',
    }),
    __metadata("design:type", String)
], User.prototype, "refresh_token", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 'USER',
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => invoice_entity_1.Invoice, (invoice) => invoice.user),
    __metadata("design:type", Array)
], User.prototype, "invoices", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entity_1.Product, (product) => product.user),
    __metadata("design:type", Array)
], User.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => customer_entity_1.Customer, (customer) => customer.user),
    __metadata("design:type", Array)
], User.prototype, "customers", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => warehouse_entry_entity_1.WarehouseEntry, (warehouse) => warehouse.user),
    __metadata("design:type", Array)
], User.prototype, "warehouse_entries", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)({ name: 'Users' }),
    __metadata("design:paramtypes", [Object])
], User);
//# sourceMappingURL=user.entity.js.map