const mysqlConnection = require('../../../config/database');

exports.getRoles = (request, response) => {
    let sql = 'SELECT * FROM roles';
    mysqlConnection.query(sql, (error, rows, fiels) => {
        if(!error){
            response.json(rows);
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};