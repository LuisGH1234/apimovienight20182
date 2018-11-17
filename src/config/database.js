const mysql = require('mysql');
const myConfig = require('./databaseConfig');

const mysqlConnection = mysql.createConnection({
    host: myConfig.host_name(1),
    user: myConfig.user(1),
    password: myConfig.password(1),
    database: myConfig.databaseName(1),
    port: myConfig.port
});

mysqlConnection.connect((error, conn) => {
    if(error){
        conn.release();
        console.log(`DB: not connected\n${error}`);
        return;
    }
    conn.release();
    console.log("DB: is connected");
});

module.exports = mysqlConnection;
