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
exports.InVoiceItemQuantity = void 0;
const invoice_item_entity_1 = require("../../invoice-items/entities/invoice-item.entity");
const typeorm_1 = require("typeorm");
let InVoiceItemQuantity = class InVoiceItemQuantity {
};
exports.InVoiceItemQuantity = InVoiceItemQuantity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InVoiceItemQuantity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InVoiceItemQuantity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InVoiceItemQuantity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], InVoiceItemQuantity.prototype, "unit_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], InVoiceItemQuantity.prototype, "invoice_item_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => invoice_item_entity_1.InvoiceItem, (iItem) => iItem.invoice_item_quantities, {
        cascade: true,
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'invoice_item_id' }),
    __metadata("design:type", invoice_item_entity_1.InvoiceItem)
], InVoiceItemQuantity.prototype, "invoice_item", void 0);
exports.InVoiceItemQuantity = InVoiceItemQuantity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Invoice_Item_Quantities' })
], InVoiceItemQuantity);
//# sourceMappingURL=invoice-item-quantity.entity.js.map