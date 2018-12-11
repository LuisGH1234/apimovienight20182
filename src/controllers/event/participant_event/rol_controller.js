const util = require('util');
const mysqlConnection = require('../../../config/database');

/* 
    Si se crea un objeto nuevo (const Query = util.promisify(mysqlConnection.query)),
    este nuevo objeto pierde dependencias provocando error al momento de utilizarlo.
    Por lo tanto, solo necesitamos redefinir la funcion.
*/
mysqlConnection.query = util.promisify(mysqlConnection.query);

/*exports.getRoles = (request, response) => {
    let sql = 'SELECT * FROM roles';
    mysqlConnection.query(sql, (error, rows, fiels) => {
        if(!error){
            let retu = {
                status: "ok",
                list: rows
            };
            response.json(retu);
        } else{
            console.log(error);
            response.json({status: "error"});
        }
    });
};*/

exports.getRoles = async (_, response) => {
    let sql = 'SELECT * FROM roles';
    try {
        const roles = await mysqlConnection.query(sql);
        const retu = {
            status: 'ok',
            list: roles
        }
        return response.json(retu);
    } catch (error) {
        console.log(error);
        return response.json({status: "error"});
    }
};