const mysqlConnection = require('../../../config/database');

exports.listNotification = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT n.id, n.date, n.sender_id, n.description FROM notifications n WHERE reciever_id = ?`;
    mysqlConnection.query(sql, [user_id], (error, rows, fields) => {
        if(!error) {
            let retu = {
                status: "ok",
                notifications: rows
            };
            response.json(retu);
        }
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
};

exports.deleteNotification = (request, response) => {
    const { id } = request.params;
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
    let post = request.body;
    //reciever_id, sender_id, description
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
