const User = require('../models/user');
const service = require('../services/jwt-service');

function signUp(request, response) {
    // Patron Promises
    User.exist(request.body.email)
    .then(() => { 
        //la unica manera que entre aqui es que no haya error y no exista el usuario en BD
        return User.save(request.body);
    })
    .then(() => {
        //se guarda correctamente 
        return User.find(request.body.email);
    })
    .then(user => {
        //se encontro el usuario correctamente
        console.log(user);
        return response.status(201).json({ token: `${service.createToken(user)} ${user.id}` });
    })
    .catch(error => {
        console.log(error.consoleError);
        return response.json({ status: error.responseError });
    });
}

function singIn(req, res) {
    User.find(req.body.email).then(user => {
        if(!user) return res.status(404).json({ message: 'No user found' });
        if(user.password === req.body.password) {
            //req.user = user;
            res.setHeader('token', `${service.createToken(user)} ${user.id}`);
            res.status(200).json({
                access: 'true'
               // token: service.createToken(user),
               // user_id: user.id
            });
        } else {
            res.status(404).json({ access: 'false' });
        }
    }).catch(error => {
        res.status(500).json({ message: 'error' });
    });
}

module.exports = {
    signUp, singIn
};