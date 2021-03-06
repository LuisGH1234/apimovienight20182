const mysqlConnection = require('../../../config/database');

exports.getFriends = (request, response) => {
    const { user_id } = request.params;
    console.log(`param: ${user_id}`);
    let sql = `call listarAmigos(?);`;
    mysqlConnection.query(sql, [user_id], (error, rows, fields) => {
        if(!error) {
            let retu = {
                status: "ok",
                list: rows[0]
            };
            response.json(retu);
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteFriend = (request, response) => {
    const { id } = request.params;
    let sql = `DELETE FROM friendships WHERE id = ?`;
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error) response.json({status: `ok`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addFriend = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let post = request.body;
    post.confirmed = true;
    let sql = `INSERT INTO friendships SET ?`;
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error) response.json({status: `ok`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.updateFriendConfirmed = (request, response) => {
    const { id } = request.params;
    const { confirmed } = request.body;
    let sql = `UPDATE friendships SET confirmed = ? WHERE id = ?`;
    mysqlConnection.query(sql, [confirmed, id], (error, rows, fields) => {
        if(!error) response.json({status: `ok`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};
