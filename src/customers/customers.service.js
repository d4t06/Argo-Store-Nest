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
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("./entities/customer.entity");
const typeorm_2 = require("typeorm");
const appHelper_1 = require("../utils/appHelper");
const PAGE_SIZE = +process.env.CUSTOMER_PAGE_SIZE || 10;
let CustomersService = class CustomersService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async findAll(page, user_id) {
        const where = {};
        if (user_id && !isNaN(+user_id))
            where.user_id = +user_id;
        else
            throw new common_1.BadRequestException();
        const [items, count] = await this.customerRepository.findAndCount({
            take: PAGE_SIZE,
            skip: (page - 1) * PAGE_SIZE,
            order: {
                id: 'DESC',
            },
            where,
        });
        return {
            count,
            page,
            page_size: PAGE_SIZE,
            items,
        };
    }
    async findOne(productId) {
        const item = await this.customerRepository.findOne({
            where: { id: productId },
            relations: {
                invoices: true,
            },
        });
        if (!item)
            throw new common_1.NotFoundException('Customer not found');
        return item;
    }
    async search(q, user_id) {
        const where = {};
        if (user_id && !isNaN(+user_id))
            where.user_id = +user_id;
        else
            throw new common_1.BadRequestException();
        where.customer_name_ascii = (0, typeorm_2.Like)(`%${(0, appHelper_1.convertToEn)(q)}%`);
        const items = await this.customerRepository.find({ where });
        if (items.length)
            return items;
        return [];
    }
    async create(dto) {
        const foundedItem = await this.customerRepository.findOne({
            where: { phone_number: dto.phone_number },
        });
        if (foundedItem)
            throw new common_1.ConflictException('Phone number had taken');
        const item = new customer_entity_1.Customer(dto);
        const newItem = await this.customerRepository.save(item);
        return newItem;
    }
    async update(updateDto, id) {
        return await this.customerRepository.update(id, updateDto);
    }
    async delete(id) {
        const item = await this.customerRepository.findOne({
            where: { id },
        });
        if (!item)
            throw new common_1.NotFoundException('Customer not found');
        return await this.customerRepository.delete({ id });
    }
};
exports.CustomersService = CustomersService;
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomersService);
//# sourceMappingURL=customers.service.js.map