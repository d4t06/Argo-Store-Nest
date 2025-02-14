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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./entities/product.entity");
const typeorm_2 = require("typeorm");
const appHelper_1 = require("../utils/appHelper");
const PAGE_SIZE = +process.env.PAGE_SIZE || 10;
let ProductsService = class ProductsService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async findAll(page, user_id) {
        const where = {};
        if (user_id && !isNaN(+user_id))
            where.user_id = +user_id;
        else
            throw new common_1.BadRequestException();
        const [products, count] = await this.productRepository.findAndCount({
            take: PAGE_SIZE,
            skip: (page - 1) * PAGE_SIZE,
            relations: {
                units: true,
            },
            order: {
                id: 'DESC',
            },
            where,
        });
        return {
            count,
            page,
            page_size: PAGE_SIZE,
            products,
        };
    }
    async findOne(productId) {
        const product = await this.productRepository.findOne({
            where: { id: productId },
            relations: {
                units: true,
            },
        });
        if (!product)
            throw new common_1.NotFoundException('Product not found');
        return product;
    }
    async search(q, user_id) {
        const where = {};
        if (user_id && !isNaN(+user_id))
            where.user_id = +user_id;
        else
            throw new common_1.BadRequestException();
        where.product_name_ascii = (0, typeorm_2.Like)(`%${(0, appHelper_1.convertToEn)(q)}%`);
        const products = await this.productRepository.find({ where });
        if (products.length)
            return products;
        return [];
    }
    async create(createProductDto) {
        const productNameAscii = (0, appHelper_1.convertToEn)(createProductDto.product_name);
        const foundedProduct = await this.productRepository.findOne({
            where: { product_name_ascii: productNameAscii },
        });
        if (foundedProduct)
            throw new common_1.ConflictException('Product name had taken');
        const item = new product_entity_1.Product({
            ...createProductDto,
            product_name_ascii: productNameAscii,
        });
        const newProduct = await this.productRepository.save(item);
        return newProduct;
    }
    async update(updateDto, id) {
        return await this.productRepository.update(id, updateDto);
    }
    async delete(id) {
        const product = await this.productRepository.findOne({
            where: { id },
        });
        if (!product)
            throw new common_1.NotFoundException('product not found');
        return await this.productRepository.delete({ id });
    }
};
exports.ProductsService = ProductsService;
exports.ProductsService = ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_entity_1.Product)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProductsService);
//# sourceMappingURL=products.service.js.map