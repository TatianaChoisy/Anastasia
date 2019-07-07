var User = require('../models/signupModel');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var config = require('../config/config')

module.exports.signIn = function (req, res) {

    User.findUser({email: req.body.email}, function (err, data) {
        if (err) {
            res.send(err);
        }
        else if (data[0] !== undefined) {
            
            bcrypt.compare(req.body.password, data[0].password).then(function (response) {
                if (response) {
                    const payload = {
                        User: data[0]
                    };
                    let token = jwt.sign(payload, config.secret, { expiresIn: '1h' });
                    res.status(201).json({ token })
                } else {
                    res.status(204).send({ error: 'Password did not match.'})
                }  
            });
            
        }
    })
};






