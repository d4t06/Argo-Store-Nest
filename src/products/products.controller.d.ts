import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
export declare class ProductsController {
    private readonly productService;
    constructor(productService: ProductsService);
    findAll(page: number, userId: string): Promise<{
        count: number;
        page: number;
        page_size: number;
        products: Product[];
    }>;
    search(q: string, userId: string): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    create(product: CreateProductDto): Promise<Product>;
    update(updateDto: UpdateProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<void>;
}
