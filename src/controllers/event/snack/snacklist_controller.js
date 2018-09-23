const mysqlConnection = require('../../../config/database');

exports.getSnacklistByEvent = (request, response) => {
    const { event_id } = request.params;
    let sql = `SELECT * FROM snacklists WHERE event_id = ?`;
    mysqlConnection.query(sql, [event_id], (error, rows, fields) => {
        if(!error){
            response.json(rows);
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
    let post = {
        "event_id": event_id,
        "original": original,
        "description": description
    } = request.body;
    let sql = 'INSERT INTO snacklists SET ?';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
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
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};