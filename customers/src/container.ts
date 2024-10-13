import { asClass, asFunction, asValue, createContainer } from "awilix";
import { CustomerService } from "./services/customer.service";
import { CustomerRepopository } from "./repositories/customer.repository";
import { declareModel as declareCustomerModel, CustomerModel } from "./models/customer.model";
import dbInstance from "./db/dbInstance";
import { CustomerModelFactory } from "./factory/order-model.factory";

export interface IContainer {
  dbInstance: any;
  customerService: CustomerService;
  customerRepopository: CustomerRepopository;
  customerModel: typeof CustomerModel;
  customerModelFactory: CustomerModelFactory;
}
const container = createContainer()
  .register({
    dbInstance: asValue(dbInstance),
    customerService: asClass(CustomerService).singleton(),
    customerRepopository: asClass(CustomerRepopository).singleton(),
    customerModel: asFunction(declareCustomerModel).singleton(),
    customerModelFactory: asClass(CustomerModelFactory).singleton(),
  });

export default container;
