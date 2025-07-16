import { Router } from 'express';
import fakestoreProductModule from '../modules/fakestore.product.module';
import productController from '../controllers/product.controller';

export interface RouterInterface {
    routes(): void;
}

class IndexRoutes implements RouterInterface {

    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    };

    public routes(): void {
        this.router.get('/', productController.getAll)
        this.router.get('/:id', productController.getById)
    };

}

export default new IndexRoutes().router;