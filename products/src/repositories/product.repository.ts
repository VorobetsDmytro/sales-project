import BaseContext from "../base-context";

export class ProductRepopository extends BaseContext {
    async getProductById(id: number) {
        return this.di.productModel.findByPk(id);
    }

    async getAllProducts(ids?: number[]) {
        return this.di.productModel.findAll({
            ...(ids && { where: { id: ids } }),
        });
    }
}
