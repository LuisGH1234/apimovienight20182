const mysqlConnection = require('../../../config/database');

exports.getPersonalMediaContents = (request, response) => {
    const { p_play_id, user_id } = request.params;
    let sql = `SELECT pmc.id 'id', pmc.title 'title', pmc.year 'year', pmc.image_url 'image_url', pmc.imdb_id ` +
        `FROM personal_media_contents pmc left join personal_playlists pp on pmc.personal_playlist_id = pp.id ` +
			`left join users u on pp.user_id = u.id ` +
            `WHERE pp.id = ? and u.id = ?`;
    mysqlConnection.query(sql, [p_play_id, user_id], (error, rows, fields) => {
       if(!error){
           let retu = {};
           retu.status = "ok";
           retu.personal_media_contents = rows;
           response.json(retu);
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
            response.json({status: "ok"});
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
        if(!error) response.json({status: "ok"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};