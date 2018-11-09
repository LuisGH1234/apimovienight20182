const mysqlConnection = require('../../../config/database');

exports.getRoles = (request, response) => {
    let sql = 'SELECT * FROM roles';
    mysqlConnection.query(sql, (error, rows, fiels) => {
        if(!error){
            let retu = {
                status: "ok",
                list: rows
            };
            response.json(retu);
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};