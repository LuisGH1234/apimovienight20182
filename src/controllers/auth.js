const User = require('../models/user');
const service = require('../services/jwt-service');

function signUp(request, response) {
    User.exist(request.body.email, (err, exist) => {
        if(!err && exist == false) {
            User.save(request.body, error => {
                if(!error){
                    console.log('user successfully saved');
                } else {
                    console.log('user did no successfully saved');
                }
            });
            
            User.find(request.body.email).then( user =>{
                console.log(user);
                response.status(201).json({ token: service.createToken(user) });
            }).catch( error => {
                console.log(error);
                response.status(404).json({ status: 'error' });
            });
        } else {
            response.json({ status: 'exist' });
        }
    });
}

function singIn(req, res) {
    User.find(req.body.email).then(user => {
        if(!user) return res.status(404).json({ message: 'No user found' });
        if(user.password === req.body.password) {
            req.user = user;
            res.status(200).json({
                access: 'true'
               // token: service.createToken(user),
               // user_id: user.id
            });
            res.writeHead(200, `${service.createToken(user)} ${user.id}`);
            res.end();
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