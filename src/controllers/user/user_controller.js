const mysqlConnection = require('../../config/database');

exports.getUsers = async (request, response) => {
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
    let sql = `SELECT u.user_code, u.phone, u.firstname, u.lastname, u.email, u.image_url FROM users u WHERE id = ?`;
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
        return response.json({status: "invalid JSON"});
    }
    let sql = `INSERT INTO users SET ?`;
    delete request.body.id;
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error) {
            response.json({status: "ok"});
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.updateUser = (request, response) => {
    if(!request.body){
        return response.json({status: "invalid JSON"});
    }
    const { id } = request.params;
    let sql = `UPDATE users SET ? WHERE id = ?`;
    delete request.body.id;
    delete request.body.user_code;
    delete request.body.email;
    delete request.body.password;
    mysqlConnection.query(sql, [request.body, id], (error, rows, fields) => {
        if(!error){
            return response.json({status: "ok"});
        } else {
            console.log(error);
            return response.json({status: "error"});
        }
    });
};
