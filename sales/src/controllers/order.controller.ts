import { GET, route } from "awilix-express";
import BaseContext from "../base-context";
import { Request, Response } from "express";

@route('/orders')
export default class OrderController extends BaseContext {
    @route('/:customerId')
    @GET()
    async getOrdersByCustomerId(req: Request, res: Response) {
        const orders = await this.di.orderService.getOrdersByCustomerId(+req.params.customerId);
        res.json(orders);
    }
}