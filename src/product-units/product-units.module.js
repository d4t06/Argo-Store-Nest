"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnitsModule = void 0;
const common_1 = require("@nestjs/common");
const product_units_service_1 = require("./product-units.service");
const product_units_controller_1 = require("./product-units.controller");
const typeorm_1 = require("@nestjs/typeorm");
const product_unit_entity_1 = require("./entities/product-unit.entity");
let ProductUnitsModule = class ProductUnitsModule {
};
exports.ProductUnitsModule = ProductUnitsModule;
exports.ProductUnitsModule = ProductUnitsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([product_unit_entity_1.ProductUnit])],
        providers: [product_units_service_1.ProductUnitsService],
        controllers: [product_units_controller_1.ProductUnitsController]
    })
], ProductUnitsModule);
//# sourceMappingURL=product-units.module.js.map