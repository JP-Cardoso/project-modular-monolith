import BaseEntity from "../../@shared/domain/entity/base.entity"
import Id from "../../@shared/domain/value-object/id.value-object"

type ProductProps = {
    id?: Id
    name: string
    price: number
}

export default class Product extends BaseEntity {

    private _name: string;
    private _price: number;

    constructor(input: ProductProps) {
        super(input.id);
        this._name = input.name;
        this._price = input.price;
    };

    get name(): string {
        return this._name;
    };
    
    get price(): number {
        return this._price;
    };
}