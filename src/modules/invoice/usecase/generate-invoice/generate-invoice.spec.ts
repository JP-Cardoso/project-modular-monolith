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
        const generateUseCase = new GenerateInvoiceUseCase(repo);

        const input =  {
            // name: string,
            // document: string,
            // street: string,
            // number: string,
            // complement: string,
            // city: string,
            // state: string,
            // zipCode: string,
            // items: {
            //     id: string,
            //     name: string,
            //     price: number,
            // }[],
        }

        const result = await generateUseCase.execute(input);
        
    })
})