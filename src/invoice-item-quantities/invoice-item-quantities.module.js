"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemQuantitiesModule = void 0;
const common_1 = require("@nestjs/common");
const invoice_item_quantities_controller_1 = require("./invoice-item-quantities.controller");
const invoice_item_quantities_service_1 = require("./invoice-item-quantities.service");
const typeorm_1 = require("@nestjs/typeorm");
const invoice_item_quantity_entity_1 = require("./entities/invoice-item-quantity.entity");
let InvoiceItemQuantitiesModule = class InvoiceItemQuantitiesModule {
};
exports.InvoiceItemQuantitiesModule = InvoiceItemQuantitiesModule;
exports.InvoiceItemQuantitiesModule = InvoiceItemQuantitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([invoice_item_quantity_entity_1.InVoiceItemQuantity])],
        controllers: [invoice_item_quantities_controller_1.InvoiceItemQuantitiesController],
        providers: [invoice_item_quantities_service_1.InvoiceItemQuantitiesService]
    })
], InvoiceItemQuantitiesModule);
//# sourceMappingURL=invoice-item-quantities.module.js.map