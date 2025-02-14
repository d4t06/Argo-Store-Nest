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
exports.ProductUnitsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_unit_entity_1 = require("./entities/product-unit.entity");
const typeorm_2 = require("typeorm");
const appHelper_1 = require("../utils/appHelper");
let ProductUnitsService = class ProductUnitsService {
    constructor(productUnitRepository) {
        this.productUnitRepository = productUnitRepository;
    }
    async create(dto) {
        const unit_name_ascii = (0, appHelper_1.convertToEn)(dto.unit_name);
        const foundedProduct = await this.productUnitRepository.findOne({
            where: { unit_name_ascii },
        });
        if (foundedProduct)
            throw new common_1.ConflictException('Product name had taken');
        const item = new product_unit_entity_1.ProductUnit({
            ...dto,
            unit_name_ascii,
        });
        const newProduct = await this.productUnitRepository.save(item);
        return newProduct;
    }
    async update(updateDto, id) {
        return await this.productUnitRepository.update(id, updateDto);
    }
    async delete(id) {
        const product = await this.productUnitRepository.findOne({
            where: { id },
        });
        if (!product)
            throw new common_1.NotFoundException('product not found');
        return await this.productUnitRepository.delete({ id });
    }
};
exports.ProductUnitsService = ProductUnitsService;
exports.ProductUnitsService = ProductUnitsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_unit_entity_1.ProductUnit)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductUnitsService);
//# sourceMappingURL=product-units.service.js.map