import { DataTypes, Model } from "sequelize";
import { IContainer } from "../container";

export class ProductModel extends Model {
    declare id: number;
    declare name: string;
    declare price: number;
    declare inventory: number;
}

export function declareModel(di: IContainer) {
    return di.dbInstance.define('products', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL,
        },
        inventory: {
            type: DataTypes.BIGINT,
        }
    }, {
        timestamps: false,
    });
}
