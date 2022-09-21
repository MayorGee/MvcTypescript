import mysql from 'mysql-await';
import Environment from './models/Environment.js';

export default class Database {
    static connection = null;

    static getConnection() {
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

    static async runQuery(query) {
        const connection = Database.getConnection();

        return connection.awaitQuery(query);
    }
}