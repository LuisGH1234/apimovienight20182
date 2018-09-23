const mysql = require('mysql');
const myConfig = require('./databaseConfig');

const mysqlConnection = mysql.createConnection({
    host: process.env.IP,
    user: myConfig.user,
    password: myConfig.password,
    database: myConfig.databaseName,
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