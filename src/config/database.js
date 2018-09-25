const mysql = require('mysql');
const Credentials = require('./databaseConfig');

/*const mysqlConnection = mysql.createConnection({
    host: myConfig.host_name//process.env.IP,
    user: myConfig.user,
    password: myConfig.password,
    database: myConfig.databaseName,
    port: myConfig.port
});*/
const myConfig = new Credentials(false);
const mysqlConnection = mysql.createConnection({
    host: myConfig.hostname,
    user: myConfig.user,
    password: myConfig.password,
    database: myConfig.database_name,
    port: Credentials.port()
});

mysqlConnection.connect((error) => {
    if(error){
        console.log(`DB: not connected\n${error}`);
        return;
    }
    console.log("DB: is connected");
});

module.exports = mysqlConnection;