//const credentials = {};

//credentials.user ="b071488dca2501"; /*"root";*/
//credentials.password = "ec20c0a1"; /*"root";*/
//credentials.port = 3306;
//credentials.databaseName = "heroku_f1cf93086df67b3"; /*"movienightdb";*/
//credentials.host_name = "us-cdbr-iron-east-01.cleardb.net"; /*process.env.IP;*/

//username: b071488dca2501
//password: ec20c0a1
//hostname: us-cdbr-iron-east-01.cleardb.net
//database name: heroku_f1cf93086df67b3

module.exports = {
    user: function (envi) {
        return envi? "b071488dca2501" : "root";
    },
    password: function (envi) {
        return envi? "ec20c0a1" : "root";
    },
    port: 3306,
    databaseName: function (envi) {
        return envi? "heroku_f1cf93086df67b3" : "movienightdb";
    },
    host_name: function (envi) {
        return envi? "us-cdbr-iron-east-01.cleardb.net" : process.env.IP;
    },
    SECRET_TOKEN: 'apimovienught20182u201516808u201523075'
};
