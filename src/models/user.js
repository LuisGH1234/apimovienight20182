const mysqlConnection = require('../config/database');

class User{
    constructor(user){
        this.mysqlConn = require('../config/database');
        this._user = user;
    }

    static exist(email, callback){
        let sql = 'SELECT * FROM users WHERE email = ?';
        mysqlConnection.query(sql, [email], (error, users, fields) => {
            callback(error, users.length > 0);
        });
    }

    static save(user, callback){
        let sql = `INSERT INTO users SET ?`;
        mysqlConnection.query(sql, user, (error, rows, fields) => {
            callback(error);
        });
    }
    static find(email, callback) {
        
        /*mysqlConnection.query(sql, [email], (error, rows, fields) => {
            callback(error, rows[0]);
        });*/

        return new Promise((resolve, reject) => {
            try {
                let sql = `SELECT * FROM users WHERE email = ?`;
                mysqlConnection.query(sql, [email], (error, rows, fields) => {
                    if(!error){
                        resolve(rows[0]);
                    } else {
                        reject({ error, status: 401 });
                    }
                });
            } catch (error) {
                reject({ error, status: 500 });
            }
        });
    }
}

module.exports = User;