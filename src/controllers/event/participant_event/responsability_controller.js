const mysqlConnection = require('../../../config/database');

exports.getResponsabilitiesByEvent = (request, response) => {
    const { event_id } = request.params;
    let sql = `select r.id, r.product_name, r.description, pe.user_id ` +
            `from responsabilities r left join participant_events pe on r.participant_event_id=pe.id ` +
            `where pe.event_id=?`;
    mysqlConnection.query(sql, [event_id], (error, rows, fields) => {
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
    let sql = `select r.id, r.product_name, r.description ` +
            `from responsabilities r left join participant_events pe on r.participant_event_id=pe.id ` +
            `where pe.user_id=?`;
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

exports.getResponsabilitiesByUserByEvent = (request, response) => {
    const { user_id, event_id } = request.params;
    let sql = `select r.id, r.product_name, r.description ` +
            `from responsabilities r left join participant_events pe on r.participant_event_id=pe.id ` +
            `where pe.user_id=? and pe.event_id=?`;
    mysqlConnection.query(sql, [user_id, event_id], (error, rows, fields) =>{
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
