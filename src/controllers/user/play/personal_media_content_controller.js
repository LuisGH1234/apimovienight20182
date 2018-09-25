const mysqlConnection = require('../../../config/database');

exports.getPersonalMediaContent = (request, response) => {
    const { personal_playlist_id } = request.params;
    let sql = `SELECT * FROM personal_media_contents WHERE personal_playlist_id = ?`;
    mysqlConnection.query(sql, [personal_playlist_id], (error, rows, fields) => {
       if(!error){
           response.json(rows);
       } else {
           console.log(error);
           response.json({status: "error"});
       }
    });
};

exports.deletePersonalMediaContent = (request, response) => {
    const { id } = request.params;
    let sql = `DELETE FROM personal_media_contents WHERE id = ?`;
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error){
            response.json({status: "done"});
        } else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addPersonalMediaContent = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    //title, year, personal_playlist_id, image_url
    let sql = `INSERT INTO personal_media_contents SET ?`;
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error) response.json({status: "done"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};