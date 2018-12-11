const { promisify } = require('util');
const mysqlConnection = require('../../config/database');

mysqlConnection.query = promisify(mysqlConnection.query);

exports.getUsers = async (_, response) => {
    let sql = `SELECT * FROM users`;
    try {
        const users = await mysqlConnection.query(sql);
        return response.json(users);
    } catch (error) {
        console.log(error);
        return response.json({status: "error"});
    }
};

exports.getUser = async (request, response) => {
    const { id } = request.params;
    let sql = `SELECT u.user_code, u.phone, u.firstname, u.lastname, u.email, u.image_url FROM users u WHERE id = ?`;
    /*mysqlConnection.query(sql, [id], (error, users, fields) =>{
        if(!error) response.json(users[0]);
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });*/

    try {
        const users = await mysqlConnection.query(sql, [id]);
        return response.json(users[0]);
    } catch (error) {
        console.log(error);
        return response.json({status: "error"});
    }
};

/*exports.getUser2 = (request, response) => {
    const { email, password } = request.body;
    let sql = `SELECT * FROM users WHERE email = ? and password = ?`;
    mysqlConnection.query(sql, [email,password], (error, users, fields) =>{
        if(!error) response.json(users[0]);
        else {
            console.log(error);
            esponse.json({status: "error"});
        }
    });
};*/

exports.getHome = async (request, response) => {
    const { id } = request.params;
    let sql = `call listarHome(?)`;
    /*mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            let retu = {
                status: "ok",
                list: rows[0]
            };
            return response.json(retu);
        } else {
            return response.json({ status: "error" });
        }
    });*/

    try {
        const rows = await mysqlConnection.query(sql, [id]);
        const retu = {
            status: "ok",
            list: rows[0]
        };
        return response.json(retu);
    } catch (error) {
        console.log(error);
        return response.json({status: "error"});
    }
};

exports.addUser = async (request, response) => {
    if(!request.body){
        return response.json({status: "invalid JSON"});
    } 

    let sql = `INSERT INTO users SET ?`;
    delete request.body.id;
    /*mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error) {
            response.json({status: "ok"});
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });*/

    try {
        await mysqlConnection.query(sql, request.body);
        return response.json({status: "ok"});
    } catch (error) {
        console.log(error);
        return response.json({status: "error"});
    }
};

exports.updateUser = async (request, response) => {
    if(!request.body){
        return response.json({status: "invalid JSON"});
    }
    const { id } = request.params;
    let sql = `UPDATE users SET ? WHERE id = ?`;
    delete request.body.id;
    delete request.body.user_code;
    delete request.body.email;
    delete request.body.password;
    /*mysqlConnection.query(sql, [request.body, id], (error, rows, fields) => {
        if(!error){
            return response.json({status: "ok"});
        } else {
            console.log(error);
            return response.json({status: "error"});
        }
    });*/

    try {
        await mysqlConnection.query(sql, [request.body, id]);
        return response.json({status: "ok"});
    } catch (error) {
        console.log(error);
        return response.json({status: "error"});
    }
};
