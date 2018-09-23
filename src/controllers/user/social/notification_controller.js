const mysqlConnection = require('../../../config/database');

exports.listNotification = (request, response) => {
    const { reciever_id } = request.params;
    let sql = `SELECT * FROM notifications WHERE reciever_id = ?`;
    mysqlConnection.query(sql, [reciever_id], (error, rows, fields) => {
        if(!error) response.json(rows);
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteNotification = (request, response) => {
    const { id } = request.body;
    let sql = `DELETE FROM notifications WHERE id = ?`;
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error) response.json({status: "done"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.addNotification = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let post = { "reciever_id": reciever_id,
                    "sender_id": sender_id,
                    "description": description } = request.body;
    post.date = new Date();
    let sql = `INSERT INTO notifications SET ?`;
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error) response.json({status: "done"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};
