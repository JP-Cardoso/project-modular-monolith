import Id from "../../../@shared/domain/value-object/id.value-object";
import Invoice from "../../domain/invoice";
import Product from "../../domain/product.entity";
import InvoiceGateway from "../../gateway/invoice-gateway";
import Address from "../../value-object/address.valueobject";
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

    async execute(input: GenerateInvoiceUseCaseInputDto): Promise<GenerateInvoiceUseCaseOutputDto> {
        console.log(input);
        const props = new Invoice({
            id: new Id(input.id),
            name: input.name,
            document: input.document,
            address: new Address({
                street: input.street,
                number: input.number,
                complement: input.complement,
                city: input.city,
                state: input.state,
                zipCode: input.zipCode,
            }),
            items: input.items.map((item) => {
                return new Product({
                    id: new Id(item.id),
                    name: item.name,
                    price: item.price,
                })
            }),
        });

        console.log(props);


        const result = await this._invoiceRepository.generate(props)
        console.log(result);

        return undefined;
    }
}