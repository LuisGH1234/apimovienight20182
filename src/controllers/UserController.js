//const userController = {};

exports.listUsersJSON = (request, response) => {
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `SELECT * FROM User`;
        connection.query(sql, (error, Users) => {
            if(error){
                response.json(error);
            }
            response.json(Users);
        });
    });
};

//BeginOf: Friend
exports.listFriendJSON = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `SELECT * FROM Friend WHERE IDUser = ${id}`;
        connection.query(sql, (error, Friends) => {
            if(error){
                response.json(error);
            }
            response.json(Friends);
        });
    });
};

exports.deleteFriend = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `DELETE FROM Friend WHERE IDFriendShip = ${id}`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log(`Number of records deleted: ${result.affectedRows}`);
            response.json({ message: 'Deleted' });
        });
    });
};
exports.addFriend = (request, response) => {
    const data = request.query;
    if (!data){
        response.json({message: 'ADD Friend: invalid Query'});
    }
    request.getConnection((error, connection) => {
        if(error) throw error;
        connection.query('INSERT INTO Friend set ?', [data], (error, customer) => {
            if(error) throw error;
            response.json({message: 'ADD Friend: Successfully Inserted'});
        });
    });
};
//EndOf: Friend

//BeginOf: Notification
exports.listNotificationJSON = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `SELECT * FROM Notification WHERE IDReciever = ${id}`;
        connection.query(sql, (error, Notifications) => {
            if(error){
                response.json(error);
            }
            response.json(Notifications);
        });
    });
};

exports.deleteNotification = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `DELETE FROM Notification WHERE IDNotification = ${id}`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log(`Number of records deleted: ${result.affectedRows}`);
            response.json({ message: 'Deleted' });
        });
    });
};

exports.addNotification = (request, response) => {
    const data = request.query;
    if (!data){
        response.json({message: 'ADD Notification: invalid Query'});
    }
    request.getConnection((error, connection) => {
        if(error) throw error;
        connection.query('INSERT INTO Notification set ?', [data], (error, customer) => {
            if(error) throw error;
            response.json({message: 'ADD Notification: Successfully Inserted'});
        });
    });
};
//EndOf: Notification

//module.exports.userController = userController;