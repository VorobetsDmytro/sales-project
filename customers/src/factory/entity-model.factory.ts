import { Model } from 'sequelize';

export interface EntityModelFactory<
  TModelType extends Model<any, any>,
  TEntity extends Object,
> {
  createModel(entity: TEntity): TModelType;
  createEntity(model: TModelType): TEntity;
}
