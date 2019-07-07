var User = require('../models/signupModel');
var bcrypt = require('bcrypt');


module.exports.signUp = function (req, res) {

    User.findUser({ email: req.body.email }, function (err, data) {
        if (err) {
            res.send(err);
        }
        else if (data.email == undefined) {

            bcrypt.hash(req.body.password, 10, function (err, hash) {
                if (err) {
                    res.send(err);
                }

                req.body.password = hash;
                var addUser = new User(req.body);
        
                User.createUser(addUser, function (err, data) {
                    if (err) {
                        res.status(204).json(err);
                    }  else {
                        res.status(201).json(data);
                    } 
                })
            
            });

        }
            
        else {
            res.status(201).json({error: 'Email already exists'})
        }
    })

}

