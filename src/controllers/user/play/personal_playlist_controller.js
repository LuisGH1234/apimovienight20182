const mysqlConnection = require('../../../config/database');

exports.getPersonalPlaylist = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT pp.id, pp.name, pp.description FROM personal_playlists pp WHERE user_id = ?`;
    mysqlConnection.query(sql, [user_id], (error, rows, fields) => {
        if(!error) {
            let retu = {
                status: "ok",
                list: rows
            };
            response.json(retu);
        }
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
        if(!error) response.json({status: "ok"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addPersonalPlayList = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let sql = `INSERT INTO personal_playlists SET ?`;
    mysqlConnection.query(sql, request.body, (error, rows, fields) => {
        if(!error) response.json({status: "ok"});
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
    let sql = `UPDATE personal_playlists SET ? WHERE id = ?`;
    mysqlConnection.query(sql, [request.body, id], (error, rows, fields) => {
        if(!error) response.json({status: `ok`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

