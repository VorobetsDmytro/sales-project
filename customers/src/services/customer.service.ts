import BaseContext from "../base-context";

export class CustomerService extends BaseContext {
    async getOneById(id: number) {
        return this.di.customerRepopository.getOneById(id);
    }

    async getAllCustomers(ids?: number[]) {
        return this.di.customerRepopository.getAllCustomers(ids);
    }
}
