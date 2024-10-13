import { CustomerEntity } from "../entities/order.entity";
import { CustomerModel } from "../models/customer.model";
import { EntityModelFactory } from "./entity-model.factory";

export class CustomerModelFactory
  implements EntityModelFactory<CustomerModel, CustomerEntity>
{
  createModel(entity: CustomerEntity): CustomerModel {
    return new CustomerModel({
      id: entity.id,
      name: entity.name,
      address: entity.address,
    });
  }
  createEntity(model: CustomerModel): CustomerEntity {
    return new CustomerEntity(
      model.id,
      model.name,
      model.address,
    );
  }
}
