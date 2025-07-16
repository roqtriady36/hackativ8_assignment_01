import { Request, Response, } from "express";
import ProductService from "../models/service/product.service";

class ProductController {

    async getAll(req: Request, res: Response): Promise<Response> {
        try {
            const data = await ProductService.getAll()
            return res.status(200).json({
                status: 'SUKSES',
                message: 'List Data Products',
                data
            })
        } catch (err: any) {
            console.log(err)
            return res.status(400).json({
                status: 'ERROR-PRODUCT-01',
                error: [
                    err.message
                ]
            })
        }
    }

    async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const data = await ProductService.getDetail(BigInt(id))
            return res.status(200).json({
                status: 200,
                message: `Detail Product id ${id}`,
                data
            })
        } catch (err: any) {
            console.log(err)
            return res.status(400).json({
                status: 'ERROR-PRODUCT-02',
                error: [
                    err.message
                ]
            })
        }
    }

}

export default new ProductController();