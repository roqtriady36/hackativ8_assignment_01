import express, { Application } from 'express';

import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import configDotEnv from './configs/dotenv.config';
import db from './configs/db.config';
import productRouter from './routes/product.router';
import fakestoreProductModule from './modules/fakestore.product.module';

class App {

    public app: Application;

    constructor() {
        this.app = express();
        this.dbSync();
        this.plugins();
        this.routes();
        this.runFetchSave()
    };

    protected dbSync(): void {
        db.authenticate()
        db.sync({alter: true})
    }

    protected async runFetchSave(): Promise<void> {
        await fakestoreProductModule.fetchSave()
    }

    protected plugins(): void {
        this.app.use(express.json());
        this.app.use(cookieParser());
        this.app.use(compression());
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(morgan('dev'));
    };

    protected routes(): void {        
        this.app.use('/products', productRouter);
    };

}

const port: number = Number(configDotEnv('APP_PORT') || 3000);
const app = new App().app;

app.listen(port, () => {
    console.log(`Server running http://localhost:${port}`);
})