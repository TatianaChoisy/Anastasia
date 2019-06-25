

// const express = require('express'),
//     bodyParser = require('body-parser'),
//     cookieParser = require('cookie-parser');
//     path = require('path');

// // Define app to express

// const app = express();


// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookieParser());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// // Routes

// const signupRouter = require('./routes/signupRoute');
// var signinRouter = require('./routes/signinRoute');
// var subscribeRoute = require('./routes/subscribeRoute');

// var introRoute = require('./routes/introRoute');
// var aboutRoute = require('./routes/aboutRoute');

// var homeRoute = require('./routes/homeRoute');
// var searchRoute = require('./routes/searchRoute');



// app.use('/signup', signupRouter);
// app.use('/signin', signinRouter);
// app.use('/subscribe', subscribeRouter);

// app.use('/intro', introRouter);
// app.use('/about', aboutRouter);

// app.use('/home', homeRouter);
// app.use('/search', searchRouter);

// module.exports = app;