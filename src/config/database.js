const mysql = require('mysql');
const myConfig = require('./databaseConfig');

const mysqlConnection = mysql.createPool({
    connectionLimit: 10,
    host: myConfig.host_name(1),
    user: myConfig.user(1),
    password: myConfig.password(1),
    database: myConfig.databaseName(1),
    port: myConfig.port
});

mysqlConnection.query('SELECT 1', (err, results, fields) => {
    try {
        if (err) throw `${err}`
        else {
            console.log("DB: connected");
        }
    } catch (error) {
        console.log(`Error while connecting to DB: \n${error}`);
    }
});
//mysqlConnection.end();

/*mysqlConnection.connect(error => {
    if(error){
        console.log(`DB: not connected\n${error}`);
        return;
    }
    console.log("DB: is connected");
});

mysqlConnection.end((err) => {
    if(err) console.log("Error while endind connection:\n${err}")
});*/

module.exports = mysqlConnection;

/*
createPool

getConnection(err, conn) => conn.release

*/
