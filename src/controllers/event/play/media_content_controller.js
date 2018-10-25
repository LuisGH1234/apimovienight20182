const mysqlConnection = require('../../../config/database');

exports.getMediaContentsByPlaylist = (request, response) => {
    const { event_id, playlist_id } = request.params;
    let sql = `select m.id, m.title, m.year, m.image_url ` +
            `from media_contents m left join playlists p on m.playlist_id=p.id ` +
            `where p.event_id=? and m.playlist_id=?`;
    mysqlConnection.query(sql, [event_id, playlist_id], (error, rows, fields) => {
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
    //playlist_id, title, year, image_url
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