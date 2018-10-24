const mysqlConnection = require('../../../config/database');

exports.getResponsabilitiesByEvent = (request, response) => {
    const { participant_event_id } = request.params;
    let sql = `SELECT r.id, r.product_name, r.description `+
                `FROM responsabilities r ` +
                `WHERE r.participant_event_id = ?`;
    mysqlConnection.query(sql, [participant_event_id], (error, rows, fields) => {
        if(!error){
            let retu = {
                status: "ok",
                responsabilities: rows
            };
            response.json(retu);
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.getResponsabilitiesByUser = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT r.id, r.product_name, r.description ` +
                `FROM users u RIGHT JOIN participant_events pe ON u.id = pe.user_id ` +
				`RIGHT JOIN responsabilities r ON pe.id = r.participant_event_id ` +
                `WHERE u.id = ?`;
    mysqlConnection.query(sql, [user_id], (error, rows, fields) =>{
        if(!error) {
            let retu = {
                status: "ok",
                responsabilities: rows
            };
            response.json(retu);
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addResponsabilityByEvent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    //product_name, description, participant_event_id
    let post = request.body;
    let sql = 'INSERT INTO responsabilities SET ?';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteResponsability = (request, response) => {
    const { id } = request.params;
    let sql = 'DELETE FROM responsabilities WHERE id = ?';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};
