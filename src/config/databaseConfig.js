const credentials = {};

credentials.user ="b071488dca2501"; /*"root";*/
credentials.password = "ec20c0a1"; /*"root";*/
credentials.port = 3306;
credentials.databaseName = "heroku_f1cf93086df67b3"; /*"movienightdb";*/
credentials.host_name = "us-cdbr-iron-east-01.cleardb.net"; /*process.env.IP;*/

//username: b071488dca2501
//password: ec20c0a1
//hostname: us-cdbr-iron-east-01.cleardb.net
//database name: heroku_f1cf93086df67b3

/*class Credentials {
    constructor(local){
        this.local = local || true;
    }
    get user() {
        if (this.local){
            return "root";
        }
        return "b071488dca2501";
    }

    get password() {
        if (this.local){
            return "root";
        }
        return "ec20c0a1";
    }

    static port(){
        return 3306;
    }

    get database_name() {
        if (this.local){
            return "movienightdb";
        }
        return "heroku_f1cf93086df67b3";
    }

    get hostname() {
        if (this.local){
            return process.env.IP;
        }
        return "us-cdbr-iron-east-01.cleardb.net";
    }
}*/

module.exports = credentials;
