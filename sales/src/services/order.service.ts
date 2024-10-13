import BaseContext from "../base-context";
import { API_PATHS } from "../constants/http.constants";

export class OrderService extends BaseContext {
    async getOrdersByCustomerId(customerId: number) {
        let orders = await this.di.orderRepopository.getOrdersByCustomerId(customerId);
        const customerIds = orders.reduce((acc: number[], order) => {
            if (!acc.includes(order.customerId)) {
                acc.push(order.customerId);
            }
            return acc;
        }, []);
        const productIds = orders.reduce((acc: number[], order) => {
            let productIds = order?.items?.map((item: any) => item.productId) || [];
            productIds = productIds.filter((id: number) => !acc.includes(id));
            return [...acc, ...productIds];
        }, []);
        const customersPromise = this.di.httpService.sendRequest<any, []>(API_PATHS.customer.getAllCustomers(), 'post', { ids: customerIds });
        const productsPromise = this.di.httpService.sendRequest<any, []>(API_PATHS.products.getAllProducts(), 'post', { ids: productIds });
        const [customers, products] = await Promise.all([customersPromise, productsPromise]);
        orders = orders.map((order: any) => {
            const customer = customers.find((c: any) => c.id === order.customerId);
            const items = order.items.map((item: any) => {
                const product = products.find((p: any) => p.id === item.productId);
                return {
                    ...item.get(),
                    product,
                };
            });
            return {
                ...order.toDto(),
                customer,
                items
            };
        } );
        return orders;
    }
}
