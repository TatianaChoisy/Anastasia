var mysql = require('mysql'),
    User = require('../models/signupModel');
    bcrypt = require('bcrypt');


module.exports.signup = function(req, res)
{
    if (req.session.user)
        return res.redirect('/');
    if (req.method !== 'POST') res.render('signup.js', {});
    else
    {
        if (req.body.password === req.body.password2)
        {
            User.create({email: req.body.email, password: req.body.password}, function(err, user) {
                if (err) res.render('signup.js', {error: err});
                else
                {
                    return res.redirect('/Signin');
                }
            });
        }
        else
            res.render('signup.js', {error: "wrong password"})
    }
};



// var signup = require('../models/signupModel');

// var express = require('express');
// var router = express.Router();

// // Sign Up Handle
// router.post('/signup', (req, res) => {
//     const { firstname, lastname, email, email2, password, password2 } = req.body;
//     let errors = [];

//     // Check required fields 
//     if (!firstname || !lastname || !email || email2 || password || password2) {
//         errors.push({ msg: 'Please fill in all fields.' });
//     }

//     // Check password match
//     if (password !== password2) {
//         errors.push({ msg: 'Passwords do not match.' });
//     }

//     // Check pass length
//     if (password.length < 6) {
//         errors.push({ msg: 'Password should be at least 6 characters' });
//     }

//     if (errors.length > 0) {
//         res.render('/signup', {
//             errors,
//             firstname,
//             lastname,
//             email,
//             email2,
//             password,
//             password2

//         });
      
//     } else {
//         res.send('pass');
//     }

// });

// module.exports = router;
