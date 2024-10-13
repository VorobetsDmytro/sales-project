import { GET, POST, route } from "awilix-express";
import BaseContext from "../base-context";
import { Request, Response } from "express";
import { GetAllCustomersDto } from "../dto/get-all-customers.dto";

@route('/customers')
export default class CustomerController extends BaseContext {
    @route('/:id')
    @GET()
    async getOneById(req: Request, res: Response) {
        try {
            const customer = await this.di.customerService.getOneById(+req.params
                .id);
            res.json(customer.toDto());
        } catch (error) {
            res.status(404).json({ message: error });
        }
    }

    @POST()
    async getAllCustomers(req: Request<{}, {}, GetAllCustomersDto>, res: Response) {
        const ids = req.body.ids;
        const customers = await this.di.customerService.getAllCustomers(ids);
        res.json(customers.map((c: any) => c.toDto()));
    }
}