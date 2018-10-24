const mysqlConnection = require('../../../config/database');

exports.getMediaContentsByPlaylist = (request, response) => {
    const { playlist_id } = request.params;
    let sql = `SELECT * FROM media_contents WHERE playlist_id = ?`;
    mysqlConnection.query(sql, [playlist_id], (error, rows, fields) => {
        if(!error) {
            let retu = {};
            retu.status = "ok";
            retu.media_contents = rows;
            response.json(retu);
        } else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteMediaContent = (request, response) => {
    const { id } = request.params;
    let sql = 'DELETE FROM media_contents WHERE id = ?';
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addMediaContent = (request, response) => {
    if (!request.body) {
        response.json({message: "invalid JSON"});
        return;
    }
    //playlist_id, title, year
    let sql = 'INSERT INTO media_contents SET ?';
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};