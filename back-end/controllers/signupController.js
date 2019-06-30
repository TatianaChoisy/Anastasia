var User = require('../models/signupModel');


module.exports.signup = function (req, res) {

        if (req.body.PasswordUser === req.body.PasswordUser2) {
            var addUser = new User(req.body);

            User.signUp(addUser, function (err, response) {
                let errors = [];

                if (req.body.FirstName && req.body.LastName && req.body.Pseudo && req.body.Email && req.body.PasswordUser && req.body.t_PasswordUser2) {
              
                } else {
                    errors.push({ message: 'Please fill in all fields.' });
                }
                
                if (req.body.PasswordUser !== req.body.PasswordUser2) {
                    errors.push({ message: 'Passwords do not match.' });
                }
                      
                if (err) {
                    res.send(err);
                        
                } else {
                    res.json(response);
                }
            });


        } else
            res.render('signup.js', { message: "Wrong password." })
        
    }

