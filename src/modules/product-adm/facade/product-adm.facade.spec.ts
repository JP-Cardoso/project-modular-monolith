import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../repository/product.model";
import ProductRepository from "../repository/product.repository";
import AddProductUseCase from "../use-case/add-product/add-product-usecase";
import ProductAdmFacade from "./product-adm.facade";
import ProductAdmFacadeFactory from "../factory/facade.factory";

describe('Product adm facade test', () => {
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

    it('should create a product', async () => {
        // const productRepo = new ProductRepository();
        // const addProductUseCase = new AddProductUseCase(productRepo);
        // const profuctfacade = new ProductAdmFacade({
        //     addUseCase: addProductUseCase,
        //     stockUseCase: undefined
        // });

        const factoryProductFacade = ProductAdmFacadeFactory.create()

        const input = {
            id: "1",
            name: "Product 1",
            description: "Product 1 descripion",
            purchasePrice: 100,
            stock: 10,
        };

        await factoryProductFacade.addProduct(input);

        const product = await ProductModel.findOne({
            where: { id: input.id }
        });

        expect(product).toBeDefined();
        expect(product.id).toBe(input.id);
        expect(product.id).toEqual(input.id);
        expect(product.name).toEqual(input.name);
        expect(product.description).toEqual(input.description);
        expect(product.purchasePrice).toEqual(input.purchasePrice);
        expect(product.stock).toEqual(input.stock);
    });

    it('should check a product stock', async () => {
        const factoryProductFacade = ProductAdmFacadeFactory.create()

        const input = {
            id: "1",
            name: "Product 1",
            description: "Product 1 descripion",
            purchasePrice: 100,
            stock: 10,
        };

        await factoryProductFacade.addProduct(input);

        const result = await factoryProductFacade.checkStock({ productId: "1" });

        expect(result.productId).toBe(input.id);              
        expect(result.stock).toEqual(input.stock);
    })
})