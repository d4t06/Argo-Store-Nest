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
exports.InvoicesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const invoice_entity_1 = require("./entities/invoice.entity");
const typeorm_2 = require("typeorm");
const PAGE_SIZE = +process.env.INVOICE_PAGE_SIZE || 10;
let InvoicesService = class InvoicesService {
    constructor(invoiveRepository) {
        this.invoiveRepository = invoiveRepository;
    }
    async findAll(page, user_id, customer_id) {
        const where = {};
        if (user_id && !isNaN(+user_id))
            where.user_id = +user_id;
        if (customer_id && !isNaN(+customer_id))
            where.customer_id = +customer_id;
        const [items, count] = await this.invoiveRepository.findAndCount({
            take: PAGE_SIZE,
            skip: (page - 1) * PAGE_SIZE,
            relations: {
                items: true,
                customer: true,
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
            items,
        };
    }
    async create(dto) {
        const item = new invoice_entity_1.Invoice(dto);
        const newItem = await this.invoiveRepository.save(item);
        return newItem;
    }
};
exports.InvoicesService = InvoicesService;
exports.InvoicesService = InvoicesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(invoice_entity_1.Invoice)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], InvoicesService);
//# sourceMappingURL=invoices.service.js.map