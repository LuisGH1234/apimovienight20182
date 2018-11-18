const mysqlConnection = require('../../../config/database');

exports.getSnacklistByEvent = (request, response) => {
    const { event_id } = request.params;
    let sql = `SELECT s.id, s.name, s.original, s.description FROM snacklists s WHERE event_id = ?`;
    mysqlConnection.query(sql, [event_id], (error, rows, fields) => {
        if(!error){
            let retu = {};
            retu.status = "ok";
            retu.list = rows;
            response.json(retu);
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addSnacklistByEvent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    let sql = 'INSERT INTO snacklists SET ?';
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteSnacklist = (request, response) => {
    const { id } = request.params;
    let sql = 'DELETE FROM snacklists WHERE id = ?';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.updateSnacklist = (request, response) => {
    const { id } = request.params;
    let sql = `UPDATE snacklists SET ? WHERE id = ?`;
    mysqlConnection.query(sql, [request.body, id], (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};