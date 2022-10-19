import mysql, { Connection } from 'mysql-await';
import Environment from './models/Environment.js';

export default class Database {
    private static connection: Connection;

    public static getConnection(): Connection {
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

    public static async runQuery<T>(query: string): Promise<T> {
        const connection = Database.getConnection();

        return connection.awaitQuery<T>(query);
    }
}