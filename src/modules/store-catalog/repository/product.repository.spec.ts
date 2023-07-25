import { Sequelize } from "sequelize-typescript";
import ProductModel from "./product.model";
import ProductRepository from "./product.repository";

describe("product repository test", () => {

    let sequelize: Sequelize;

    beforeEach(async () => {
        sequelize = new Sequelize({
            dialect: "sqlite",
            storage: ":memory:",
            logging: false,
            sync: { force: true }
        });

        await sequelize.addModels([ProductModel]);
        await sequelize.sync();
    });

    afterEach(async () => {
        await sequelize.close();
    });

    it('should find all products', async () => {
        await ProductModel.create({
            id: "1",
            name: "Product 1",
            description: "Description 1",
            salesPrice: 1000
        });

        await ProductModel.create({
            id: "2",
            name: "Product 2",
            description: "Description 2",
            salesPrice: 2000
        });

        const productRepo = new ProductRepository();
        const product = await productRepo.findAll();


        expect(product.length).toBe(2);

        expect(product[0].id.id).toBe("1");
        expect(product[0].name).toBe("Product 1");
        expect(product[0].description).toBe("Description 1");
        expect(product[0].salesPrice).toBe(1000);

        expect(product[1].id.id).toBe("2");
        expect(product[1].name).toBe("Product 2");
        expect(product[1].description).toBe("Description 2");
        expect(product[1].salesPrice).toBe(2000);
    });

    it('should find a product', async() => {
        await ProductModel.create({
            id: "1",
            name: "Product 1",
            description: "Description 1",
            salesPrice: 1000
        });

        const productRepo = new ProductRepository();
        const product = await productRepo.find("1");
        
        expect(product.id.id).toBe("1");
        expect(product.name).toBe("Product 1");
        expect(product.description).toBe("Description 1");
        expect(product.salesPrice).toBe(1000);
    })
})