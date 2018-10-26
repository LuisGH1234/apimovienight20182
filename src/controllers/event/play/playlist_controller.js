const mysqlConnection = require('../../../config/database');

exports.getPlaylistsByEvent = (request, response) => {
    const { event_id } = request.params;
    let sql = `SELECT p.id, p.name, p.original, p.description, p.image_url FROM playlists p WHERE event_id = ?`;
    mysqlConnection.query(sql, [event_id], (error, rows, fields) => {
       if(!error){
           let retu = {};
           retu.status = "ok";
           retu.playlists = rows;
           response.json(retu);
       } else{
           console.log(error);
           response.json({status: "error"});
       }
    });
};

exports.addPlaylistByEvent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    let sql = 'INSERT INTO playlists SET ?';
    delete request.body.id;
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deletePlaylist = (request, response) => {
    const { id } = request.params;
    let sql = 'DELETE FROM playlists WHERE id = ?';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.updatePlaylist = (request, response) => {
    const { id } = request.params;
    let sql = `UPDATE playlists SET ? WHERE id = ?`;
    delete request.body.id;
    delete request.body.event_id;
    mysqlConnection.query(sql, [request.body,id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};