const mysqlConnection = require('../config/database');

class User{
    constructor(user){
        this.mysqlConn = require('../config/database');
        this._user = user;
    }

    static exist(email){
        return new Promise((resolve, reject) => {
            try {
                let sql = 'SELECT * FROM users WHERE email = ?';
                mysqlConnection.query(sql, [email], (error, users, fields) => {
                    if(error){
                        return reject({ consoleError: error, responseError: 'error' });
                    } else if (users.length > 0 == true) {
                        return reject({ consoleError: 'user already in DB', responseError: 'exist' }); //exist = true
                    }
                    resolve(); //exist = false
                });
            } catch (error) {
                reject(error);
            }
        });
    }

    static save(user){
        return new Promise((resolve, reject) => {
            try {
                let sql = `INSERT INTO users SET ?`;
                mysqlConnection.query(sql, user, (error, rows, fields) => {
                    if(error){
                        return reject({ consoleError: 'user did no successfully saved', responseError: 'error' });
                    }
                    resolve();
                });
            } catch (error) {
                reject({ error, status: 500 });
            }
        });
    }
    static find(email, callback) {
        return new Promise((resolve, reject) => {
            try {
                let sql = `SELECT * FROM users WHERE email = ?`;
                mysqlConnection.query(sql, [email], (error, rows, fields) => {
                    if(error){
                        return reject({ consoleError: error, responseError: 'error' });
                    } else if (!rows[0]) {
                        return reject({ consoleError: 'user couldnt be found', responseError: 'error' });
                    }
                    resolve(rows[0]);
                });
            } catch (error) {
                reject({ error, status: 500 });
            }
        });
    }
}

module.exports = User;