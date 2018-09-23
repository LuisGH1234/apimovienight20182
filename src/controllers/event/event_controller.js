const mysqlConnection = require('../../../config/database');

exports.getEventsByUser = (request, response) => {
    const { id } = request.params;
    let sql = `SELECT u.id 'userID', pe.id 'participantsEventsID', e.id 'eventID' 
                FROM users u INNER JOIN participant_events pe ON u.id = pe.user_id
				INNER JOIN events e ON e.id = pe.event_id 
                WHERE u.id = ?`;
    mysqlConnection.query(sql, [id], (error, events, fields) =>{
        if(!error) response.json(events);
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
        "name": name,
        "location": location,
        "date": date
    } = request.body;
    let sql = 'INSERT INTO events SET ?';
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
    let { name, location, date } = request.body;
    let sql = `UPDATE events SET name = ?, location = ?, date = ? WHERE id = ?`;
    mysqlConnection.query(sql, [name,location,date,id], (error, rows, fields) => {
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
