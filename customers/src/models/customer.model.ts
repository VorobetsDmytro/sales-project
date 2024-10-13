import { DataTypes, Model } from "sequelize";
import { IContainer } from "../container";

export class CustomerModel extends Model {
  declare id: number;
  declare name: string;
  declare address: string;
}

export function declareModel(di: IContainer) {
  CustomerModel.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    }, 
    name: {
      type: DataTypes.STRING,
    }, 
    address: {
      type: DataTypes.STRING,
    },
  }, {
    sequelize: di.dbInstance,
    modelName: 'customers',
    timestamps: false,
  });
  return CustomerModel;
}
