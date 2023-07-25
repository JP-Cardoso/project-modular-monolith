import UseCaseInterface from "../../../@shared/use-case/use-case.interface";
import ProductGataway from "../../gateway/product.gateway";

export default class FindAllUseCase implements UseCaseInterface {

    private _productRepo: ProductGataway

    constructor(repo: ProductGataway) {
        this._productRepo = repo;
    };

    async execute(): Promise<any> {
        const products = await this._productRepo.findAll();

        return {
            products: products.map((product) => ({
                id: product.id.id,
                name: product.name,
                description: product.description,
                salesPrice: product.salesPrice,
            }))
        }
    }


}