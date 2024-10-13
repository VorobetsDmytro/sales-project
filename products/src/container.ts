import { asClass, asFunction, asValue, createContainer } from "awilix";
import { ProductService } from "./services/product.service";
import { ProductRepopository } from "./repositories/product.repository";
import { declareModel as declareProductModel, ProductModel } from "./models/product.model";
import dbInstance from "./db/dbInstance";

export interface IContainer {
  dbInstance: any;
  productService: ProductService;
  productRepository: ProductRepopository;
  productModel: typeof ProductModel;
}
const container = createContainer()
  .register({
    dbInstance: asValue(dbInstance),
    productService: asClass(ProductService).singleton(),
    productRepository: asClass(ProductRepopository).singleton(),
    productModel: asFunction(declareProductModel).singleton(),
  });

export default container;
