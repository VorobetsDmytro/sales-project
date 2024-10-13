import BaseContext from "../base-context";

export class CustomerRepopository extends BaseContext {
    async getOneById(id: number) {
        const customer = await this.di.customerModel.findByPk(id);
        if (!customer) {
            throw new Error('Customer not found');
        }
        return this.di.customerModelFactory.createEntity(customer);
    }

    async getAllCustomers(ids?: number[]) {
        const customers = await this.di.customerModel.findAll({
            ...(ids && {
                where: { id: ids } 
            })
        });
        return customers.map(this.di.customerModelFactory.createEntity);
    }
}
