import { Sequelize } from "sequelize-typescript";
import { ClientModel } from "./client.model";
import AddClientUseCase from "../usecase/add-client/add-client.usecase";
import ClienteRepository from "./client.repository";



describe('Client repository test', () => {

    let sequelize: Sequelize;

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

    it('should find a client', async() => {

        const repo = new ClienteRepository();

        const client = await ClientModel.create({
            id: "1",
            name: "Jon Doe",
            email: "teste@teste.com.br",
            address: "Address 1",
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const result = await repo.find(client.id);
        
        expect(result.id.id).toBe(client.id);
        expect(result.name).toBe(client.name);
        expect(result.email).toBe(client.email);
        expect(result.address).toBe(client.address);
        expect(result.createdAt).toEqual(client.createdAt);
        expect(result.updatedAt).toEqual(client.updatedAt);
    })
   
});