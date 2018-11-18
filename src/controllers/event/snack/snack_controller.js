const mysqlConnection = require('../../../config/database');

exports.getSnacksBySnacklist = (request, response) => {
    const { event_id, snacklist_id } = request.params;
    let sql = `select s.id, s.name, s.trademark ` +
            `from snacks s left join snacklists sl on s.snacklist_id=sl.id ` +
            `where sl.event_id=? and s.snacklist_id=?`;
    mysqlConnection.query(sql, [event_id, snacklist_id], (error, rows, fields) => {
        if(!error) {
            let retu = {};
            retu.status = "ok";
            retu.list = rows;
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
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addSnack = (request, response) => {
    if (!request.body) {
        return response.json({message: "invalid JSON"});
    }
    let sql = 'INSERT INTO snacks SET ?';
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error", message: error});
        }
    });
};