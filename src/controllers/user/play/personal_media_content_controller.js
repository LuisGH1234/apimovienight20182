const mysqlConnection = require('../../../config/database');

exports.getPersonalMediaContent = (request, response) => {
    const { personal_playlist_id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        let sql = `SELECT * FROM personal_media_contents WHERE personal_playlist_id = ?`;
        connection.query(sql, [personal_playlist_id], (error, rows, fields) => {
            if(!error) response.json(rows);
            else {
                console.log(error);
                response.json({status: "error"});
            }
        });
    });
};

exports.deletePersonalMediaContent = (request, response) => {
    const { id } = request.params;
    request.getConnection((error, connection) => {
        if(error) throw error;
        let sql = `DELETE FROM personal_media_contents WHERE id = ?`;
        connection.query(sql, [id], (error, rows, fields) => {
            if(!error) response.json({status: "done"});
            else {
                console.log(error);
                response.json({status: "error"});
            }
        });
    });

};

exports.addPersonalMediaContent = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let post = {"title": title,
                "year": year,
                "personal_playlist_id": personal_playlist_id } = request.body;
    let sql = `INSERT INTO personal_media_contents SET ?`;
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error) response.json({status: "done"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};