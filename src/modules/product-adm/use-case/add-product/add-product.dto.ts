/**
 *Interface de entrada e saída de dados
 */

export interface AddProductInputDto {
    id?: string
    name: string,
    description: string,
    purchasePrice: number,
    stock: number,
}

export interface AddProductOuputDto {
    id: string
    name: string,
    description: string,
    purchasePrice: number,
    stock: number,
    createdAt: Date,
    updatedAt: Date,
}