/**
 * Para criar um novo produto você vai precisar do 
 * Repositorio
 * UseCase
 * Input
 * Output
 */

import GenerateInvoiceUseCase from "./generate-invoice";


const MockRepository = () => {
    return {
        find: jest.fn(),
        generate: jest.fn(),
    }
}

describe('Generate Invoice use case unit test', () => {

    it('should create a invoice', async () => {
        const repo = MockRepository();
        const generateUseCase =  new GenerateInvoiceUseCase(repo);

        const input =  {
            id: "1",
            name: "test",
            document: "15452313101",
            street: "dos Bobos",
            number: "0",
            complement: "sesi",
            city: "Franca",
            state: "SP",
            zipCode: "1440587",
            items: [{
                id: "1",
                name: "Product",
                price: 20,
            }]
        }

        const result = await generateUseCase.execute(input);
        
    })
})