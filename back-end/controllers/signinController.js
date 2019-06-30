var User = require('../models/signupModel');

//Routes
module.exports.signin = function (req, res) {

    if (req.body.t_Pseudo)
        return res.redirect('/');
    if (req.method !== 'POST') res.render('signin.js', {});
    else
    {
        if (req.body.t_Pseudo && req.body.t_Password)
        {
            User.signIn(findUser, function(err, res) {
                if (err) res.render('signin.js', {error: err});
                else if (typeof findUsers[0] == 'undefined') res.render('signin.js', {error: "Cannot find a user with the specified email"});
                else {
                    bcrypt.compare(req.body.t_Password, findUsers[0].t_Password).then(function(response) {
                        if (response) {
                            req.body_t_Pseudo = t_Pseudo;
                            return res.redirect('/catalog');
                        }
                        else {
                            res.render('signin.ejs', {error: "Wrong password"})
                        }
                    });
                }
            });
        }
        else
            res.render('signin.js', {error: "You must specify a email and a password"})
    }



}


