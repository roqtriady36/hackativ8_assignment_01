import { Sequelize } from 'sequelize-typescript';
import configDotEnv from './dotenv.config';
import { Dialect } from 'sequelize/types/sequelize';
import ProductModel from '../models/entity/product.entity';
import CategoryModel from '../models/entity/category.entity';
import ImageModel from '../models/entity/image.entity';
import RatingModel from '../models/entity/rating.entity';

const db = new Sequelize({
    database: configDotEnv('DB_NAME') as string,
    username: configDotEnv('DB_USER') as string,
    password: configDotEnv('DB_PASSWORD') as string,
    host: configDotEnv('DB_HOST') as string,
    dialect: configDotEnv('DB_DIALECT') as Dialect,
    port: Number(configDotEnv('DB_PORT')) as number,
    logging: false,
    models: [
        CategoryModel,      
        ImageModel,
        ProductModel,
        RatingModel
    ],    
});

export default db;