const jwt = require('jwt-simple');
const moment = require('moment');
const config = require('../config/databaseConfig');

function createToken(user) {
    const payload = {
        idd: user.id,
        sub: user.email,
        pwd: user.password,
        pho: user.phone
        //iat: moment().unix()
        //exp: moment().add(12, 'days').unix()
    };
    return jwt.encode(payload, config.SECRET_TOKEN);
}

function decodeToken(token) {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, config.SECRET_TOKEN);

            /*if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                });
            }*/
            resolve(payload);
        } catch (e) {
            reject({
                status: 500,
                message: 'Invalid token'
            });
        }
    });
}

module.exports = { createToken, decodeToken };