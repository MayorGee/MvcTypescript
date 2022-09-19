import dotenv from 'dotenv';
dotenv.config();

export default class Environment {
    getDatabaseHost() {
        return process.env.DB_HOST;
    }

    getDatabaseUser() {
        return process.env.DB_USER;
    }

    getDatabasePassword() {
        return process.env.DB_PASSWORD;
    }

    getDatabaseName() {
        return process.env.DB_NAME;
    }
}