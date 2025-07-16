import { Router } from 'express';

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
        
    };

}

export default new IndexRoutes().router;