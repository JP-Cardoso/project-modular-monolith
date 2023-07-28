import Id from "../../../@shared/domain/value-object/id.value-object";
import Invoice from "../../domain/invoice";
import InvoiceGateway from "../../gateway/invoice-gateway";
import { GenerateInvoiceUseCaseInputDto, GenerateInvoiceUseCaseOutputDto } from "./generate-invoice.dto";


/**
 * type InvoiceProps = {
    id: Id;
    name: string;
    document: string;
    address: Address;
    items: Product[]; 
    createdAt?: Date;
    updatedAt?: Date;
};

 */
export default class GenerateInvoiceUseCase {

    private _invoiceRepository: InvoiceGateway;
    

    constructor(repository: InvoiceGateway) {
        this._invoiceRepository = repository;
    };

    static execute(input: GenerateInvoiceUseCaseInputDto): Promise<GenerateInvoiceUseCaseOutputDto> {

        const props = {
            id: new Id(input.id),
            name: input.name,
            document: input.document,
            address: input.address,
            items: input.items
        }
        // const result = new Invoice();

        return null
    }
}