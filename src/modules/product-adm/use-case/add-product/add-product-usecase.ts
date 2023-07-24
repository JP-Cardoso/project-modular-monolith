import Id from "../../../@shared/domain/value-object/id.value-object";
import ProductAdm from "../../domain/product.entity";
import ProductGateway from "../../gateway/product.gateway";
import { AddProductInputDto, AddProductOuputDto } from "./add-product.dto";

export default class AddProductUseCase {

    private _productRepo: ProductGateway;

    constructor(productRepo: ProductGateway) {
        this._productRepo = productRepo
    }

    async execute(input: AddProductInputDto): Promise<AddProductOuputDto> {

        const props = {
            id: new Id(input.id),
            name: input.name,
            description: input.description,
            purchasePrice: input.purchasePrice,
            stock: input.stock,
        };

        const product = new ProductAdm(props);

        //add esse cara - banco - api- arquivo
        this._productRepo.add(product);

        return {
            id: product.id.id,
            name: product.name,
            description: product.description,
            purchasePrice: product.purchasePrice,
            stock: product.stock,
            createdAt: product.createdAt,
            updatedAt: product.updatedAt,
        };
    };

    
};