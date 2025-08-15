require('dotenv').config();

const mysql = require('mysql2'); 

class DatabaseMsql {

    constructor() {
        this.connection = mysql.createConnection({
            host: process.env.MYSQL_DB_HOST,
            port: process.env.MYSQL_DB_PORT,
            user: process.env.MYSQL_DB_USER,
            password: process.env.MYSQL_DB_PASSWORD,
            database: process.env.MYSQL_DB_NAME,
        });

        this.connection.connect((err) => {
            if (err) {
                console.error('Error al conectarse a la base de datos', err);
                return;
            }
            console.log('Se conectó a la base de datos MySQL');
        });
    }

    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                if (err) {
                    return reject(err);
                }
                resolve(result);
            });
        });
    }

    close() {
        return new Promise((resolve, reject) => {
            this.connection.end(err => {
                if (err) {
                    return reject(err);
                }
                resolve();
            });
        });
    }

    // Insertar datos
    insert(table, data) {
        return this.query(`INSERT INTO ${table} SET ?`, data);
    }

    // Actualizar datos
    update(table, data, id, idName) {
        return this.query(`UPDATE ${table} SET ? WHERE ${idName} = ?`, [data, id]);
    }

    // Eliminar datos
    delete(table, id, idName) {
        return this.query(`DELETE FROM ${table} WHERE ${idName} = ?`, [id]);
    }
}

module.exports = new DatabaseMsql();

//module.exports = { DatabaseMsql }
