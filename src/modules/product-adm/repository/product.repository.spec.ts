import { Sequelize, UpdatedAt } from "sequelize-typescript"
import { ProductModel } from "./product.model";
import AddProductUseCase from "../use-case/add-product/add-product-usecase";
import ProductAdm from "../domain/product.entity";
import Id from "../../@shared/domain/value-object/id.value-object";
import ProductRepository from "./product.repository";

describe('Product repository test', () => {

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

        const input = {

            id: new Id("1"),
            name: "Product 1",
            description: "Product 1 descripion",
            purchasePrice: 100,
            stock: 10,
        };


        const product = new ProductAdm(input)
        const productRepo = new ProductRepository();
        const result = await productRepo.add(product);

        const productDb = await ProductModel.findOne({
            where: { id: input.id.id },
          });
      
          expect(input.id.id).toEqual(productDb.id);
          expect(input.name).toEqual(productDb.name);
          expect(input.description).toEqual(productDb.description);
          expect(input.purchasePrice).toEqual(productDb.purchasePrice);
          expect(input.stock).toEqual(productDb.stock);
    });

    it('shoould find a product', async () => {
        const productRepo = new ProductRepository();

        ProductModel.create({
            id: "1",
            name: "Product 1",
            description: "Product 1 descripion",
            purchasePrice: 100,
            stock: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        const product = await productRepo.find("1");
              
        expect(product.id.id).toEqual("1");
        expect(product.name).toEqual("Product 1");
        expect(product.description).toEqual("Product 1 descripion");
        expect(product.purchasePrice).toEqual(100);
        expect(product.stock).toEqual(10);
    });
});