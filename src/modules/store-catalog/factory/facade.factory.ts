import StoreCatalogFacade from "../facade/store-catalog.facade";
import ProductRepository from "../repository/product.repository";
import FindAllUseCase from "../use-case/find-all-products/find-all-products.usecase";
import FindProductUseCase from "../use-case/find-one-products/find-product.usecase";

export default class StoreCatalogFacadeFactory {
    static create(): StoreCatalogFacade {
        const productRepo = new ProductRepository();
        const findUseCase = new FindProductUseCase(productRepo);
        const findAllUseCAse = new FindAllUseCase(productRepo);

        const facade = new StoreCatalogFacade({
            findUseCase: findUseCase,
            findAllUseCase: findAllUseCAse,
        });

        return facade;
    }
}