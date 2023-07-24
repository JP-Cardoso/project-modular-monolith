/**
 * Para criar um novo produto você vai precisar do 
 * Repositorio
 * UseCase
 * Input
 * Output
 */

import AddProductUseCase from "./add-product-usecase";

const MockRepository = () => {
    return {
        add: jest.fn(),
        find: jest.fn(),
    }
}

describe('Add product use case unit test', () => {

    it('should add a product ', async () => {

        const productRepository = MockRepository();

        const useCase = new AddProductUseCase(productRepository);

        const input = {
            name: "Product 1",
            description: "Product 1 descripion",
            purchasePrice: 100,
            stock: 10,
        }

        const result = await useCase.execute(input);
        expect(productRepository.add).toHaveBeenCalled();
        expect(result.id).toBeDefined();
        expect(result.name).toBe(input.name);
        expect(result.description).toBe(input.description);
        expect(result.purchasePrice).toBe(input.purchasePrice);
        expect(result.stock).toBe(input.stock);
    });
});