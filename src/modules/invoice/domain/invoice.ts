import AggregateRoot from "../../@shared/domain/entity/aggregate-root.interface";
import BaseEntity from "../../@shared/domain/entity/base.entity";
import Id from "../../@shared/domain/value-object/id.value-object"
import Address from "../value-object/address.valueobject";
import Product from "./product.entity";

type InvoiceProps = {
    id: Id;
    name: string;
    document: string;
    address: Address;
    items: Product[]; 
    createdAt?: Date;
    updatedAt?: Date;
};

export default class Invoice extends BaseEntity implements AggregateRoot {

    private readonly _name: string;
    private readonly _document: string;
    private readonly _address: Address;
    private readonly _items: Product[];

    constructor(input: InvoiceProps) {
        super(input.id);
        this._name = input.name;
        this._document = input.document;
    }
}