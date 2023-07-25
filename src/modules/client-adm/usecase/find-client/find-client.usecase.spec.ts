import Id from "../../../@shared/domain/value-object/id.value-object"
import Client from "../../domain/client.entity"
import FindClientUseCase from "./find-client.usecase";

const client = new Client({
    id: new Id("1"),
    name: "Jon Doe",
    email: "teste@teste.com.br",
    address: "Street 1",
})

const MockRepository = () => {
    return {
        add: jest.fn(),
        find: jest.fn().mockReturnValue(Promise.resolve(client))
    };
};

describe('Find client Usecase unit test', () => {

    it('should add a client', async () => {
        const repo = MockRepository();
        const useCase = new FindClientUseCase(repo);

        const input = {
           id: "1"
        };

        const result = await useCase.execute(input);
        
        expect(repo.find).toHaveBeenCalled();

        expect(result.id).toEqual(input.id);
        expect(result.name).toBe(client.name);
        expect(result.email).toBe(client.email);
        expect(result.address).toBe(client.address);

    });
})