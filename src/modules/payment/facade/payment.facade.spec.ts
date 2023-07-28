import { Sequelize } from "sequelize-typescript"
import TransactionModel from "../repository/transaction.model";
import PaymentFacadeFactory from "../factory/payment.facade.factoy";

describe('PaymentFacade unit test', () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        });

        await sequelize.addModels([TransactionModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should create a transaction', async () => {

        const facade = PaymentFacadeFactory.execute();
        const input = {
            orderId: "order-1",
            amount: 100
        };

        const output = await facade.process(input);

        console.log(output);

        expect(output.transactionId).toBeDefined();
        expect(output.status).toBe("approved");
        expect(input.orderId).toBe(output.orderId);
        expect(input.amount).toBe(output.amount);

    });
})