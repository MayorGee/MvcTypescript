import mysql from 'mysql-await';

export default class Database {
    static connection = null;

    static getConnection() {
        if (this.connection) {
            return this.connection;
        }

        this.connection = mysql.createConnection({
            host: '127.0.0.1',
            user: 'mayowa',
            password: 'password',
            database: 'InternshipDB'
        })

        this.connection.connect();

        return this.connection;
    }

    static async runQuery(query) {
        const connection = Database.getConnection();

        return await connection.awaitQuery(query);
    }
}