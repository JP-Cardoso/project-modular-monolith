import Product from "../domain/product.entity";

export default interface ProductGataway {
    findAll(): Promise<Product[]>;
    find(id: string): Promise<Product>;
}