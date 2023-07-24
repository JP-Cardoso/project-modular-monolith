/**
 * Essa é a minha fachada que vai servir de porteiro para 
 * o meu modúlo. Então quem quiser alguma informação de Product,
 * terá que falar diretamente com essa fachada
 */

import { AddProductFacadeInputDto, CheckStockFacedeInputDto, CheckStockFacedeOutputDto } from "./produt-adm.facade.dto";

export default interface ProductAdmFacadeInterface {
    addProduct(input: AddProductFacadeInputDto): Promise<void>;
    checkStock(input: CheckStockFacedeInputDto): Promise<CheckStockFacedeOutputDto>;
};