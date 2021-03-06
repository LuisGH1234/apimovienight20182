const mysqlConnection = require('../../config/database');

exports.getEventsByUser = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT pe.id 'participant_event_id', e.id 'event_id', e.name 'name_event', e.location 'location', e.date 'date', pe.rol_id, e.latitude, e.longitude, e.image_url, e.description ` +
            `FROM participant_events pe right join events e on e.id=pe.event_id ` +
            `WHERE pe.user_id = ?`;
    mysqlConnection.query(sql, [user_id], (error, events, fields) =>{
        if(!error) {
            let retu = {};
            retu.status = "ok";
            retu.list = events;
            response.json(retu);
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addEvent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    if(!request.body.image_url) request.body.image_url = null;
    let post = [
        request.body.name,
        request.body.rol_id,
        request.body.user_id,
        request.body.image_url
    ];
    let sql = 'call insertEvent(?, ?, ?, ?)';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addParticipantToEvent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    let post = request.body;
    delete post.id;
    post.field = "empty";
    let sql = 'INSERT INTO participant_events SET ?';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.updateEvent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    const { id } = request.params;
    let sql = `UPDATE events SET ? WHERE id = ?`;
    delete request.body.id;
    delete request.body.created_by;
    let twoOrNothing = true;
    if(request.body.latitude < -90.000000 || request.body.latitude > 90.000000) twoOrNothing = false;
    if(request.body.longitude < -180.000000 || request.body.longitude > 180.000000) twoOrNothing = false;
    if(twoOrNothing == false){
        delete request.body.latitude;
        delete request.body.longitude;
    }
    mysqlConnection.query(sql, [request.body, id], (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteEvent = (request, response) => {
    const { id } = request.params;
    let sql = 'call deleteEvent (?)';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "ok"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};


