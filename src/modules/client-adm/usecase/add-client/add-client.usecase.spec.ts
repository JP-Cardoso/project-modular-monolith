import AddClientUseCase from "./add-client.usecase";

const MockRepository = () => {
    return {
        find: jest.fn(),
        add: jest.fn()
    };
};

describe('Add client Usecase unit test', () => {

    it('should add a client', async () => {
        const repo = MockRepository();
        const useCase = new AddClientUseCase(repo);

        const input = {
            name: "Jon Doe",
            email: "teste@teste.com.br",
            address: "Address 1"
        };

        const result = await useCase.execute(input);
       
        expect(repo.add).toHaveBeenCalled();

        expect(result.id).toBeDefined();
        expect(result.name).toBe(input.name);
        expect(result.email).toBe(input.email);
        expect(result.address).toBe(input.address);

    });
})