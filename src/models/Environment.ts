// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();

export default class Environment {
    static getDatabaseHost() {
        return process.env.DB_HOST;
    }

    static getDatabaseUser() {
        return process.env.DB_USER;
    }

    static getDatabasePassword() {
        return process.env.DB_PASSWORD;
    }

    static getDatabaseName() {
        return process.env.DB_NAME;
    }
}