import BaseContext from "../base-context";

export class ProductService extends BaseContext {
    async getProductById(id:number): Promise<any> {
        return this.di.productRepository.getProductById(id);
    }

    async getAllProducts(ids?: number[]): Promise<any> {
        return this.di.productRepository.getAllProducts(ids);
    }
}
