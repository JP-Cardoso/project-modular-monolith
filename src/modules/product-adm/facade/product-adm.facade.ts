/**
 * Para implementar esse cara precisaremos do caso de uso
 */
import UseCaseInterface from "../../@shared/use-case/use-case.interface";
import { AddProductFacadeInputDto, CheckStockFacedeInputDto, CheckStockFacedeOutputDto } from "./produt-adm.facade.dto";
import ProductAdmFacadeInterface from "./produt-adm.facade.interface";


export interface UseCaseProps {
    addUseCase: UseCaseInterface;
    stockUseCase: UseCaseInterface;
}

export default class ProductAdmFacade implements ProductAdmFacadeInterface {

    private _addUseCase: UseCaseInterface;
    private _checkUseCase: UseCaseInterface;

    constructor(useCasesProps: UseCaseProps) {
        this._checkUseCase = useCasesProps.stockUseCase;
        this._addUseCase = useCasesProps.addUseCase;
    }

    addProduct(input: AddProductFacadeInputDto): Promise<void> {
        return this._addUseCase.execute(input);
    }
    
    checkStock(input: CheckStockFacedeInputDto): Promise<CheckStockFacedeOutputDto> {
        return this._checkUseCase.execute(input);
    }

}