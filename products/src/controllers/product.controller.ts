import { GET, POST, route } from "awilix-express";
import BaseContext from "../base-context";
import { Request, Response } from "express";
import { GetAllProductsDto } from "../dto/get-all-products.dto";

@route('/products')
export default class ProductController extends BaseContext {
    @route('/:id')
    @GET()
    async getProductById(req: Request, res: Response) {
        const product = await this.di.productService.getProductById(+req.params.id);
        res.json(product)
    }

    @route('/')
    @POST()
    async getAllProducts(req: Request<{}, {}, GetAllProductsDto>, res: Response) {
        const ids = req.body.ids;
        const products = await this.di.productService.getAllProducts(ids);
        res.json(products)
    }

}