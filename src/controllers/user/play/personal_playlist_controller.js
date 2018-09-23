const mysqlConnection = require('../../../config/database');

exports.getPersonalPlaylist = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT * FROM personal_playlists WHERE user_id = ?`;
    mysqlConnection.query(sql, [user_id], (error, rows, fields) => {
        if(!error) response.json(rows);
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deletePersonalPlaylist = (request, response) => {
    const { id } = request.params;
    let sql = `DELETE FROM personal_playlists WHERE id = ?`;
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error) response.json({status: "done"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addPersonalPlayList = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let post = { "user_id": user_id,
                    "name": name,
                    "description": description } = request.body;
    let sql = `INSERT INTO personal_playlists SET ?`;
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error) response.json({status: "done"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.updatePersonalPlaylist = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    const { id } = request.params;
    const { name, description } = request.body;
    let sql = `UPDATE friendships SET name = ?, description = ? WHERE id = ?`;
    mysqlConnection.query(sql, [name,description,id], (error, rows, fields) => {
        if(!error) response.json({status: `done`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

