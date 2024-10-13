import { POST, route } from "awilix-express";
import BaseContext from "../base-context";
import { Request, Response } from "express";
import { GetCustomerByIdDto } from "../dto/get-customer-by-id.dto";
import { GetProductByIdDto } from "../dto/get-product-by-id.dto";
import { HttpException } from "../exceptions/http.exception";

@route('/search')
export default class OrderController extends BaseContext {
    @route('/customers/orders')
    @POST()
    async getCustomerOrdersByCustomerId(req: Request<{}, {}, GetCustomerByIdDto>, res: Response) {
        const orders = await this.di.searchService.getCustomerOrdersByCustomerId(req.body.customerId);
        res.send(orders);
    }

    @route('/products')
    @POST()
    async getAllProducts(req: Request, res: Response) {
        const products = await this.di.searchService.getAllProducts();
        res.send(products);
    }

    @route('/products/byId')
    @POST()
    async getProductById(req: Request<{}, {}, GetProductByIdDto>, res: Response) {
        const product = await this.di.searchService.getProductById(req.body.productId);
        if (!product) {
            throw new HttpException('Product not found', 404);
        }
        res.send(product);
    }

    @route('/customers/byId')
    @POST()
    async getCustomerById(req: Request<{}, {}, GetCustomerByIdDto>, res: Response) {
        const customer = await this.di.searchService.getCustomerById(req.body.customerId);
        if (!customer) {
            throw new HttpException('Customer not found', 404);
        }
        res.send(customer);
    }

    @route('/customers')
    @POST()
    async getAllCustomers(req: Request, res: Response) {
        const customers = await this.di.searchService.getAllCustomers();
        res.send(customers);
    }
}