import { DataTypes, Model } from "sequelize";
import { IContainer } from "../container";
import { OrderItemModel } from "./order-item.model";

export class OrderModel extends Model {
  declare id: number;
  declare customerId: number;
  declare orderDate: Date;
  declare total: number;
  declare items: OrderItemModel[];
}

export function declareModel(di: IContainer) {
  OrderModel.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    }, customerId: {
        type: DataTypes.BIGINT,
    }, orderDate: {
        type: DataTypes.DATE,
    }, total: {
        type: DataTypes.FLOAT,
    }
}, {
    sequelize: di.dbInstance,
    modelName: 'orders',
    timestamps: false,
});
  return OrderModel;
}
