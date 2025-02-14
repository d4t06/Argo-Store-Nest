import { ProductUnit } from './entities/product-unit.entity';
import { Repository } from 'typeorm';
import { CreateProductUnitDto } from './dtos/create-product-unit.dto';
import { UpdateProductUnitDto } from './dtos/update-product-unit.dto';
export declare class ProductUnitsService {
    private readonly productUnitRepository;
    constructor(productUnitRepository: Repository<ProductUnit>);
    create(dto: CreateProductUnitDto): Promise<ProductUnit>;
    update(updateDto: UpdateProductUnitDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
