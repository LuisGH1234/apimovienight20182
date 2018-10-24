const mysqlConnection = require('../../../config/database');

exports.getSnacksBySnacklist = (request, response) => {
    const { snacklist_id } = request.params;
    let sql = `SELECT * FROM snacks WHERE snacklist_id = ?`;
    mysqlConnection.query(sql, [snacklist_id], (error, rows, fields) => {
        if(!error) {
            let retu = {};
            retu.status = "ok";
            retu.snacks = rows;
            response.json(retu);
        } else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteSnack = (request, response) => {
    const { id } = request.params;
    let sql = 'delete from snacks where id = ?';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addSnack = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    //snacklist_id, name, trademark
    let sql = 'INSERT INTO snacks SET ?';
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};