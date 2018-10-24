const mysqlConnection = require('../../../config/database');

exports.getPlaylistsByEvent = (request, response) => {
    const { event_id } = request.params;
    let sql = `SELECT * FROM playlists WHERE event_id = ?`;
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
    //event_id, original, description
    let sql = 'INSERT INTO playlists SET ?';
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
    mysqlConnection.query(sql, [request.body,id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};