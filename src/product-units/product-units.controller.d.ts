import { ProductUnitsService } from './product-units.service';
import { CreateProductUnitDto } from './dtos/create-product-unit.dto';
import { UpdateProductUnitDto } from './dtos/update-product-unit.dto';
export declare class ProductUnitsController {
    private readonly productUnitService;
    constructor(productUnitService: ProductUnitsService);
    create(dto: CreateProductUnitDto): Promise<import("./entities/product-unit.entity").ProductUnit>;
    update(updateDto: UpdateProductUnitDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
