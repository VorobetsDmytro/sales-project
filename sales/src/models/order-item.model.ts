import { DataTypes, Model } from "sequelize";
import { IContainer } from "../container";
import { OrderModel } from "./order.model";

export class OrderItemModel extends Model {
  declare id: number;
  declare orderId: number;
  declare productId: number;
  declare quantity: string;
  declare unitPrice: number;
}

export function declareModel(di: IContainer) {
  OrderItemModel.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    }, orderId: {
        type: DataTypes.BIGINT,
        references: {
            model: OrderModel,
            key: 'id',
        },
    }, productId: {
        type: DataTypes.BIGINT,
    }, quantity: {
        type: DataTypes.STRING,
    }, unitPrice: {
        type: DataTypes.FLOAT,
    },
  }, {
      sequelize: di.dbInstance,
      modelName: 'orderItems',
      timestamps: false,
  });
  return OrderItemModel;
}
