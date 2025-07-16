import dotenv from 'dotenv';

const configDotEnv = (value: string) => {
    dotenv.config();
    return process.env[value]
}

export default configDotEnv;