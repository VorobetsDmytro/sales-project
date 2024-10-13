import BaseContext from "../base-context";
import { OrderEntity } from "../entities/order.entity";

export class OrderRepopository extends BaseContext {
    async getOrdersByCustomerId(customerId: number): Promise<OrderEntity[]> {
        const orders = await this.di.orderModel.findAll({
            where: {
            customerId,
            },
            include: [{
                model: this.di.orderItemModel,
                as: 'items',
            }],
        });

        return orders.map((order: any) => (
            this.di.orderModelFactory.createEntity(order)
        ));
    }
}
