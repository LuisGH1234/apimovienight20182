const mysqlConnection = require('../../config/database');

exports.getEventsByUser = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT pe.id 'participant_event_id', e.id 'event_id', e.name 'name_event', e.location 'location', e.date 'date', rol_id ` +
                `FROM users u RIGHT JOIN participant_events pe ON u.id = pe.user_id ` +
			    `RIGHT JOIN events e ON e.id = pe.event_id ` +
			    `WHERE u.id = 2`;
    mysqlConnection.query(sql, [user_id], (error, events, fields) =>{
        if(!error) {
            let retu = {};
            retu.status = "ok";
            retu.events = events;
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
    //event_id user_id rol_id field
    let post = request.body;
    post.field = "empty";
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
    /*name, location, date, id*/
    mysqlConnection.query(sql, [request.body, id], (error, rows, fields) => {
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


