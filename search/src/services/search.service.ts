import BaseContext from "../base-context";
import { API_PATHS } from "../constants/http.constants";

export class SearchService extends BaseContext {
    async getCustomerOrdersByCustomerId(customerId: number) {
        return this.di.httpService.sendRequest(API_PATHS.orders.getCustomerOrders(customerId));
    }

    async getProductById(productId: number) {
        return this.di.httpService.sendRequest(API_PATHS.products.getProductById(productId));
    }

    async getAllProducts() {
        return this.di.httpService.sendRequest(API_PATHS.products.getAllProducts(), 'post');
    }

    async getCustomerById(customerId: number) {
        return this.di.httpService.sendRequest(API_PATHS.customers.getCustomerById(customerId));
    }

    async getAllCustomers() {
        return this.di.httpService.sendRequest(API_PATHS.customers.getAllCustomers(), 'post');
    }
}
