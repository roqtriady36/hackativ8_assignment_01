import axios, { AxiosInstance } from 'axios';
import configDotEnv from '../configs/dotenv.config';

const API_FAKESTORE = (route: string): AxiosInstance => {    
    return axios.create({
        baseURL: `${configDotEnv('URL_FAKESTORE')}/${route}`,
    });
}

export default API_FAKESTORE;