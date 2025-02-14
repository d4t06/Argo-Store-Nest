import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dtos/create-product.dto';
import { UpdateProductDto } from './dtos/update-product.dto';
export declare class ProductsService {
    private readonly productRepository;
    constructor(productRepository: Repository<Product>);
    findAll(page: number, user_id: string): Promise<{
        count: number;
        page: number;
        page_size: number;
        products: Product[];
    }>;
    findOne(productId: number): Promise<Product>;
    search(q: string, user_id: string): Promise<Product[]>;
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(updateDto: UpdateProductDto, id: number): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
