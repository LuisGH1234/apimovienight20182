const mysqlConnection = require('../../../config/database');

exports.getMediaContentsByPlaylist = (request, response) => {
    const { playlist_id } = request.params;
    let sql = `SELECT * FROM media_contents WHERE playlist_id = ?`;
    mysqlConnection.query(sql, [playlist_id], (error, rows, fields) => {
        if(!error) {
            response.json(rows);
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
    let post = {
        "playlist_id": snacklist_id,
        "title": name,
        "year": trademark
    } = request.body;
    let sql = 'INSERT INTO media_contents SET ?';
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};