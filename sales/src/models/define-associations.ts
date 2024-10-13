import { IContainer } from "../container";

export default function defineAssociations(di: IContainer) {
  console.log('Defining associations');
  di.orderModel.hasMany(di.orderItemModel, { as: 'items', foreignKey: 'orderId' });
  di.orderItemModel.belongsTo(di.orderModel, { foreignKey: 'orderId' });
}