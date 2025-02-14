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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUnitsController = void 0;
const common_1 = require("@nestjs/common");
const product_units_service_1 = require("./product-units.service");
const create_product_unit_dto_1 = require("./dtos/create-product-unit.dto");
const update_product_unit_dto_1 = require("./dtos/update-product-unit.dto");
let ProductUnitsController = class ProductUnitsController {
    constructor(productUnitService) {
        this.productUnitService = productUnitService;
    }
    async create(dto) {
        return await this.productUnitService.create(dto);
    }
    async update(updateDto, id) {
        return await this.productUnitService.update(updateDto, id);
    }
    async delete(id) {
        await this.productUnitService.delete(id);
    }
};
exports.ProductUnitsController = ProductUnitsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(common_1.ValidationPipe),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_unit_dto_1.CreateProductUnitDto]),
    __metadata("design:returntype", Promise)
], ProductUnitsController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_product_unit_dto_1.UpdateProductUnitDto, Number]),
    __metadata("design:returntype", Promise)
], ProductUnitsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ProductUnitsController.prototype, "delete", null);
exports.ProductUnitsController = ProductUnitsController = __decorate([
    (0, common_1.Controller)('product-units'),
    __metadata("design:paramtypes", [product_units_service_1.ProductUnitsService])
], ProductUnitsController);
//# sourceMappingURL=product-units.controller.js.map