/**
 * Esse cara vai dizer quais metodos teremos para falar com o mundo externo.
 * Podemo utilizar um repo que implemnte esse gateway para fazer as inserções no banco de dados.
 */

import ProductAdm from "../domain/product.entity";

export default interface ProductGateway {

    add(product: ProductAdm): Promise<void>;
    find(id: string): Promise<ProductAdm>;
}