import ProductAdmFacade from "../facade/product-adm.facade";
import ProductRepository from "../repository/product.repository";
import AddProductUseCase from "../use-case/add-product/add-product-usecase";

export default class ProductAdmFacadefactory {
    static create() {
        const productRepo = new ProductRepository();
        const addProductUseCase = new AddProductUseCase(productRepo);
        const productFacade = new ProductAdmFacade({
            addUseCase: addProductUseCase,
            stockUseCase: undefined
        });

        return productFacade;
    }
}