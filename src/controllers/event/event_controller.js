const mysqlConnection = require('../../config/database');

exports.getEventsByUser = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT pe.id 'participant_event_id', e.id 'event_id', e.name 'name_event', e.location 'location', e.date 'date' 
                FROM users u INNER JOIN participant_events pe ON u.id = pe.user_id
				INNER JOIN events e ON e.id = pe.event_id 
                WHERE u.id = ?`;
    mysqlConnection.query(sql, [user_id], (error, events, fields) =>{
        if(!error) {
            let retu = [];
            for(let i=0;i<events.length;i++){
                retu.push({
                    "participant_event_id": events[i].participant_event_id,
                    "events":{
                        "id": events[i].event_id,
                        "name": events[i].name_event,
                        "location": events[i].location,
                        "date": events[i].date
                    }
                });
            }
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
    let post = {
        "name": request.body.name,
        "location": request.body.location,
        "date": request.body.date
    };
    let sql = 'INSERT INTO events SET ?';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            //response.json({status: "done"});
            let { user_id, rol_id } = request.body;
            let sql2 = 'INSERT INTO participant_events(event_id,user_id,rol_id) VALUES(LAST_INSERT_ID(),?,?)';
            mysqlConnection.query(sql2, [user_id,rol_id], (error, rows, fields) => {
                if(!error){
                    response.json({status: "done"});
                } else{
                    console.log(error);
                    response.json({status: "error"});
                }
            });
        } else{
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
    let post = {
        "event_id": request.body.event_id,
        "user_id": request.body.user_id,
        "rol_id": request.body.rol_id,
        "field": "nada"
    };
    let sql = 'INSERT INTO participant_events SET ?';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
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
    mysqlConnection.query(sql, [/*name,location,date,id*/request.body,id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteEvent = (request, response) => {
    const { id } = request.params;
    let sql = 'DELETE FROM events WHERE id = ?';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};


