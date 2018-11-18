const mysqlConnection = require('../../../config/database');

exports.listNotification = (request, response) => {
    const { user_id } = request.params;
    let sql = `SELECT n.id, n.date, n.sender_id, n.description FROM notifications n WHERE reciever_id = ?`;
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
    mysqlConnection.end((err) => {
        if(err) console.log("Error while endind connection:\n${err}");
    });
};

exports.deleteNotification = (request, response) => {
    const { id } = request.params;
    let sql = `DELETE FROM notifications WHERE id = ?`;
    mysqlConnection.query(sql, [id], (error, rows, fields) => {
        if(!error) response.json({status: "ok"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
    mysqlConnection.end((err) => {
        if(err) console.log("Error while endind connection:\n${err}");
    });
};

exports.addNotification = (request, response) => {
    if (!request.body)
        response.json({message: 'invalid JSON'});
    let post = request.body;
    post.date = new Date();
    let sql = `INSERT INTO notifications SET ?`;
    mysqlConnection.query(sql, post, (error, rows, fields) => {
        if(!error) response.json({status: "ok"});
        else {
            console.log(error);
            response.json({status: "error"});
        }
    });
    mysqlConnection.end((err) => {
        if(err) console.log("Error while endind connection:\n${err}");
    });
};
