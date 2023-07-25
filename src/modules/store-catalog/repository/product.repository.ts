import Id from "../../@shared/domain/value-object/id.value-object";
import Product from "../domain/product.entity";
import ProductGataway from "../gateway/product.gateway";
import ProductModel from './product.model';

export default class ProductRepository implements ProductGataway {

    async findAll(): Promise<Product[]> {
        const products = await ProductModel.findAll();

        return products.map(
            (product) =>
                new Product({
                    id: new Id(product.id),
                    name: product.name,
                    description: product.description,
                    salesPrice: product.salesPrice,
                })
        );
    };

    async find(id: string): Promise<Product> {
        const products = await ProductModel.findOne({ where: { id } });
        
        return new Product({
            id: new Id(products.id),
            name: products.name,
            description: products.description,
            salesPrice: products.salesPrice
        })

    }

}