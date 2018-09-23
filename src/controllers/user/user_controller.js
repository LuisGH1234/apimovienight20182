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

//module.exports.userController = userController;