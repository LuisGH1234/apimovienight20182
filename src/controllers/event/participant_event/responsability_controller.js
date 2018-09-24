const mysqlConnection = require('../../../config/database');

exports.getResponsabilitiesByEvent = (request, response) => {
    const { event_id } = request.params;
    let sql = `SELECT *
                FROM events e INNER JOIN participant_events pe ON pe.event_id = e.id
				INNER JOIN responsabilities r ON r.participant_event_id = pe.id
                WHERE e.id = ?`;
    mysqlConnection.query(sql, [event_id], (error, rows, fields) => {
        if(!error){
            response.json(rows);
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.getResponsabilitiesByUser = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT u.firstname 'name', r.product_name 'product_name', r.description 'description'
                FROM users u INNER JOIN participant_events pe ON u.id = pe.user_id
				INNER JOIN responsabilities r ON pe.id = r.participant_event_id
                WHERE u.id = ?`;
    mysqlConnection.query(sql, [user_id], (error, rows, fields) =>{
        if(!error) response.json(rows);
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
    let post = {
        "product_name": product_name,
        "description": description,
        "participant_event_id": participant_event_id
    } = request.body;
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
