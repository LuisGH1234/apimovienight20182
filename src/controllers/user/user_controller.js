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

exports.getUser2 = (request, response) => {
    const { email, password } = request.body;
    let sql = `SELECT * FROM users WHERE email = ? and password = ?`;
    mysqlConnection.query(sql, [email,password], (error, users, fields) =>{
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
    let sql = `INSERT INTO users SET ?`;
    delete request.body.id;
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
