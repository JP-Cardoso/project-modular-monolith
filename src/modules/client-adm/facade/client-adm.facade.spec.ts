import { Sequelize } from "sequelize-typescript"
import { ClientModel } from "../repository/client.model";
import ClienteRepository from "../repository/client.repository";
import AddClientUseCase from "../usecase/add-client/add-client.usecase";
import ClientAdmFacade from "./client-adm.facade";
import Id from "../../@shared/domain/value-object/id.value-object";
import FindClientUseCase from "../usecase/find-client/find-client.usecase";
import ClientAdmFacadeFactory from "../factory/client-adm.facade.factory";

describe('ClientAdmFacade Test', () => {
    let sequelize: Sequelize

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        });

        await sequelize.addModels([ClientModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a client', async () => {
        //criar minha facade (vai precisar de repo, do caso de uso, o caso de uso necessita do repositorio injetado)

        const repository = new ClienteRepository();
        const addUseCase = new AddClientUseCase(repository);
        const facade = new ClientAdmFacade({
            addUseCase: addUseCase,
            findUseCase: undefined
        });

        const input = {
            id: "1",
            name: "Jhon Doe",
            email: "teste@teste.com.br",
            address: "Address 1"
        }

        await facade.add(input);

        const client = await ClientModel.findOne({ where: { id: "1" } });

        expect(client).toBeDefined();
        expect(client.name).toEqual(input.name);
        expect(client.email).toBe(input.email);
        expect(client.address).toBe(input.address);
    });

    it('should find a client', async () => {
        const facade = ClientAdmFacadeFactory.create()

        const input = {
            id: "1",
            name: "Jhon Doe",
            email: "teste@teste.com.br",
            address: "Address 1"
        }

        await facade.add(input);
        const client = await facade.find({ id: "1" });

        expect(client).toBeDefined();
        expect(client.name).toEqual(input.name);
        expect(client.email).toBe(input.email);
        expect(client.address).toBe(input.address);
    });
});