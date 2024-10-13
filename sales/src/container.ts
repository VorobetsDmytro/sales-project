import { asClass, asFunction, asValue, createContainer } from "awilix";
import { OrderService } from "./services/order.service";
import { OrderRepopository } from "./repositories/order.repository";
import { declareModel as declareOrderItemModel, OrderItemModel } from "./models/order-item.model";
import { declareModel as declareOrderModel, OrderModel } from "./models/order.model";
import dbInstance from "./db/dbInstance";
import { OrderModelFactory } from "./factory/order-model.factory";
import defineAssociations from "./models/define-associations";
import { HttpService } from "./services/http.service";

export interface IContainer {
  dbInstance: any;
  orderService: OrderService;
  orderRepopository: OrderRepopository;
  orderItemModel: typeof OrderItemModel;
  orderModel: typeof OrderModel;
  orderModelFactory: OrderModelFactory;
  httpService: HttpService;
}
const container = createContainer()
  .register({
    dbInstance: asValue(dbInstance),
    orderService: asClass(OrderService).singleton(),
    orderRepopository: asClass(OrderRepopository).singleton(),
    orderItemModel: asFunction(declareOrderItemModel).singleton(),
    orderModel: asFunction(declareOrderModel).singleton(),
    orderModelFactory: asClass(OrderModelFactory).singleton(),
    defineAssociations: asFunction(defineAssociations).singleton(),
    httpService: asClass(HttpService).singleton(),
  });
container.resolve('defineAssociations');

export default container;
