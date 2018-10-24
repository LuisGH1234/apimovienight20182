const services = require('../services/jwt-service');

function isAuth(req, res, next) {
    if(!req.headers.authorization){
        return res.status(403).json({ message: 'No tienes autorizacion' });
    }

    const token = req.headers.authorization;//.split(" ")[1];

    services.decodeToken(token)
        .then(response => {
            req.user_id = response.idd;
            req.email = response.sub;
            req.pwd = response.pwd;
            next();
        })
        .catch(response => {
           return res.status(response.status).json({ message: response.message });
        });
}

function AccessDone(req, res) {
    res.status(200).json({ message: `You have access (${req.email}, ${req.pwd})` });
}

module.exports = { isAuth, AccessDone };