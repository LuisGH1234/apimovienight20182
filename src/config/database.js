const mysql = require('mysql');
const myConfig = require('./databaseConfig');

const mysqlConnection2 = mysql.createPool({
    connectionLimit: 10,
    host: myConfig.host_name(1),
    user: myConfig.user(1),
    password: myConfig.password(1),
    database: myConfig.databaseName(1),
    port: myConfig.port
});

mysqlConnection.connect((error) => {
    if(error){
        console.log(`DB: not connected\n${error}`);
        return;
    }
    console.log("DB: is connected");
});

module.exports = mysqlConnection;
