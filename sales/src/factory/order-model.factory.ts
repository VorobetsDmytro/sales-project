import { OrderEntity } from "../entities/order.entity";
import { OrderModel } from "../models/order.model";
import { EntityModelFactory } from "./entity-model.factory";

export class OrderModelFactory
  implements EntityModelFactory<OrderModel, OrderEntity>
{
  createModel(entity: OrderEntity): OrderModel {
    return new OrderModel({
      id: entity.id,
      customerId: entity.customerId,
      orderDate: entity.orderDate,
      total: entity.total,
      items: entity.items,
    });
  }
  createEntity(model: OrderModel): OrderEntity {
    return new OrderEntity(
      model.id,
      model.customerId,
      model.orderDate,
      model.total,
      model.items
    );
  }
}
