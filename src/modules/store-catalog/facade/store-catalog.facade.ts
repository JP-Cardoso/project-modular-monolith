import FindAllUseCase from "../use-case/find-all-products/find-all-products.usecase";
import FindProductUseCase from "../use-case/find-one-products/find-product.usecase";
import StoreCatalogFacadeInterface, { FindAllStoreCatalogFacadeOutputDto, FindStoreCatalogFacadeInputDto, FindStoreCatalogFacadeOutputDto } from "./store-catalog.facade.interface";

export interface UseCaseProps {
    findUseCase: FindProductUseCase;
    findAllUseCase: FindAllUseCase
}

export default class StoreCatalogFacade implements StoreCatalogFacadeInterface {

    private _findUseCase: FindProductUseCase;
    private _findAllUseCase: FindAllUseCase

    constructor(props: UseCaseProps) {
        this._findAllUseCase = props.findAllUseCase;
        this._findUseCase = props.findUseCase;
    }

    async find(id: FindStoreCatalogFacadeInputDto): Promise<FindStoreCatalogFacadeOutputDto> {
        const product = await this._findUseCase.execute(id);
        return product
    }
    async findAll(): Promise<FindAllStoreCatalogFacadeOutputDto> {
        return await this._findAllUseCase.execute()
    }
    
}