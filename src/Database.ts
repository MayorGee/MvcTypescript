// @ts-ignore
import mysql from 'mysql-await';
import Environment from './models/Environment.js';

export default class Database {
    private static connection: any = null;

    public static getConnection(): any {
        if (this.connection) {
            return this.connection;
        }

        this.connection = mysql.createConnection({
            host: Environment.getDatabaseHost(),
            user: Environment.getDatabaseUser(),
            password: Environment.getDatabasePassword(),
            database: Environment.getDatabaseName()
        })

        this.connection.connect();
        return this.connection;
    }

    public static async runQuery(query: string) {
        const connection = Database.getConnection();

        return connection.awaitQuery(query);
    }
}