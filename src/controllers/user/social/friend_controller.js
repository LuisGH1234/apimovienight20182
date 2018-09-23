const mysqlConnection = require('../../../config/database');

exports.getFriends = (request, response) => {
    const { user_id } = request.params;
    console.log(`param: ${user_id}`);
    let sql = `SELECT * FROM friendships WHERE user_id = ?`;
    mysqlConnection.query(sql, [user_id], (error, friends, fields) => {
        if(!error) response.json(friends);
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
        if(!error) response.json({status: `done`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addFriend = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let post = { "user_id": user_id,
                    "friend_id": friend_id } = request.body;
    post.confirmed = false;
    let sql = `INSERT INTO friendships SET ?`;
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error) response.json({status: `done`});
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
    mysqlConnection.query(sql, [confirmed], (error, rows, fields) => {
        if(!error) response.json({status: `Friend Confirmed`});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};
