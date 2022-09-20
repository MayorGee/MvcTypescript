import mysql from 'mysql-await';
import Environment from './models/Environment.js';

export default class Database {
    static connection = null;

    static getConnection() {
        const environment = new Environment();

        if (this.connection) {
            return this.connection;
        }

        this.connection = mysql.createConnection({
            host: environment.getDatabaseHost(),
            user: environment.getDatabaseUser(),
            password: environment.getDatabasePassword(),
            database: environment.getDatabaseName()
        })

        this.connection.connect();
        return this.connection;
    }

    static async runQuery(query) {
        const connection = Database.getConnection();

        return connection.awaitQuery(query);
    }
}