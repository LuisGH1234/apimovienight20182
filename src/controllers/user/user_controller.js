//const userController = {};
const mysqlConnection = require('../../config/database');

exports.getUsers = (request, response) => {
    let sql = `SELECT * FROM users`;
    mysqlConnection.query(sql, (error, users, fields) =>{
        if(!error) response.json(users);
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.getUser = (request, response) => {
    const { id } = request.params;
    let sql = `SELECT * FROM users WHERE id = ?`;
    mysqlConnection.query(sql, [id], (error, users, fields) =>{
        if(!error) response.json(users[0]);
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addUser = (request, response) => {
    if(!request.body){
      response.json({status: "invalid JSON"});
    }
    //user_code, phone, firstname, lastname, email, password
    let sql = `INSERT INTO users SET ?`;
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error) {
            response.json({status: "done"});
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};
//module.exports.userController = userController;